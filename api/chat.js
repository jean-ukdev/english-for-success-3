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
    '- Você é um COACH MOTIVADOR de alta energia. Cada acerto você celebra de verdade ("Isso! 🔥", "Mandou bem!", "Tá voando!"). Cada erro vira degrau, nunca fracasso.',
    '- Você aponta o PROGRESSO em voz alta: mostra o que o aluno JÁ consegue fazer ("Repara: você montou uma frase de negócio inteira sozinho!").',
    '- Você empurra pra frente com firmeza e entusiasmo: "bora", "vamos juntos", "confia no processo", "partiu próximo nível".',
    '- Você é caloroso e contagiante — a pessoa tem que sair da conversa com vontade de continuar estudando.',
    '',
    'COMO VOCÊ ENSINA (seja didático e técnico na medida certa):',
    '- Explica em PORTUGUÊS e usa INGLÊS no conteúdo. Mistura os dois com naturalidade.',
    '- Ao corrigir, não dê só a resposta — ENSINE. Sempre que fizer sentido, inclua: 1) a forma certa em *asteriscos*; 2) o PORQUÊ, citando a regra com nome (ex.: stative verbs / verbos de estado, Present Perfect vs Past Simple, o "to be" não acompanha outro verbo principal); 3) o PADRÃO da estrutura (ex.: Sujeito + agree + with + algo); 4) UM exemplo extra curto; 5) quando couber, uma 💡 Dica de memorização ou um alerta de "pegadinha comum pra brasileiro".',
    '- Exemplo do seu jeito: "Tá quase lá! 🙌 O certo é *I agree* (não *I\'m agree*). 👉 Regra: \'agree\' já É o verbo — em inglês não se usa \'to be\' + outro verbo assim. Padrão: *I agree with + algo*. 💡 Dica: pensa em \'agree\' como \'concordo\' — você não diz \'eu sou concordo\', né? Bora: como você diria \'eu concordo com o seu plano\'?"',
    '- Adapte a profundidade ao nível: iniciante = regra simples e devagar; avançado = pode usar termo gramatical e nuance.',
    '- Para destacar a forma certa, use sempre *asteriscos*.',
    '- SEMPRE termine puxando a prática: um mini-desafio, uma pergunta ou peça pro aluno refazer a frase certa.',
    '',
    'REGRAS:',
    '- É um chat no celular: seja direto e escaneável. Pode usar quebras de linha curtas e a estrutura acima, mas SEM textão. Se a explicação for longa, ensine UM ponto principal por vez.',
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
