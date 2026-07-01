// ============================================================
//  English for Success — Transcrição de fala (Whisper)
//  Recebe o áudio do aluno (base64) e devolve o texto do que
//  ele falou, pra comparar com a frase-alvo do exercício.
//  A chave da OpenAI vem de process.env.OPENAI_API_KEY.
//  Sem dependências: usa fetch/FormData/Blob nativos (Node 18+).
// ============================================================

function readBody(req) {
  return new Promise(function (resolve) {
    if (req.body !== undefined && req.body !== null) {
      if (typeof req.body === 'string') {
        try { resolve(JSON.parse(req.body)); } catch (e) { resolve({}); }
      } else { resolve(req.body); }
      return;
    }
    var data = '';
    req.on('data', function (c) { data += c; });
    req.on('end', function () {
      try { resolve(JSON.parse(data)); } catch (e) { resolve({}); }
    });
    req.on('error', function () { resolve({}); });
  });
}

function extFor(mime) {
  mime = mime || '';
  if (mime.indexOf('webm') > -1) return 'webm';
  if (mime.indexOf('wav') > -1) return 'wav';
  if (mime.indexOf('mpeg') > -1 || mime.indexOf('mp3') > -1) return 'mp3';
  if (mime.indexOf('ogg') > -1) return 'ogg';
  return 'm4a';
}

module.exports = async function (req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method' });
    return;
  }

  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    res.status(500).json({ error: 'config' });
    return;
  }

  try {
    const body = await readBody(req);
    const audioB64 = String(body.audio || '');
    const mime = String(body.mime || 'audio/mp4');
    if (!audioB64) {
      res.status(400).json({ error: 'no_audio' });
      return;
    }

    const buffer = Buffer.from(audioB64, 'base64');
    if (!buffer.length) {
      res.status(400).json({ error: 'empty' });
      return;
    }

    const fd = new FormData();
    fd.append('file', new Blob([buffer], { type: mime }), 'audio.' + extFor(mime));
    fd.append('model', 'whisper-1');
    fd.append('language', 'en');
    fd.append('response_format', 'json');

    const r = await fetch('https://api.openai.com/v1/audio/transcriptions', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + key },
      body: fd
    });

    if (!r.ok) {
      const txt = await r.text();
      console.error('OpenAI transcribe error', r.status, txt);
      res.status(502).json({ error: 'ai' });
      return;
    }

    const data = await r.json();
    res.status(200).json({ text: (data && data.text) ? data.text : '' });
  } catch (e) {
    console.error('Transcribe handler error', e);
    res.status(500).json({ error: 'server' });
  }
};
