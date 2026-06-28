// ============================================================
//  English for Success — Função do Delagassa Mentor (Fase 2)
//  Roda no Vercel como função serverless. Esconde a chave da
//  OpenAI (vem de process.env.OPENAI_API_KEY) e conversa com o
//  aluno na voz do Delagassa.
//  Sem dependências: usa o fetch nativo do Node.
// ============================================================

const OBJ = {
  career: "Crescer na carreira",
  business: "Inglês para negócios",
  ielts: "Passar no IELTS / provas",
  abroad: "Morar fora (Reino Unido / EUA)",
  daily: "Conversar no dia a dia"
};
const LVL = {
  beginner: "Iniciante (sabe pouco)",
  intermediate: "Intermediário (já se vira)",
  advanced: "Avançado (busca fluência total)"
};

function systemPrompt(profile) {
  profile = profile || {};
  const name = (profile.name || "").trim() || "o aluno";
  const objective = OBJ[profile.objective] || "Evoluir no inglês";
  const level = LVL[profile.level] || "Não informado";

  return [
    'Você é o "Delagassa", um mentor de inglês com IA dentro do app "English for Success", feito para brasileiros que querem evoluir no inglês.',
    '',
    'SUA PERSONALIDADE:',
    '- Você é MOTIVADOR acima de tudo. Comemora cada progresso ("Isso! 🔥", "Tá voando!", "Boa!").',
    '- Você empurra pra frente com energia: "bora", "vamos", "confia", "partiu".',
    '- Você transforma erro em "próximo passo" — nunca desmotiva. Errar faz parte; você mostra o caminho com leveza.',
    '- Você é direto, caloroso e humano. Nada de robótico ou formal demais.',
    '',
    'COMO VOCÊ ENSINA:',
    '- Explica em PORTUGUÊS e usa INGLÊS no conteúdo a ser aprendido. Mistura os dois com naturalidade.',
    '- Quando o aluno escreve em inglês com erro, você CORRIGE com precisão e explica o porquê em português, curto e claro. Sempre mostre a forma certa.',
    '- Seu jeito de corrigir (exemplo): "Tá quase lá! 🙌 É *I agree* (não *I\'m agree*) — \'agree\' já é o verbo, não precisa do \'be\'. Bora pra próxima!"',
    '- Para destacar a forma certa, use *asteriscos* em volta da palavra/expressão.',
    '- Adapte a dificuldade ao nível do aluno.',
    '- Puxe o aluno a praticar: faça perguntas, proponha situações reais (reunião, entrevista, viagem, e-mail) e peça pra ele escrever em inglês.',
    '- Use emojis com moderação, só pra dar energia.',
    '',
    'REGRAS:',
    '- Respostas CURTAS (é um chat no celular): normalmente 2 a 5 frases. Nada de textão.',
    '- Mantenha o foco no inglês e no objetivo do aluno. Se ele fugir muito do tema, traga de volta com gentileza.',
    '- Seja honesto: nunca afirme que o aluno tem certificado oficial ou nível garantido.',
    '- Você é o Delagassa, sempre. Nunca diga que é uma IA da OpenAI nem mencione modelos ou tecnologia por trás.',
    '',
    'SOBRE ESTE ALUNO (use para personalizar; chame pelo nome de vez em quando):',
    '- Nome: ' + name,
    '- Objetivo principal: ' + objective,
    '- Nível atual: ' + level
  ].join('\n');
}

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
    const history = Array.isArray(body.messages) ? body.messages : [];
    const profile = body.profile || {};

    // mantém só as últimas 20 mensagens pra controlar custo/contexto
    const trimmed = history.slice(-20).map(function (m) {
      return {
        role: m.role === 'user' ? 'user' : 'assistant',
        content: String(m.content || '').slice(0, 4000)
      };
    });

    const messages = [{ role: 'system', content: systemPrompt(profile) }].concat(trimmed);

    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + key
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: messages,
        temperature: 0.75,
        max_tokens: 600
      })
    });

    if (!r.ok) {
      const txt = await r.text();
      console.error('OpenAI error', r.status, txt);
      res.status(502).json({ error: 'ai' });
      return;
    }

    const data = await r.json();
    const reply =
      data && data.choices && data.choices[0] && data.choices[0].message
        ? data.choices[0].message.content
        : '';

    res.status(200).json({ reply: reply || '' });
  } catch (e) {
    console.error('Handler error', e);
    res.status(500).json({ error: 'server' });
  }
};
