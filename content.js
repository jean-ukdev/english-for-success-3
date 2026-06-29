/* ============================================================
   English for Success — Conteúdo das Trilhas (Fase 3)
   Arquivo SEPARADO do index.html. Para adicionar/editar aulas,
   mexa só aqui. O app lê window.EFS_CONTENT.

   Formato de cada aula (lesson):
     id       : identificador único (ex.: "fnd-1")
     title    : título da aula
     minutes  : tempo estimado de leitura
     blocks[] : blocos de conteúdo, na ordem em que aparecem:
       { type:"text",     html:"..." }                      -> parágrafo
       { type:"example",  title:"...", items:[{en,pt}] }     -> exemplos EN/PT
       { type:"tip",      html:"..." }                       -> caixa de dica
       { type:"exercise", question:"...", options:[...],
                          answer:Índice, explain:"..." }      -> exercício
   Em html/explain pode usar <strong>...</strong> ou *asterisco* p/ destaque.
   ============================================================ */

window.EFS_CONTENT = {
  tracks: [
    {
      id: "foundation",
      emoji: "🌱",
      title: "Foundation",
      subtitle: "A base do inglês, do zero — pra você construir com segurança.",
      lessons: [
        {
          id: "fnd-1",
          title: "Pronomes pessoais",
          minutes: 5,
          blocks: [
            { type: "text", html: "Os <strong>pronomes pessoais</strong> (subject pronouns) substituem o nome de quem faz a ação. Eles são a base de quase toda frase em inglês." },
            { type: "example", title: "Os 7 pronomes", items: [
              { en: "I", pt: "eu" },
              { en: "you", pt: "você / vocês" },
              { en: "he", pt: "ele" },
              { en: "she", pt: "ela" },
              { en: "it", pt: "ele / ela (coisas e animais)" },
              { en: "we", pt: "nós" },
              { en: "they", pt: "eles / elas" }
            ]},
            { type: "text", html: "Dois detalhes que confundem brasileiro: <strong>you</strong> serve para \"você\" E \"vocês\" (singular e plural), e <strong>it</strong> é usado para coisas, objetos e animais — algo que não tem igual no português." },
            { type: "tip", html: "<strong>I</strong> (eu) é SEMPRE maiúsculo, em qualquer lugar da frase. Nunca escreva \"i\" minúsculo." },
            { type: "exercise", question: "Qual pronome você usa para falar de uma mesa (table)?", options: ["he", "she", "it"], answer: 2, explain: "Coisas e objetos usam *it*. He e she são só para pessoas." },
            { type: "exercise", question: "\"___ are my friends.\" (Eles são meus amigos.)", options: ["We", "They", "You"], answer: 1, explain: "*They* = eles / elas. We = nós; You = você / vocês." }
          ]
        },
        {
          id: "fnd-2",
          title: "Verbo TO BE (ser e estar)",
          minutes: 6,
          blocks: [
            { type: "text", html: "O verbo <strong>to be</strong> significa <strong>ser</strong> e <strong>estar</strong> ao mesmo tempo. Ele muda de forma conforme o pronome." },
            { type: "example", title: "As formas do TO BE", items: [
              { en: "I am", pt: "eu sou / estou" },
              { en: "you are", pt: "você é / está" },
              { en: "he / she / it is", pt: "ele / ela é / está" },
              { en: "we are", pt: "nós somos / estamos" },
              { en: "they are", pt: "eles são / estão" }
            ]},
            { type: "text", html: "No dia a dia, quase sempre se usa a forma contraída: <strong>I'm, you're, he's, she's, it's, we're, they're</strong>." },
            { type: "example", title: "Na prática", items: [
              { en: "I'm ready.", pt: "Estou pronto." },
              { en: "She's a doctor.", pt: "Ela é médica." },
              { en: "They're at home.", pt: "Eles estão em casa." }
            ]},
            { type: "tip", html: "Idade em inglês usa o <strong>to be</strong>, não \"have\": o certo é *I'm 30 years old* (não *I have 30 years*)." },
            { type: "exercise", question: "Complete: \"She ___ my sister.\"", options: ["am", "is", "are"], answer: 1, explain: "He / She / It usa *is*." },
            { type: "exercise", question: "Como se diz \"Nós estamos felizes\"?", options: ["We is happy", "We are happy", "We am happy"], answer: 1, explain: "We sempre usa *are*." },
            { type: "exercise", question: "Qual a forma contraída de \"it is\"?", options: ["its", "it's", "is't"], answer: 1, explain: "*it's* = it is. Cuidado: *its* (sem apóstrofo) significa 'dele / dela' (posse)." }
          ]
        },
        {
          id: "fnd-3",
          title: "Present Simple (rotinas e hábitos)",
          minutes: 6,
          blocks: [
            { type: "text", html: "O <strong>Present Simple</strong> é o tempo das <strong>rotinas, hábitos e verdades</strong> — coisas que você faz sempre: trabalho, estudo, gosto." },
            { type: "example", title: "Frases do dia a dia", items: [
              { en: "I work every day.", pt: "Eu trabalho todo dia." },
              { en: "They live in Brazil.", pt: "Eles moram no Brasil." },
              { en: "I like coffee.", pt: "Eu gosto de café." }
            ]},
            { type: "text", html: "A grande regra: com <strong>he, she, it</strong>, o verbo ganha um <strong>-s</strong> no final. É o detalhe que mais derruba brasileiro." },
            { type: "example", title: "Com he / she / it", items: [
              { en: "He works in a bank.", pt: "Ele trabalha num banco." },
              { en: "She likes music.", pt: "Ela gosta de música." },
              { en: "It rains a lot here.", pt: "Chove muito aqui." }
            ]},
            { type: "tip", html: "Regra de ouro: <strong>He, She, It → verbo + S</strong>. Pensa: \"ele / ela sempre tem o S\"." },
            { type: "exercise", question: "Complete: \"She ___ English.\" (Ela estuda inglês.)", options: ["study", "studies", "studys"], answer: 1, explain: "Com she o verbo ganha -s, e *study* vira *studies* (y depois de consoante vira -ies)." },
            { type: "exercise", question: "Qual está correto?", options: ["I works here", "He work here", "He works here"], answer: 2, explain: "He pede o -s: *He works*. 'I' não leva -s." },
            { type: "exercise", question: "\"They ___ TV at night.\"", options: ["watch", "watches", "watchs"], answer: 0, explain: "They (eles) NÃO leva -s. Só he / she / it leva." }
          ]
        },
        {
          id: "fnd-4",
          title: "Artigos: a / an / the",
          minutes: 5,
          blocks: [
            { type: "text", html: "<strong>a</strong> e <strong>an</strong> significam \"um / uma\" (algo não específico). <strong>the</strong> significa \"o / a / os / as\" e aponta para algo específico." },
            { type: "example", title: "A diferença", items: [
              { en: "a car", pt: "um carro (qualquer)" },
              { en: "the car", pt: "o carro (aquele específico)" },
              { en: "an apple", pt: "uma maçã" }
            ]},
            { type: "text", html: "Quando usar <strong>a</strong> ou <strong>an</strong>? Depende do <strong>SOM</strong> da próxima palavra: <strong>an</strong> antes de som de vogal, <strong>a</strong> antes de som de consoante." },
            { type: "example", title: "É o som, não a letra", items: [
              { en: "a book", pt: "um livro" },
              { en: "an hour", pt: "uma hora (o 'h' é mudo → som de vogal)" },
              { en: "a university", pt: "uma universidade (som de 'iu' → consoante)" }
            ]},
            { type: "tip", html: "Não é a letra, é o SOM. Por isso *an hour* (h mudo) mas *a university* (som de 'iu')." },
            { type: "exercise", question: "Complete: \"I have ___ idea.\"", options: ["a", "an", "the"], answer: 1, explain: "'idea' começa com som de vogal → *an*." },
            { type: "exercise", question: "\"She is ___ engineer.\"", options: ["a", "an", "the"], answer: 1, explain: "'engineer' tem som de vogal (ê) → *an*." },
            { type: "exercise", question: "\"Can you close ___ door, please?\" (aquela porta específica)", options: ["a", "an", "the"], answer: 2, explain: "Porta específica que os dois conhecem → *the*." }
          ]
        }
      ]
    },

    { id: "everyday", emoji: "💬", title: "Everyday English",  subtitle: "Inglês do dia a dia, conversas reais.",            lessons: [] },
    { id: "ielts",    emoji: "🎓", title: "IELTS",            subtitle: "Preparação no formato real da prova + simulados.", lessons: [] },
    { id: "business", emoji: "💼", title: "Business English", subtitle: "Inglês para reuniões, e-mails e negócios.",       lessons: [] },
    { id: "career",   emoji: "🚀", title: "Career English",   subtitle: "Entrevistas, currículo e crescimento profissional.", lessons: [] }
  ]
};
