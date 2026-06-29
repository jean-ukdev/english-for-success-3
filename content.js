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
        },
        {
          id: "fnd-5",
          title: "Plural dos substantivos",
          minutes: 5,
          blocks: [
            { type: "text", html: "Para falar de mais de um, o substantivo vira <strong>plural</strong>. A regra geral é simples: adicione <strong>-s</strong> no final." },
            { type: "example", title: "Regra geral", items: [
              { en: "book → books", pt: "livro → livros" },
              { en: "car → cars", pt: "carro → carros" },
              { en: "house → houses", pt: "casa → casas" }
            ]},
            { type: "text", html: "Casos especiais: palavras em <strong>-s, -ss, -sh, -ch, -x</strong> ganham <strong>-es</strong>; e <strong>-y</strong> depois de consoante vira <strong>-ies</strong>." },
            { type: "example", title: "Casos especiais", items: [
              { en: "bus → buses", pt: "ônibus" },
              { en: "box → boxes", pt: "caixa → caixas" },
              { en: "city → cities", pt: "cidade → cidades" },
              { en: "baby → babies", pt: "bebê → bebês" }
            ]},
            { type: "text", html: "E alguns são <strong>irregulares</strong> — você decora: man → men, woman → women, child → children, person → people." },
            { type: "tip", html: "Alguns não mudam no plural, como *fish* e *sheep*: one fish, two fish." },
            { type: "exercise", question: "Qual o plural de \"city\"?", options: ["citys", "cities", "cityes"], answer: 1, explain: "-y depois de consoante vira *-ies*: cities." },
            { type: "exercise", question: "Qual o plural de \"child\"?", options: ["childs", "children", "childes"], answer: 1, explain: "*child* é irregular: o plural é *children*." },
            { type: "exercise", question: "Qual o plural de \"box\"?", options: ["boxs", "boxes", "boxies"], answer: 1, explain: "Palavras em -x ganham *-es*: boxes." }
          ]
        },
        {
          id: "fnd-6",
          title: "Perguntas com do / does",
          minutes: 6,
          blocks: [
            { type: "text", html: "Para fazer <strong>perguntas</strong> no presente, o inglês usa os auxiliares <strong>do</strong> e <strong>does</strong> no começo da frase. Eles não têm tradução — são ferramentas de pergunta." },
            { type: "example", title: "Com I / you / we / they", items: [
              { en: "Do you like coffee?", pt: "Você gosta de café?" },
              { en: "Do they work here?", pt: "Eles trabalham aqui?" }
            ]},
            { type: "text", html: "Com <strong>he, she, it</strong>, use <strong>does</strong>. E atenção: o verbo principal volta ao normal (sem o -s — porque o -s já foi pro <strong>does</strong>)." },
            { type: "example", title: "Com he / she / it", items: [
              { en: "Does she like music?", pt: "Ela gosta de música?" },
              { en: "Does he work here?", pt: "Ele trabalha aqui?" }
            ]},
            { type: "tip", html: "O -s do he/she/it vai pro *does*, então o verbo fica limpo: *Does she like* (não *Does she likes*)." },
            { type: "exercise", question: "Complete: \"___ you speak English?\"", options: ["Do", "Does", "Are"], answer: 0, explain: "Com \"you\" usa-se *Do*." },
            { type: "exercise", question: "Qual está correto?", options: ["Does he plays?", "Does he play?", "Do he play?"], answer: 1, explain: "He usa *does*, e o verbo principal fica sem -s: *Does he play?*" },
            { type: "exercise", question: "\"___ your sister live in Brazil?\"", options: ["Do", "Does", "Is"], answer: 1, explain: "\"your sister\" = she → *Does*." }
          ]
        },
        {
          id: "fnd-7",
          title: "this / that / these / those",
          minutes: 5,
          blocks: [
            { type: "text", html: "Essas palavrinhas apontam para coisas. A escolha depende de <strong>perto ou longe</strong> e de <strong>singular ou plural</strong>." },
            { type: "example", title: "O mapa", items: [
              { en: "this", pt: "este / esta (perto, singular)" },
              { en: "that", pt: "aquele / aquela (longe, singular)" },
              { en: "these", pt: "estes / estas (perto, plural)" },
              { en: "those", pt: "aqueles / aquelas (longe, plural)" }
            ]},
            { type: "example", title: "Na prática", items: [
              { en: "This is my phone.", pt: "Este é meu celular." },
              { en: "That car is fast.", pt: "Aquele carro é rápido." },
              { en: "These shoes are new.", pt: "Estes sapatos são novos." },
              { en: "Those people are nice.", pt: "Aquelas pessoas são legais." }
            ]},
            { type: "tip", html: "Dica: *this* e *these* dão ideia de perto; *that* e *those* de longe." },
            { type: "exercise", question: "\"___ books here are mine.\" (estes, aqui perto)", options: ["This", "These", "Those"], answer: 1, explain: "Perto + plural = *these*." },
            { type: "exercise", question: "\"Look at ___ bird in the sky!\" (aquele, longe)", options: ["this", "that", "these"], answer: 1, explain: "Longe + singular = *that*." }
          ]
        },
        {
          id: "fnd-8",
          title: "there is / there are",
          minutes: 5,
          blocks: [
            { type: "text", html: "Para dizer que algo <strong>existe</strong> ou está em algum lugar (o nosso \"há\" / \"tem\"), o inglês usa <strong>there is</strong> (singular) e <strong>there are</strong> (plural)." },
            { type: "example", title: "Afirmando", items: [
              { en: "There is a book on the table.", pt: "Há um livro na mesa." },
              { en: "There are two cars outside.", pt: "Há dois carros lá fora." }
            ]},
            { type: "text", html: "Na pergunta, inverte: <strong>Is there...? / Are there...?</strong> No negativo: <strong>There isn't / There aren't</strong>." },
            { type: "example", title: "Perguntando e negando", items: [
              { en: "Is there a problem?", pt: "Há algum problema?" },
              { en: "There aren't any chairs.", pt: "Não há cadeiras." }
            ]},
            { type: "tip", html: "Não use \"have\" aqui. \"Tem um livro na mesa\" NÃO é *Have a book*, é *There is a book*." },
            { type: "exercise", question: "\"___ a pen in my bag.\" (há uma caneta)", options: ["There is", "There are", "Have"], answer: 0, explain: "Singular (a pen) → *There is*." },
            { type: "exercise", question: "\"___ many people here.\"", options: ["There is", "There are", "It has"], answer: 1, explain: "Plural (many people) → *There are*." }
          ]
        }
      ]
    },

    { id: "everyday", emoji: "💬", title: "Everyday English",  subtitle: "Inglês do dia a dia, conversas reais.",            lessons: [] },
    { id: "ielts", emoji: "🎓", title: "IELTS", subtitle: "Preparação no formato real da prova + simulados.",
      lessons: [
        {
          id: "ielts-1",
          title: "Entendendo o IELTS",
          minutes: 6,
          blocks: [
            { type: "text", html: "O <strong>IELTS</strong> (International English Language Testing System) é o exame de inglês mais aceito no mundo para <strong>trabalho, estudo e imigração</strong> no Reino Unido, Austrália, Canadá, Irlanda e outros países." },
            { type: "text", html: "Existem duas versões: <strong>Academic</strong> (para universidade) e <strong>General Training</strong> (para imigração e trabalho). A estrutura é parecida; muda o conteúdo de algumas partes." },
            { type: "example", title: "As 4 partes da prova", items: [
              { en: "Listening", pt: "~30 min · áudios + perguntas" },
              { en: "Reading", pt: "60 min · 3 textos, 40 questões" },
              { en: "Writing", pt: "60 min · 2 tarefas" },
              { en: "Speaking", pt: "~11–14 min · entrevista oral" }
            ]},
            { type: "text", html: "A nota vai de <strong>0 a 9</strong> (band score), com meios pontos (6.5, 7.0...). A maioria das universidades pede entre <strong>6.0 e 7.0</strong>. Não existe \"passar ou reprovar\" — você recebe uma banda." },
            { type: "tip", html: "Descubra a banda exata que o seu objetivo (universidade ou visto) exige e mire nela. Aqui no app, a gente treina cada parte no formato real — e o Delagassa corrige sua redação no chat." },
            { type: "exercise", question: "Quantas questões tem a parte de Reading?", options: ["20", "40", "60"], answer: 1, explain: "Reading tem *40 questões* em 60 minutos, divididas em 3 textos." },
            { type: "exercise", question: "A nota (band score) do IELTS vai de...?", options: ["0 a 10", "0 a 9", "1 a 5"], answer: 1, explain: "A banda vai de *0 a 9*, com meios pontos." },
            { type: "exercise", question: "Qual versão é para entrar na universidade?", options: ["General Training", "Academic", "Business"], answer: 1, explain: "A versão *Academic* é a exigida para estudo universitário." }
          ]
        },
        {
          id: "ielts-2",
          title: "Simulado de Reading 1",
          minutes: 12,
          blocks: [
            { type: "tip", html: "<strong>Reading practice.</strong> Leia o texto e responda às 7 questões. Nas questões <strong>True / False / Not Given</strong>: marque <strong>True</strong> se o texto confirma, <strong>False</strong> se o texto contradiz, e <strong>Not Given</strong> se a informação não aparece." },
            { type: "text", html: "<strong>Green Spaces in Modern Cities</strong>" },
            { type: "text", html: "As cities around the world grow larger, urban planners are paying closer attention to the value of parks, gardens and other green spaces. Once seen as simple decoration, these areas are now considered essential to the health of a city and its residents. Research from several countries suggests that access to nature, even in small amounts, can have a measurable effect on how people feel and function." },
            { type: "text", html: "One of the clearest benefits is related to physical health. People who live near parks tend to walk and exercise more often, which lowers the risk of heart disease and other conditions. Green spaces also help clean the air by absorbing pollution and releasing oxygen, and they can lower the temperature of a neighbourhood during hot summer months. In dense cities, this cooling effect can make a real difference." },
            { type: "text", html: "The mental benefits may be just as important. Studies have found that spending time among trees and plants can reduce stress and improve concentration. Some hospitals have even designed gardens for patients, after noticing that a view of nature seemed to help people recover more quickly. For workers in busy offices, a short walk in a park during lunch can restore focus for the afternoon." },
            { type: "text", html: "Despite these advantages, green spaces are not shared equally. In many cities, wealthier neighbourhoods have more parks and trees, while poorer areas have far fewer. Some city governments are now trying to correct this imbalance by planting trees and building small parks in the areas that need them most. The challenge is large, but the possible reward — healthier, happier communities — is one that many cities believe is worth the effort." },
            { type: "exercise", question: "1. In the past, parks were often seen only as decoration.", options: ["True", "False", "Not Given"], answer: 0, explain: "O texto diz \"Once seen as simple decoration\" — antes eram vistas como simples decoração. → *True*." },
            { type: "exercise", question: "2. People who live near parks usually exercise less.", options: ["True", "False", "Not Given"], answer: 1, explain: "O texto afirma o contrário: quem mora perto de parques se exercita *mais*. → *False*." },
            { type: "exercise", question: "3. Green spaces can lower the temperature of a neighbourhood.", options: ["True", "False", "Not Given"], answer: 0, explain: "\"they can lower the temperature... during hot summer months\". → *True*." },
            { type: "exercise", question: "4. Most hospitals today have gardens for patients.", options: ["True", "False", "Not Given"], answer: 2, explain: "O texto fala em *alguns* hospitais (\"some hospitals\"), não na maioria. A proporção não é informada. → *Not Given*." },
            { type: "exercise", question: "5. According to the text, a short walk in a park during lunch can:", options: ["cure heart disease", "restore focus for the afternoon", "replace a full meal"], answer: 1, explain: "\"a short walk in a park during lunch can restore focus for the afternoon\"." },
            { type: "exercise", question: "6. What problem does the text mention about green spaces?", options: ["They are too expensive to build", "They are not shared equally between rich and poor areas", "They attract too many tourists"], answer: 1, explain: "O texto diz que parques não são distribuídos igualmente — bairros ricos têm mais." },
            { type: "exercise", question: "7. Some city governments are planting trees in poorer areas.", options: ["True", "False", "Not Given"], answer: 0, explain: "\"planting trees and building small parks in the areas that need them most\". → *True*." }
          ]
        }
      ]
    },
    { id: "business", emoji: "💼", title: "Business English", subtitle: "Inglês para reuniões, e-mails e negócios.",       lessons: [] },
    { id: "career",   emoji: "🚀", title: "Career English",   subtitle: "Entrevistas, currículo e crescimento profissional.", lessons: [] }
  ]
};
