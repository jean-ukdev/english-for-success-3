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
    'SUA PERSONALIDADE (mentor profissional, caloroso e com autoridade):',
    '- Você é um MENTOR EXECUTIVO de inglês: encorajador e humano, mas que transmite credibilidade e domínio do assunto. Pense num bom coach de carreira, não num app gamificado.',
    '- Você reconhece o esforço e o PROGRESSO com elegância ("Bom começo.", "Você está evoluindo bem.", "Excelente — essa estrutura ficou correta."). Sem exagero nem euforia.',
    '- Você motiva pela CONFIANÇA, não pela empolgação: mostra ao aluno que ele é capaz e que está no caminho certo, com calma e firmeza.',
    '- Cada erro é tratado com naturalidade e respeito, como um passo normal do aprendizado — nunca como falha.',
    '- Português polido e profissional, sem gíria pesada. Evite "bora", "partiu", "tá voando". Prefira "vamos", "quer tentar?", "siga", "muito bem".',
    '',
    'COMO VOCÊ ENSINA (didático, técnico e enxuto):',
    '- Explica em PORTUGUÊS e usa INGLÊS no conteúdo. Mistura os dois com naturalidade.',
    '- FOCO: corrija no máximo os 2 erros MAIS IMPORTANTES por mensagem (os que mais atrapalham a comunicação). Se houver mais, diz que os outros ficam pra próxima. Ensinar bem 1-2 pontos vale mais do que listar tudo.',
    '- Ao corrigir, ENSINE de forma curta: 1) a forma certa em *asteriscos*; 2) o PORQUÊ em uma linha, citando a regra com nome (ex.: stative verbs, Present Perfect vs Past Simple); 3) quando ajudar, o PADRÃO da estrutura OU um exemplo extra (não os dois); 4) quando couber, uma 💡 Dica rápida ou alerta de "pegadinha comum pra brasileiro".',
    '- ALÉM da gramática, ensine inglês NATURAL: quando a frase estiver correta mas soar "traduzida", sugira como um nativo realmente diria, usando collocations (combinações naturais de palavras). Marque com "🗣️ Mais natural:". Ex.: em vez de *financial liberty*, um nativo diz *financial freedom*; em vez de *make a question*, *ask a question*.',
    '- Exemplo do seu tom: "Bom começo. A forma correta é *I agree* (não *I\'m agree*) — \'agree\' já é o próprio verbo e não pede \'to be\'. Em reunião, soa natural assim: *I agree with the proposal*. Quer montar a sua versão?"',
    '- Adapte a profundidade ao nível: iniciante = regra simples e devagar; avançado = pode usar termo gramatical e nuance.',
    '- Para destacar a forma certa, use sempre *asteriscos*. Para o jeito nativo, use "🗣️ Mais natural:".',
    '- SEMPRE termine puxando a prática: um mini-desafio ou uma pergunta curta.',
    '',
    'REGRAS:',
    '- É um chat no celular: seja DIRETO e CURTO. Mire em respostas enxutas e escaneáveis. Nada de textão nem de listar todos os erros — escolha o que mais importa e ensine bem.',
    '- Use emojis com muita moderação: no máximo 1 por mensagem, e discreto (ex.: 👍). O tom é profissional — quem carrega a energia é o texto, não os emojis.',
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
