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
          minutes: 7,
          blocks: [
            { type: "intro", html: "Antes de montar qualquer frase, você precisa saber <strong>quem</strong> faz a ação. É exatamente isso que os pronomes pessoais resolvem — eles são a peça nº 1 do inglês. Domine esses 7 e metade do caminho já está andada." },
            { type: "objectives", items: [
              "Reconhecer os 7 pronomes pessoais em inglês",
              "Saber quando usar <strong>you</strong> para 'você' e 'vocês'",
              "Usar <strong>it</strong> corretamente para coisas e animais"
            ]},
            { type: "text", html: "Os <strong>pronomes pessoais</strong> (subject pronouns) substituem o nome de quem faz a ação. Em vez de repetir \"João\", você diz <strong>he</strong>. Eles aparecem em quase toda frase — por isso valem ouro." },
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
            { type: "pronun", html: "<strong>he</strong> tem i longo (rí); <strong>it</strong> é curtinho (ét). <strong>They</strong> começa com o th sonoro: ponha a língua entre os dentes e diga dei." },
            { type: "vocab", items: [
              { en: "man", pt: "homem (→ he)" },
              { en: "woman", pt: "mulher (→ she)" },
              { en: "friend", pt: "amigo / amiga" },
              { en: "dog", pt: "cachorro (→ it)" },
              { en: "thing", pt: "coisa (→ it)" }
            ]},
            { type: "exercise", question: "Qual pronome você usa para falar de uma mesa (table)?", options: ["he", "she", "it"], answer: 2, explain: "Coisas e objetos usam *it*. He e she são só para pessoas." },
            { type: "exercise", question: "\"___ are my friends.\" (Eles são meus amigos.)", options: ["We", "They", "You"], answer: 1, explain: "*They* = eles / elas. We = nós; You = você / vocês." },
            { type: "exercise", question: "\"My brother is here. ___ is tall.\" (Meu irmão está aqui.)", options: ["He", "She", "It"], answer: 0, explain: "Irmão = homem → *He*." },
            { type: "exercise", question: "Qual pronome substitui \"you and I\" (você e eu)?", options: ["They", "We", "You"], answer: 1, explain: "Você e eu = nós = *We*." },
            { type: "write", prompt: "Escreva o pronome para: \"my brother\" e \"my mother\".", answer: "he / she", explain: "Homem = *he*; mulher = *she*." },
            { type: "fill", sentence: "The dog is big. ___ is friendly.", answer: "It", hint: "ele/ela — o cachorro", explain: "Coisa/animal = *It*." },
            { type: "speak", text: "He is my friend.", hint: "Ele é meu amigo." },
            { type: "speak", text: "She is my sister.", hint: "Ela é minha irmã." },
            { type: "speak", text: "They are students.", hint: "Eles são estudantes." },
            { type: "summary", items: [
              "Os 7 pronomes: <strong>I, you, he, she, it, we, they</strong>.",
              "<strong>You</strong> serve para 'você' e 'vocês'.",
              "<strong>It</strong> é para coisas, objetos e animais.",
              "<strong>I</strong> é sempre maiúsculo."
            ]},
            { type: "flash", cards: [{"f": "man", "b": "homem (→ he)"}, {"f": "woman", "b": "mulher (→ she)"}, {"f": "friend", "b": "amigo / amiga"}, {"f": "dog", "b": "cachorro (→ it)"}, {"f": "thing", "b": "coisa (→ it)"}] },
            { type: "homework", html: "Escreva 5 frases sobre pessoas da sua família usando he, she e they — e peça pro Delagassa corrigir." }
          ]
        },
        {
          id: "fnd-2",
          title: "Verbo TO BE (ser e estar)",
          minutes: 7,
          blocks: [
            { type: "intro", html: "O <strong>TO BE</strong> é o verbo mais importante do inglês — ele é \"ser\" e \"estar\" ao mesmo tempo. Você usa em quase toda apresentação, descrição e conversa. Sem ele, não se monta nem um \"eu sou\"." },
            { type: "objectives", items: [
              "Usar <strong>am / is / are</strong> com cada pronome",
              "Falar sua idade e profissão em inglês",
              "Usar as formas contraídas (I'm, she's...)"
            ]},
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
            { type: "vocab", items: [
              { en: "ready", pt: "pronto" },
              { en: "tired", pt: "cansado" },
              { en: "happy", pt: "feliz" },
              { en: "busy", pt: "ocupado" },
              { en: "late", pt: "atrasado" }
            ]},
            { type: "tip", html: "Idade em inglês usa o <strong>to be</strong>, não \"have\": o certo é *I'm 30 years old* (não *I have 30 years*)." },
            { type: "pronun", html: "<strong>I'm</strong> soa aim. <strong>are</strong> é fraco: ár. Em <strong>she's</strong>, o final tem som de z: chiz." },
            { type: "exercise", question: "Complete: \"She ___ my sister.\"", options: ["am", "is", "are"], answer: 1, explain: "He / She / It usa *is*." },
            { type: "exercise", question: "Como se diz \"Nós estamos felizes\"?", options: ["We is happy", "We are happy", "We am happy"], answer: 1, explain: "We sempre usa *are*." },
            { type: "exercise", question: "\"I ___ from Brazil.\" (Eu sou do Brasil.)", options: ["am", "is", "are"], answer: 0, explain: "I sempre usa *am*." },
            { type: "exercise", question: "Qual a forma contraída de \"it is\"?", options: ["its", "it's", "is't"], answer: 1, explain: "*it's* = it is. Cuidado: *its* (sem apóstrofo) significa 'dele / dela' (posse)." },
            { type: "write", prompt: "Escreva em inglês: \"Eu sou professor.\"", answer: "I am a teacher.", explain: "Eu sou = *I am*; não esqueça o artigo *a* antes da profissão." },
            { type: "fill", sentence: "She ___ a doctor.", answer: "is", hint: "é", explain: "he / she / it → *is*." },
            { type: "speak", text: "She is a doctor.", hint: "Ela é médica." },
            { type: "speak", text: "I am ready.", hint: "Estou pronto." },
            { type: "speak", text: "We are happy.", hint: "Nós estamos felizes." },
            { type: "summary", items: [
              "TO BE = ser e estar (os dois).",
              "<strong>I am</strong>, <strong>you / we / they are</strong>, <strong>he / she / it is</strong>.",
              "Idade usa TO BE: *I'm 30 years old*.",
              "No dia a dia, use as contrações: I'm, she's, they're."
            ]},
            { type: "flash", cards: [{"f": "ready", "b": "pronto"}, {"f": "tired", "b": "cansado"}, {"f": "happy", "b": "feliz"}, {"f": "busy", "b": "ocupado"}, {"f": "late", "b": "atrasado"}] },
            { type: "homework", html: "Apresente-se pro Delagassa em inglês: nome, cidade e profissão (use I'm...). Ele te dá o retorno na hora." }
          ]
        },
        {
          id: "fnd-3",
          title: "Present Simple (rotinas e hábitos)",
          minutes: 7,
          blocks: [
            { type: "intro", html: "É com o <strong>Present Simple</strong> que você fala da sua vida: o que você faz, gosta e estuda. É o tempo verbal mais usado no inglês do dia a dia — e tem uma regrinha que derruba quase todo brasileiro." },
            { type: "objectives", items: [
              "Falar de rotinas e hábitos em inglês",
              "Aplicar o <strong>-s</strong> em he / she / it",
              "Evitar o erro clássico do -s no pronome errado"
            ]},
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
            { type: "vocab", items: [
              { en: "work", pt: "trabalhar" },
              { en: "study", pt: "estudar" },
              { en: "live", pt: "morar / viver" },
              { en: "like", pt: "gostar" },
              { en: "speak", pt: "falar" }
            ]},
            { type: "tip", html: "Regra de ouro: <strong>He, She, It → verbo + S</strong>. Pensa: \"ele / ela sempre tem o S\"." },
            { type: "pronun", html: "O -s final muda de som: <strong>works</strong> = s seco (uôrks), <strong>lives</strong> = z (livz), <strong>watches</strong> = iz (uótchiz)." },
            { type: "exercise", question: "Complete: \"She ___ English.\" (Ela estuda inglês.)", options: ["study", "studies", "studys"], answer: 1, explain: "Com she o verbo ganha -s, e *study* vira *studies* (y depois de consoante vira -ies)." },
            { type: "exercise", question: "Qual está correto?", options: ["I works here", "He work here", "He works here"], answer: 2, explain: "He pede o -s: *He works*. 'I' não leva -s." },
            { type: "exercise", question: "\"They ___ TV at night.\"", options: ["watch", "watches", "watchs"], answer: 0, explain: "They (eles) NÃO leva -s. Só he / she / it leva." },
            { type: "exercise", question: "\"My father ___ in a hospital.\" (Meu pai trabalha...)", options: ["work", "works", "working"], answer: 1, explain: "he (my father) → *works*." },
            { type: "write", prompt: "Escreva em inglês: \"Ela trabalha num banco.\"", answer: "She works in a bank.", explain: "He / She / It → verbo + s: *works*." },
            { type: "fill", sentence: "He ___ in a bank.", answer: "works", hint: "trabalha", explain: "he → verbo + s: *works*." },
            { type: "speak", text: "I work every day.", hint: "Eu trabalho todo dia." },
            { type: "speak", text: "She likes music.", hint: "Ela gosta de música. (repare no -s em likes)" },
            { type: "speak", text: "They live in Brazil.", hint: "Eles moram no Brasil." },
            { type: "summary", items: [
              "Present Simple = rotinas, hábitos e verdades.",
              "<strong>He / She / It → verbo + S</strong>.",
              "I / you / we / they → verbo sem -s.",
              "Pergunta e negativa usam do / does (próxima aula)."
            ]},
            { type: "flash", cards: [{"f": "work", "b": "trabalhar"}, {"f": "study", "b": "estudar"}, {"f": "live", "b": "morar / viver"}, {"f": "like", "b": "gostar"}, {"f": "speak", "b": "falar"}] },
            { type: "homework", html: "Conte pro Delagassa 3 coisas da sua rotina (I work..., I study...) e 2 da rotina de alguém da família (She works...)." }
          ]
        },
        {
          id: "fnd-4",
          title: "Artigos: a / an / the",
          minutes: 6,
          blocks: [
            { type: "intro", html: "Parece detalhe, mas usar <strong>a</strong>, <strong>an</strong> e <strong>the</strong> certo é o que faz seu inglês soar natural. São palavrinhas minúsculas que aparecem o tempo todo." },
            { type: "objectives", items: [
              "Diferenciar <strong>a / an</strong> (indefinido) de <strong>the</strong> (definido)",
              "Escolher a ou an pelo <strong>SOM</strong> da palavra",
              "Usar <strong>the</strong> para algo específico"
            ]},
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
            { type: "vocab", items: [
              { en: "a house", pt: "uma casa" },
              { en: "an egg", pt: "um ovo" },
              { en: "the sun", pt: "o sol" },
              { en: "an idea", pt: "uma ideia" },
              { en: "a job", pt: "um emprego" }
            ]},
            { type: "tip", html: "Não é a letra, é o SOM. Por isso *an hour* (h mudo) mas *a university* (som de 'iu')." },
            { type: "pronun", html: "<strong>a</strong> é fraquinho: â (a book = â buk). <strong>the</strong> soa dâ antes de consoante e di antes de vogal (the apple = di épol)." },
            { type: "exercise", question: "Complete: \"I have ___ idea.\"", options: ["a", "an", "the"], answer: 1, explain: "'idea' começa com som de vogal → *an*." },
            { type: "exercise", question: "\"She is ___ engineer.\"", options: ["a", "an", "the"], answer: 1, explain: "'engineer' tem som de vogal (ê) → *an*." },
            { type: "exercise", question: "\"Can you close ___ door, please?\" (aquela porta específica)", options: ["a", "an", "the"], answer: 2, explain: "Porta específica que os dois conhecem → *the*." },
            { type: "exercise", question: "\"I need ___ new phone.\"", options: ["a", "an", "the"], answer: 0, explain: "'new' começa com som de consoante → *a*." },
            { type: "write", prompt: "Escreva em inglês: \"Ela é uma médica.\"", answer: "She is a doctor.", explain: "'doctor' tem som de consoante → *a*." },
            { type: "fill", sentence: "She is ___ engineer.", answer: "an", hint: "um / uma", explain: "Som de vogal → *an*." },
            { type: "speak", text: "I have an idea.", hint: "Eu tenho uma ideia." },
            { type: "speak", text: "She is a teacher.", hint: "Ela é professora." },
            { type: "speak", text: "Open the door, please.", hint: "Abra a porta, por favor." },
            { type: "summary", items: [
              "<strong>a / an</strong> = um / uma (não específico).",
              "<strong>the</strong> = o / a / os / as (específico).",
              "a ou an depende do SOM: an antes de som de vogal.",
              "*an hour* (h mudo), *a university* (som de 'iu')."
            ]},
            { type: "flash", cards: [{"f": "a house", "b": "uma casa"}, {"f": "an egg", "b": "um ovo"}, {"f": "the sun", "b": "o sol"}, {"f": "an idea", "b": "uma ideia"}, {"f": "a job", "b": "um emprego"}] },
            { type: "homework", html: "Liste 5 objetos da sua casa usando a/an (an apple, a chair...) e mande pro Delagassa conferir os artigos." }
          ]
        },
        {
          id: "fnd-5",
          title: "Plural dos substantivos",
          minutes: 6,
          blocks: [
            { type: "intro", html: "Falar de mais de uma coisa parece trivial, mas o plural em inglês tem alguns truques — e dizer \"childs\" em vez de \"children\" entrega na hora que você é iniciante. Vamos dominar isso." },
            { type: "objectives", items: [
              "Formar o plural regular com <strong>-s</strong> e <strong>-es</strong>",
              "Aplicar a regra do <strong>-y → -ies</strong>",
              "Conhecer os principais plurais irregulares"
            ]},
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
            { type: "vocab", items: [
              { en: "man → men", pt: "homem → homens" },
              { en: "woman → women", pt: "mulher → mulheres" },
              { en: "child → children", pt: "criança → crianças" },
              { en: "person → people", pt: "pessoa → pessoas" },
              { en: "foot → feet", pt: "pé → pés" }
            ]},
            { type: "tip", html: "Alguns não mudam no plural, como *fish* e *sheep*: one fish, two fish." },
            { type: "pronun", html: "O -s do plural tem 3 sons: <strong>books</strong> = s seco, <strong>cars</strong> = z, <strong>buses</strong> = iz. E <strong>children</strong> = tchíldren." },
            { type: "exercise", question: "Qual o plural de \"city\"?", options: ["citys", "cities", "cityes"], answer: 1, explain: "-y depois de consoante vira *-ies*: cities." },
            { type: "exercise", question: "Qual o plural de \"child\"?", options: ["childs", "children", "childes"], answer: 1, explain: "*child* é irregular: o plural é *children*." },
            { type: "exercise", question: "Qual o plural de \"box\"?", options: ["boxs", "boxes", "boxies"], answer: 1, explain: "Palavras em -x ganham *-es*: boxes." },
            { type: "exercise", question: "Qual o plural de \"woman\"?", options: ["womans", "women", "womens"], answer: 1, explain: "*woman* é irregular: plural *women*." },
            { type: "write", prompt: "Escreva o plural de \"baby\" e \"bus\".", answer: "babies / buses", explain: "-y → -ies (babies); -s → -es (buses)." },
            { type: "fill", sentence: "I have three ___.", answer: "children", hint: "crianças", explain: "child → *children* (irregular)." },
            { type: "speak", text: "I have two cars.", hint: "Eu tenho dois carros." },
            { type: "speak", text: "These boxes are heavy.", hint: "Estas caixas são pesadas." },
            { type: "speak", text: "There are many people here.", hint: "Tem muita gente aqui." },
            { type: "summary", items: [
              "Plural geral: + <strong>-s</strong> (books, cars).",
              "-s, -ss, -sh, -ch, -x → <strong>-es</strong>; -y → <strong>-ies</strong>.",
              "Irregulares: man→men, child→children, person→people.",
              "Alguns não mudam: fish, sheep."
            ]},
            { type: "flash", cards: [{"f": "man → men", "b": "homem → homens"}, {"f": "woman → women", "b": "mulher → mulheres"}, {"f": "child → children", "b": "criança → crianças"}, {"f": "person → people", "b": "pessoa → pessoas"}, {"f": "foot → feet", "b": "pé → pés"}] },
            { type: "homework", html: "Escreva o plural de: city, box, child, woman e fish — e confira com o Delagassa." }
          ]
        },
        {
          id: "fnd-6",
          title: "Perguntas com do / does",
          minutes: 7,
          blocks: [
            { type: "intro", html: "Fazer perguntas é meio caminho pra qualquer conversa. Em inglês você não muda só a entonação como no português — você usa <strong>do</strong> e <strong>does</strong>. Pega essa e já consegue perguntar quase tudo no presente." },
            { type: "objectives", items: [
              "Fazer perguntas no presente com <strong>do / does</strong>",
              "Escolher <strong>does</strong> para he / she / it",
              "Manter o verbo principal sem -s na pergunta"
            ]},
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
            { type: "vocab", items: [
              { en: "like", pt: "gostar" },
              { en: "want", pt: "querer" },
              { en: "need", pt: "precisar" },
              { en: "have", pt: "ter" },
              { en: "know", pt: "saber / conhecer" }
            ]},
            { type: "tip", html: "O -s do he/she/it vai pro *does*, então o verbo fica limpo: *Does she like* (não *Does she likes*)." },
            { type: "pronun", html: "Na fala real, <strong>Do you</strong> vira dju (Do you like = dju laik). <strong>Does she</strong> soa dâz-chi." },
            { type: "exercise", question: "Complete: \"___ you speak English?\"", options: ["Do", "Does", "Are"], answer: 0, explain: "Com \"you\" usa-se *Do*." },
            { type: "exercise", question: "Qual está correto?", options: ["Does he plays?", "Does he play?", "Do he play?"], answer: 1, explain: "He usa *does*, e o verbo principal fica sem -s: *Does he play?*" },
            { type: "exercise", question: "\"___ your sister live in Brazil?\"", options: ["Do", "Does", "Is"], answer: 1, explain: "\"your sister\" = she → *Does*." },
            { type: "exercise", question: "\"___ they have a car?\"", options: ["Do", "Does", "Are"], answer: 0, explain: "they → *Do*." },
            { type: "write", prompt: "Escreva em inglês: \"Você gosta de café?\"", answer: "Do you like coffee?", explain: "you → *Do*; verbo no normal." },
            { type: "fill", sentence: "___ she like coffee?", answer: "Does", hint: "ela gosta...?", explain: "she → *Does*." },
            { type: "speak", text: "Do you speak English?", hint: "Você fala inglês?" },
            { type: "speak", text: "Does she like music?", hint: "Ela gosta de música?" },
            { type: "speak", text: "Where do you work?", hint: "Onde você trabalha?" },
            { type: "summary", items: [
              "Perguntas no presente usam <strong>do / does</strong>.",
              "he / she / it → <strong>does</strong>; o resto → <strong>do</strong>.",
              "O verbo principal fica SEM -s: *Does she like?*",
              "do / does não têm tradução — são ferramentas de pergunta."
            ]},
            { type: "flash", cards: [{"f": "like", "b": "gostar"}, {"f": "want", "b": "querer"}, {"f": "need", "b": "precisar"}, {"f": "have", "b": "ter"}, {"f": "know", "b": "saber / conhecer"}] },
            { type: "homework", html: "Faça 3 perguntas pro Delagassa usando Do/Does (ex: Do you like music?). Ele responde e corrige!" }
          ]
        },
        {
          id: "fnd-7",
          title: "this / that / these / those",
          minutes: 6,
          blocks: [
            { type: "intro", html: "Apontar pra coisas — \"este aqui\", \"aquele ali\" — é algo que você faz o tempo todo. Em inglês são 4 palavrinhas, e a escolha depende só de duas coisas: perto ou longe, um ou vários." },
            { type: "objectives", items: [
              "Diferenciar perto (this/these) de longe (that/those)",
              "Escolher singular (this/that) ou plural (these/those)",
              "Usar as 4 formas em frases reais"
            ]},
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
            { type: "vocab", items: [
              { en: "here", pt: "aqui" },
              { en: "there", pt: "lá / ali" },
              { en: "over there", pt: "lá longe / acolá" },
              { en: "near", pt: "perto" },
              { en: "far", pt: "longe" }
            ]},
            { type: "tip", html: "Dica: *this* e *these* dão ideia de perto; *that* e *those* de longe." },
            { type: "pronun", html: "<strong>this</strong> tem i curto (dis); <strong>these</strong> tem i longo e termina em z (díiz). É o tamanho do i que diferencia! Th sonoro nos dois: língua entre os dentes." },
            { type: "exercise", question: "\"___ books here are mine.\" (estes, aqui perto)", options: ["This", "These", "Those"], answer: 1, explain: "Perto + plural = *these*." },
            { type: "exercise", question: "\"Look at ___ bird in the sky!\" (aquele, longe)", options: ["this", "that", "these"], answer: 1, explain: "Longe + singular = *that*." },
            { type: "exercise", question: "\"___ is my phone.\" (este, aqui na mão)", options: ["This", "These", "Those"], answer: 0, explain: "Perto + singular = *This*." },
            { type: "exercise", question: "\"___ shoes over there are nice.\" (aqueles, longe)", options: ["This", "These", "Those"], answer: 2, explain: "Longe + plural = *Those*." },
            { type: "write", prompt: "Escreva em inglês: \"Este é meu carro.\"", answer: "This is my car.", explain: "Perto + singular = *This*." },
            { type: "fill", sentence: "___ shoes over there are new.", answer: "Those", hint: "aqueles — longe", explain: "Longe + plural = *Those*." },
            { type: "speak", text: "This is my phone.", hint: "Este é meu celular." },
            { type: "speak", text: "That car is fast.", hint: "Aquele carro é rápido." },
            { type: "speak", text: "These shoes are new.", hint: "Estes sapatos são novos." },
            { type: "summary", items: [
              "<strong>this</strong> (perto, sing.) / <strong>these</strong> (perto, pl.).",
              "<strong>that</strong> (longe, sing.) / <strong>those</strong> (longe, pl.).",
              "Perto = this / these; longe = that / those.",
              "Singular = this / that; plural = these / those."
            ]},
            { type: "flash", cards: [{"f": "here", "b": "aqui"}, {"f": "there", "b": "lá / ali"}, {"f": "over there", "b": "lá longe / acolá"}, {"f": "near", "b": "perto"}, {"f": "far", "b": "longe"}] },
            { type: "homework", html: "Olhe ao seu redor e escreva 4 frases: 2 com this/these (coisas perto) e 2 com that/those (coisas longe)." }
          ]
        },
        {
          id: "fnd-8",
          title: "there is / there are",
          minutes: 6,
          blocks: [
            { type: "intro", html: "\"Tem um café ali\", \"há dois problemas\" — pra dizer que algo existe, o inglês NÃO usa \"have\". Ele tem uma estrutura própria: <strong>there is / there are</strong>. Errar isso é um dos deslizes mais comuns de brasileiro." },
            { type: "objectives", items: [
              "Dizer que algo existe com <strong>there is / there are</strong>",
              "Escolher singular (is) ou plural (are)",
              "Fazer perguntas e negativas com essa estrutura"
            ]},
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
            { type: "vocab", items: [
              { en: "a table", pt: "uma mesa" },
              { en: "a chair", pt: "uma cadeira" },
              { en: "a problem", pt: "um problema" },
              { en: "outside", pt: "lá fora" },
              { en: "a lot of", pt: "muitos / muito" }
            ]},
            { type: "tip", html: "Não use \"have\" aqui. \"Tem um livro na mesa\" NÃO é *Have a book*, é *There is a book*." },
            { type: "pronun", html: "<strong>There</strong> soa dér (th com a língua entre os dentes). Na fala rápida, there are emenda: dérâr." },
            { type: "exercise", question: "\"___ a pen in my bag.\" (há uma caneta)", options: ["There is", "There are", "Have"], answer: 0, explain: "Singular (a pen) → *There is*." },
            { type: "exercise", question: "\"___ many people here.\"", options: ["There is", "There are", "It has"], answer: 1, explain: "Plural (many people) → *There are*." },
            { type: "exercise", question: "\"___ a problem?\" (pergunta)", options: ["Is there", "There is", "Have there"], answer: 0, explain: "Pergunta inverte: *Is there...?*" },
            { type: "exercise", question: "\"___ any chairs in the room.\" (negativo, plural)", options: ["There isn't", "There aren't", "There not"], answer: 1, explain: "Plural negativo → *There aren't*." },
            { type: "write", prompt: "Escreva em inglês: \"Há um livro na mesa.\"", answer: "There is a book on the table.", explain: "Singular → *There is*." },
            { type: "fill", sentence: "There ___ many people here.", answer: "are", hint: "há — plural", explain: "Plural → *There are*." },
            { type: "speak", text: "There is a problem.", hint: "Há um problema." },
            { type: "speak", text: "There are two cars outside.", hint: "Há dois carros lá fora." },
            { type: "speak", text: "Is there a bathroom here?", hint: "Tem um banheiro aqui?" },
            { type: "summary", items: [
              "<strong>There is</strong> (singular) / <strong>There are</strong> (plural).",
              "Significa 'há' / 'tem' (existência).",
              "Pergunta: Is there...? / Are there...?",
              "NÃO use 'have' pra existência."
            ]},
            { type: "flash", cards: [{"f": "a table", "b": "uma mesa"}, {"f": "a chair", "b": "uma cadeira"}, {"f": "a problem", "b": "um problema"}, {"f": "outside", "b": "lá fora"}, {"f": "a lot of", "b": "muitos / muito"}] },
            { type: "homework", html: "Descreva sua rua ou bairro pro Delagassa usando there is / there are (ex: There is a bakery...)." }
          ]
        },
        {
          id: "fnd-9",
          title: "Possessivos (my, your, his...)",
          minutes: 6,
          blocks: [
            { type: "intro", html: "Dizer \"meu\", \"seu\", \"dele\", \"dela\" — os possessivos aparecem em toda conversa sobre pessoas e coisas. E tem uma pegadinha clássica: <strong>his</strong> vs <strong>her</strong>, e o temido <strong>its</strong> vs <strong>it's</strong>." },
            { type: "objectives", items: [
              "Usar os adjetivos possessivos (my, your, his...)",
              "Mostrar posse com o <strong>'s</strong> (John's car)",
              "Não confundir his/her e its/it's"
            ]},
            { type: "text", html: "Para dizer de quem é algo, use os <strong>adjetivos possessivos</strong> antes do substantivo." },
            { type: "example", title: "Os possessivos", items: [
              { en: "my car", pt: "meu carro" },
              { en: "your house", pt: "sua casa" },
              { en: "his name", pt: "o nome dele" },
              { en: "her bag", pt: "a bolsa dela" },
              { en: "our team", pt: "nosso time" },
              { en: "their idea", pt: "a ideia deles" }
            ]},
            { type: "text", html: "Outra forma de mostrar posse é com o <strong>'s</strong> (apóstrofo + s) depois do nome da pessoa." },
            { type: "example", title: "Posse com 's", items: [
              { en: "John's car", pt: "o carro do John" },
              { en: "my sister's house", pt: "a casa da minha irmã" },
              { en: "the company's name", pt: "o nome da empresa" }
            ]},
            { type: "vocab", items: [
              { en: "my family", pt: "minha família" },
              { en: "your job", pt: "seu emprego" },
              { en: "his phone", pt: "o celular dele" },
              { en: "her car", pt: "o carro dela" },
              { en: "our house", pt: "nossa casa" }
            ]},
            { type: "tip", html: "Não confunda *his* (dele) com *her* (dela); nem *its* (posse, sem apóstrofo) com *it's* (it is)." },
            { type: "pronun", html: "<strong>his</strong> termina em z: riz. <strong>her</strong> = rrêr (r americano). O 's de John's também soa z: djónz." },
            { type: "exercise", question: "\"This is ___ book.\" (o livro dela)", options: ["his", "her", "their"], answer: 1, explain: "dela = *her*." },
            { type: "exercise", question: "Como se diz \"o carro do Pedro\"?", options: ["Pedro car", "Pedro's car", "car of Pedro"], answer: 1, explain: "Posse com nome próprio usa *'s*: Pedro's car." },
            { type: "exercise", question: "\"___ house is big.\" (a casa deles)", options: ["Their", "There", "They're"], answer: 0, explain: "deles = *their*. (There = lá; They're = they are.)" },
            { type: "exercise", question: "\"The dog wags ___ tail.\" (a cauda do cachorro)", options: ["its", "it's", "his"], answer: 0, explain: "Posse de coisa/animal = *its* (sem apóstrofo). *it's* = it is." },
            { type: "write", prompt: "Escreva em inglês: \"O nome dele é John.\"", answer: "His name is John.", explain: "dele = *his*." },
            { type: "fill", sentence: "This is ___ car.", answer: "his", hint: "dele", explain: "dele = *his*." },
            { type: "speak", text: "This is my car.", hint: "Este é meu carro." },
            { type: "speak", text: "Her name is Ana.", hint: "O nome dela é Ana." },
            { type: "speak", text: "That is John's house.", hint: "Aquela é a casa do John." },
            { type: "summary", items: [
              "Possessivos: my, your, <strong>his</strong> (dele), <strong>her</strong> (dela), our, their.",
              "Posse com pessoa/nome: <strong>'s</strong> (John's car).",
              "<strong>its</strong> = posse (sem apóstrofo); <strong>it's</strong> = it is.",
              "his = dele, her = dela (não confunda)."
            ]},
            { type: "flash", cards: [{"f": "my family", "b": "minha família"}, {"f": "your job", "b": "seu emprego"}, {"f": "his phone", "b": "o celular dele"}, {"f": "her car", "b": "o carro dela"}, {"f": "our house", "b": "nossa casa"}] },
            { type: "homework", html: "Escreva 4 frases sobre coisas de pessoas que você conhece (my sister's car, his phone...) e peça correção." }
          ]
        },
        {
          id: "fnd-10",
          title: "Present Continuous (agora)",
          minutes: 6,
          blocks: [
            { type: "intro", html: "Quando algo está acontecendo AGORA, neste exato momento, você não usa o presente simples — usa o <strong>Present Continuous</strong>. É a diferença entre \"eu trabalho\" e \"estou trabalhando\"." },
            { type: "objectives", items: [
              "Formar o Present Continuous (<strong>am/is/are + -ing</strong>)",
              "Diferenciar 'agora' de 'rotina'",
              "Aplicar as regras do -ing"
            ]},
            { type: "text", html: "O <strong>Present Continuous</strong> mostra uma ação <strong>acontecendo agora</strong>. A fórmula é: <strong>am / is / are + verbo-ing</strong>." },
            { type: "example", title: "Acontecendo agora", items: [
              { en: "I am working now.", pt: "Estou trabalhando agora." },
              { en: "She is studying.", pt: "Ela está estudando." },
              { en: "They are eating.", pt: "Eles estão comendo." }
            ]},
            { type: "text", html: "Compare com o Present Simple: <strong>I work</strong> (rotina) vs <strong>I am working</strong> (agora). São coisas diferentes." },
            { type: "example", title: "Rotina vs Agora", items: [
              { en: "I drink coffee.", pt: "Eu tomo café (sempre)." },
              { en: "I'm drinking coffee.", pt: "Estou tomando café (agora)." }
            ]},
            { type: "vocab", items: [
              { en: "working", pt: "trabalhando" },
              { en: "studying", pt: "estudando" },
              { en: "eating", pt: "comendo" },
              { en: "reading", pt: "lendo" },
              { en: "sleeping", pt: "dormindo" }
            ]},
            { type: "tip", html: "O verbo ganha *-ing*: work → working. Verbos com -e mudo perdem o e: make → making, write → writing." },
            { type: "pronun", html: "O -ing final é in com g quase mudo: <strong>working</strong> = uôrkin. Cuidado com o vício brasileiro de falar workingui!" },
            { type: "exercise", question: "\"She ___ TV right now.\"", options: ["watch", "watches", "is watching"], answer: 2, explain: "Ação agora = present continuous: *is watching*." },
            { type: "exercise", question: "Qual indica \"agora, neste momento\"?", options: ["I read a book", "I am reading a book", "I read books"], answer: 1, explain: "*am reading* = acontecendo agora." },
            { type: "exercise", question: "\"They ___ football now.\"", options: ["play", "are playing", "plays"], answer: 1, explain: "Agora → *are playing*." },
            { type: "exercise", question: "Qual o -ing de \"make\"?", options: ["makeing", "making", "makking"], answer: 1, explain: "Verbo com -e mudo perde o e: *making*." },
            { type: "write", prompt: "Escreva em inglês: \"Estou trabalhando agora.\"", answer: "I am working now.", explain: "am + verbo-ing: *working*." },
            { type: "fill", sentence: "She is ___ a book right now.", answer: "reading", hint: "lendo", explain: "read → *reading* (agora)." },
            { type: "speak", text: "I am working now.", hint: "Estou trabalhando agora." },
            { type: "speak", text: "She is reading a book.", hint: "Ela está lendo um livro." },
            { type: "speak", text: "They are eating lunch.", hint: "Eles estão almoçando." },
            { type: "summary", items: [
              "Present Continuous = ação acontecendo <strong>agora</strong>.",
              "Fórmula: <strong>am / is / are + verbo-ing</strong>.",
              "Rotina (I work) ≠ agora (I'm working).",
              "Verbo com -e mudo: make → making."
            ]},
            { type: "flash", cards: [{"f": "working", "b": "trabalhando"}, {"f": "studying", "b": "estudando"}, {"f": "eating", "b": "comendo"}, {"f": "reading", "b": "lendo"}, {"f": "sleeping", "b": "dormindo"}] },
            { type: "homework", html: "Diga pro Delagassa o que você está fazendo AGORA em 3 frases (I'm studying English...)." }
          ]
        },
        {
          id: "fnd-11",
          title: "Can / can't (saber, poder)",
          minutes: 6,
          blocks: [
            { type: "intro", html: "\"Eu sei nadar\", \"posso te ajudar?\", \"ela não sabe dirigir\" — tudo isso é <strong>can</strong>. Uma das palavrinhas mais úteis do inglês: habilidade e permissão numa só. E o melhor: é super fácil de usar." },
            { type: "objectives", items: [
              "Usar <strong>can</strong> para habilidade e permissão",
              "Formar o negativo com <strong>can't</strong>",
              "Não colocar \"to\" depois de can"
            ]},
            { type: "text", html: "<strong>Can</strong> expressa <strong>habilidade</strong> (saber fazer) e <strong>permissão</strong> (poder). Depois de \"can\", o verbo vem no normal, sem \"to\"." },
            { type: "example", title: "Afirmando", items: [
              { en: "I can swim.", pt: "Eu sei nadar." },
              { en: "She can speak English.", pt: "Ela sabe falar inglês." },
              { en: "Can I help you?", pt: "Posso ajudar?" }
            ]},
            { type: "text", html: "O negativo é <strong>can't</strong> (cannot). Para todos os pronomes, \"can\" não muda — nada de \"cans\"." },
            { type: "example", title: "Negando", items: [
              { en: "He can't drive.", pt: "Ele não sabe dirigir." },
              { en: "We can't go today.", pt: "Não podemos ir hoje." }
            ]},
            { type: "vocab", items: [
              { en: "swim", pt: "nadar" },
              { en: "drive", pt: "dirigir" },
              { en: "cook", pt: "cozinhar" },
              { en: "dance", pt: "dançar" },
              { en: "help", pt: "ajudar" }
            ]},
            { type: "tip", html: "Erro comum: *She can to swim* ❌. O certo é *She can swim* — sem \"to\" depois de can." },
            { type: "pronun", html: "<strong>can</strong> afirmativo é fraco e rápido: kân (I can swim = ai-kân-suím). <strong>can't</strong> é forte e longo: kéént. É esse contraste que o nativo escuta." },
            { type: "exercise", question: "Qual está correto?", options: ["I can to drive", "I can drive", "I can drives"], answer: 1, explain: "Depois de \"can\", verbo sem \"to\" e sem -s: *I can drive*." },
            { type: "exercise", question: "\"___ you help me?\" (Você pode...?)", options: ["Can", "Do", "Are"], answer: 0, explain: "Pedido / permissão usa *Can*." },
            { type: "exercise", question: "\"He ___ swim very well.\"", options: ["can", "cans", "can to"], answer: 0, explain: "*can* nunca muda: *He can swim*." },
            { type: "exercise", question: "Como negar \"Eu sei cozinhar\"?", options: ["I don't can cook", "I can't cook", "I cannot to cook"], answer: 1, explain: "Negativo = *can't* (cannot): *I can't cook*." },
            { type: "write", prompt: "Escreva em inglês: \"Ela sabe falar inglês.\"", answer: "She can speak English.", explain: "can + verbo no normal." },
            { type: "fill", sentence: "He ___ swim very well.", answer: "can", hint: "sabe / consegue", explain: "habilidade = *can*." },
            { type: "speak", text: "I can swim.", hint: "Eu sei nadar." },
            { type: "speak", text: "Can you help me?", hint: "Você pode me ajudar?" },
            { type: "speak", text: "She can speak three languages.", hint: "Ela sabe falar três idiomas." },
            { type: "summary", items: [
              "<strong>can</strong> = saber (habilidade) e poder (permissão).",
              "Negativo: <strong>can't</strong> (cannot).",
              "Depois de can, verbo SEM 'to' e sem -s.",
              "*can* é igual pra todos: I / he / she / they can."
            ]},
            { type: "flash", cards: [{"f": "swim", "b": "nadar"}, {"f": "drive", "b": "dirigir"}, {"f": "cook", "b": "cozinhar"}, {"f": "dance", "b": "dançar"}, {"f": "help", "b": "ajudar"}] },
            { type: "homework", html: "Conte pro Delagassa 3 coisas que você sabe fazer (I can...) e 2 que não sabe (I can't...)." }
          ]
        },
        {
          id: "fnd-12",
          title: "Passado do TO BE (was / were)",
          minutes: 6,
          blocks: [
            { type: "intro", html: "Pra falar de como as coisas <strong>eram</strong> ou <strong>estavam</strong> no passado, você usa o passado do TO BE. Boa notícia: são só duas formas, <strong>was</strong> e <strong>were</strong>. Pega essas duas e você já fala no passado." },
            { type: "objectives", items: [
              "Usar <strong>was</strong> e <strong>were</strong> no passado",
              "Saber qual forma vai com cada pronome",
              "Fazer negativa e pergunta (wasn't / Was...?)"
            ]},
            { type: "text", html: "No passado, o verbo <strong>to be</strong> tem só duas formas: <strong>was</strong> e <strong>were</strong>." },
            { type: "example", title: "Quem usa o quê", items: [
              { en: "I / he / she / it was", pt: "eu / ele / ela era / estava" },
              { en: "you / we / they were", pt: "você / nós / eles era(m) / estava(m)" }
            ]},
            { type: "example", title: "Na prática", items: [
              { en: "I was tired.", pt: "Eu estava cansado." },
              { en: "They were at home.", pt: "Eles estavam em casa." },
              { en: "She was happy.", pt: "Ela estava feliz." }
            ]},
            { type: "text", html: "Negativo: <strong>wasn't / weren't</strong>. Pergunta: <strong>Was...? / Were...?</strong>" },
            { type: "vocab", items: [
              { en: "yesterday", pt: "ontem" },
              { en: "last week", pt: "semana passada" },
              { en: "tired", pt: "cansado" },
              { en: "sick", pt: "doente" },
              { en: "busy", pt: "ocupado" }
            ]},
            { type: "tip", html: "Regra rápida: I / He / She / It → *was*. You / We / They → *were*." },
            { type: "pronun", html: "<strong>was</strong> soa uóz; <strong>were</strong> soa uêr. <strong>wasn't</strong> = uóznt (o t final é sequinho)." },
            { type: "exercise", question: "\"She ___ at school yesterday.\"", options: ["was", "were", "is"], answer: 0, explain: "She → *was*." },
            { type: "exercise", question: "\"They ___ very happy.\"", options: ["was", "were", "are"], answer: 1, explain: "They → *were*." },
            { type: "exercise", question: "\"I ___ at home last night.\"", options: ["was", "were", "am"], answer: 0, explain: "I → *was*." },
            { type: "exercise", question: "Negativo: \"Ele não estava aqui.\"", options: ["He wasn't here", "He weren't here", "He not was here"], answer: 0, explain: "he → *wasn't*." },
            { type: "write", prompt: "Escreva em inglês: \"Eu estava cansado ontem.\"", answer: "I was tired yesterday.", explain: "I → *was*." },
            { type: "fill", sentence: "They ___ at home yesterday.", answer: "were", hint: "estavam", explain: "they → *were*." },
            { type: "speak", text: "I was very tired.", hint: "Eu estava muito cansado." },
            { type: "speak", text: "They were at the party.", hint: "Eles estavam na festa." },
            { type: "speak", text: "Where were you yesterday?", hint: "Onde você estava ontem?" },
            { type: "summary", items: [
              "Passado do TO BE: <strong>was</strong> e <strong>were</strong>.",
              "I / he / she / it → <strong>was</strong>.",
              "you / we / they → <strong>were</strong>.",
              "Negativo: wasn't / weren't."
            ]},
            { type: "flash", cards: [{"f": "yesterday", "b": "ontem"}, {"f": "last week", "b": "semana passada"}, {"f": "tired", "b": "cansado"}, {"f": "sick", "b": "doente"}, {"f": "busy", "b": "ocupado"}] },
            { type: "homework", html: "Conte pro Delagassa onde você estava ontem em 3 frases usando was/were." }
          ]
        },
        {
          id: "fnd-13",
          title: "Past Simple — verbos regulares",
          minutes: 7,
          blocks: [
            { type: "intro", html: "Contar o que você <strong>fez ontem</strong>, na semana passada, no ano passado — é o Past Simple. Nos verbos regulares, a regra é uma delícia: é só botar <strong>-ed</strong> no fim. Um dos tempos mais fáceis do inglês." },
            { type: "objectives", items: [
              "Formar o passado regular com <strong>-ed</strong>",
              "Usar a mesma forma para todos os pronomes",
              "Fazer pergunta e negativa com <strong>did / didn't</strong>"
            ]},
            { type: "text", html: "Para falar de algo que <strong>já aconteceu e terminou</strong>, use o <strong>Past Simple</strong>. Nos verbos regulares, é só adicionar <strong>-ed</strong>." },
            { type: "example", title: "Verbo + ed", items: [
              { en: "work → worked", pt: "trabalhar → trabalhou" },
              { en: "play → played", pt: "jogar → jogou" },
              { en: "study → studied", pt: "estudar → estudou" }
            ]},
            { type: "example", title: "Em frases", items: [
              { en: "I worked yesterday.", pt: "Eu trabalhei ontem." },
              { en: "She visited her mom.", pt: "Ela visitou a mãe." }
            ]},
            { type: "text", html: "No passado o verbo é <strong>igual para todos os pronomes</strong> — I worked, he worked, they worked. Sem -s extra." },
            { type: "vocab", items: [
              { en: "worked", pt: "trabalhou / trabalhei" },
              { en: "played", pt: "jogou / brincou" },
              { en: "studied", pt: "estudou" },
              { en: "watched", pt: "assistiu" },
              { en: "lived", pt: "morou / viveu" }
            ]},
            { type: "tip", html: "Pergunta e negativo usam *did / didn't* + verbo no normal: *Did you work?* / *I didn't work*. O -ed some, porque o \"did\" já marca o passado." },
            { type: "pronun", html: "O -ed tem 3 sons: <strong>worked</strong> = t (uôrkt), <strong>played</strong> = d (pleid), <strong>visited</strong> = id (vízitid). Nunca fale uork-ÉD!" },
            { type: "exercise", question: "Qual o passado de \"play\"?", options: ["plaied", "played", "plays"], answer: 1, explain: "Regular: play + ed = *played*." },
            { type: "exercise", question: "\"I ___ TV last night.\"", options: ["watch", "watched", "watching"], answer: 1, explain: "Passado: *watched*." },
            { type: "exercise", question: "Como se pergunta \"Você trabalhou ontem?\"", options: ["You worked yesterday?", "Did you work yesterday?", "Did you worked yesterday?"], answer: 1, explain: "*Did you work?* — com \"did\", o verbo volta ao normal (sem -ed)." },
            { type: "exercise", question: "Negativo: \"Eu não estudei ontem.\"", options: ["I didn't studied", "I didn't study", "I not studied"], answer: 1, explain: "did / didn't + verbo no normal: *I didn't study*." },
            { type: "write", prompt: "Escreva em inglês: \"Eu trabalhei ontem.\"", answer: "I worked yesterday.", explain: "work + ed = *worked*." },
            { type: "fill", sentence: "I ___ TV last night.", answer: "watched", hint: "assisti", explain: "watch + ed = *watched*." },
            { type: "speak", text: "I worked all day yesterday.", hint: "Eu trabalhei o dia todo ontem." },
            { type: "speak", text: "She visited her mother.", hint: "Ela visitou a mãe." },
            { type: "speak", text: "Did you watch the game?", hint: "Você assistiu ao jogo?" },
            { type: "summary", items: [
              "Past Simple regular: verbo + <strong>-ed</strong>.",
              "Mesma forma pra TODOS os pronomes.",
              "Pergunta / negativa: <strong>did / didn't</strong> + verbo normal.",
              "study → studied (y depois de consoante → -ied)."
            ]},
            { type: "flash", cards: [{"f": "worked", "b": "trabalhou / trabalhei"}, {"f": "played", "b": "jogou / brincou"}, {"f": "studied", "b": "estudou"}, {"f": "watched", "b": "assistiu"}, {"f": "lived", "b": "morou / viveu"}] },
            { type: "homework", html: "Conte o que você fez ontem em 4 frases no passado (verbos com -ed) e peça a correção do Delagassa." }
          ]
        },
        {
          id: "fnd-14",
          title: "Question words (what, where...)",
          minutes: 6,
          blocks: [
            { type: "intro", html: "\"O quê?\", \"onde?\", \"quando?\", \"por quê?\" — pra perguntar de verdade (não só sim / não), você precisa das <strong>question words</strong>. Domina essas 6 e você abre qualquer conversa." },
            { type: "objectives", items: [
              "Conhecer as principais question words",
              "Montar perguntas de informação",
              "Usar <strong>How</strong> com outras palavras (How much, How many...)"
            ]},
            { type: "text", html: "As <strong>question words</strong> abrem perguntas que pedem informação (não é só sim / não)." },
            { type: "example", title: "As principais", items: [
              { en: "What?", pt: "O quê? / Qual?" },
              { en: "Where?", pt: "Onde?" },
              { en: "When?", pt: "Quando?" },
              { en: "Who?", pt: "Quem?" },
              { en: "Why?", pt: "Por quê?" },
              { en: "How?", pt: "Como?" }
            ]},
            { type: "example", title: "Na prática", items: [
              { en: "Where do you live?", pt: "Onde você mora?" },
              { en: "What is your name?", pt: "Qual é o seu nome?" },
              { en: "Why are you late?", pt: "Por que você está atrasado?" }
            ]},
            { type: "vocab", items: [
              { en: "How much?", pt: "Quanto? (preço)" },
              { en: "How many?", pt: "Quantos?" },
              { en: "How old?", pt: "Que idade?" },
              { en: "How long?", pt: "Quanto tempo?" },
              { en: "Which?", pt: "Qual? (entre opções)" }
            ]},
            { type: "tip", html: "*How* combina com outras: *How much?* (quanto - preço), *How many?* (quantos), *How old?* (que idade)." },
            { type: "pronun", html: "<strong>What</strong> = uót; <strong>Where</strong> = uér; <strong>Who</strong> = ru (h aspirado). Na fala, Where do you emenda: uér-dju." },
            { type: "exercise", question: "Qual palavra pergunta sobre LUGAR?", options: ["When", "Where", "Who"], answer: 1, explain: "*Where* = onde (lugar)." },
            { type: "exercise", question: "\"___ is your birthday?\" (Quando...?)", options: ["What", "Where", "When"], answer: 2, explain: "Quando = *When*." },
            { type: "exercise", question: "\"___ much is it?\" (Quanto custa?)", options: ["How", "What", "Why"], answer: 0, explain: "Preço / quantidade não-contável: *How much*." },
            { type: "exercise", question: "\"___ is your teacher?\" (Quem...?)", options: ["What", "Who", "Why"], answer: 1, explain: "Quem = *Who*." },
            { type: "write", prompt: "Escreva em inglês: \"Onde você mora?\"", answer: "Where do you live?", explain: "Onde = *Where* + do you live." },
            { type: "fill", sentence: "___ do you live?", answer: "Where", hint: "onde", explain: "Onde = *Where*." },
            { type: "speak", text: "Where do you live?", hint: "Onde você mora?" },
            { type: "speak", text: "What is your name?", hint: "Qual é o seu nome?" },
            { type: "speak", text: "Why are you learning English?", hint: "Por que você está aprendendo inglês?" },
            { type: "summary", items: [
              "What, Where, When, Who, Why, How.",
              "Abrem perguntas de informação (não sim / não).",
              "How + palavra: How much / many / old / long.",
              "Which = qual (entre opções)."
            ]},
            { type: "flash", cards: [{"f": "How much?", "b": "Quanto? (preço)"}, {"f": "How many?", "b": "Quantos?"}, {"f": "How old?", "b": "Que idade?"}, {"f": "How long?", "b": "Quanto tempo?"}, {"f": "Which?", "b": "Qual? (entre opções)"}] },
            { type: "homework", html: "Faça 4 perguntas pro Delagassa: uma com What, uma com Where, uma com When e uma com Why." }
          ]
        },
        {
          id: "fnd-15",
          title: "Object pronouns (me, him, her...)",
          minutes: 6,
          blocks: [
            { type: "intro", html: "Você já sabe os pronomes que FAZEM a ação (I, he, she...). Agora vêm os que RECEBEM: <strong>me, him, her, us, them</strong>. É a diferença entre \"eu vejo\" e \"me vê\"." },
            { type: "objectives", items: [
              "Reconhecer os pronomes objeto (me, him, her...)",
              "Usá-los depois do verbo ou de preposição",
              "Não trocar sujeito por objeto (I see him, não I see he)"
            ]},
            { type: "text", html: "Os <strong>pronomes objeto</strong> recebem a ação (vêm depois do verbo ou de preposição). São diferentes dos pronomes que fazem a ação." },
            { type: "example", title: "Os pronomes objeto", items: [
              { en: "me", pt: "me / mim" },
              { en: "you", pt: "você / te" },
              { en: "him", pt: "ele / o" },
              { en: "her", pt: "ela / a" },
              { en: "us", pt: "nós / nos" },
              { en: "them", pt: "eles / os" }
            ]},
            { type: "example", title: "Na prática", items: [
              { en: "Call me later.", pt: "Me ligue depois." },
              { en: "I love her.", pt: "Eu a amo." },
              { en: "Tell them the news.", pt: "Conte a novidade a eles." }
            ]},
            { type: "vocab", items: [
              { en: "I → me", pt: "eu → me / mim" },
              { en: "he → him", pt: "ele → o / lhe" },
              { en: "she → her", pt: "ela → a / lhe" },
              { en: "we → us", pt: "nós → nos" },
              { en: "they → them", pt: "eles → os / lhes" }
            ]},
            { type: "tip", html: "Sujeito vs objeto: *I see him* (eu vejo ele), não *I see he*. Depois do verbo, use o objeto." },
            { type: "pronun", html: "Na fala real os objetos ficam fracos: <strong>them</strong> vira dâm (I saw them = ai-só-dâm) e <strong>him</strong> vira im (I know him = ai-nou-im)." },
            { type: "exercise", question: "\"I know ___.\" (eu conheço ele)", options: ["he", "him", "his"], answer: 1, explain: "Objeto (recebe a ação) = *him*." },
            { type: "exercise", question: "\"Can you help ___?\" (me ajudar)", options: ["I", "me", "my"], answer: 1, explain: "Objeto (recebe a ação) = *me*." },
            { type: "exercise", question: "\"I saw ___ yesterday.\" (vi ela)", options: ["she", "her", "hers"], answer: 1, explain: "Objeto = *her*." },
            { type: "exercise", question: "\"Give the book to ___.\" (a eles)", options: ["they", "them", "their"], answer: 1, explain: "Depois de preposição (to), objeto = *them*." },
            { type: "write", prompt: "Escreva em inglês: \"Me ligue amanhã.\"", answer: "Call me tomorrow.", explain: "Imperativo + pronome objeto *me*." },
            { type: "fill", sentence: "I saw ___ at the party.", answer: "them", hint: "eles / os", explain: "Objeto plural = *them*." },
            { type: "speak", text: "I love you.", hint: "Eu te amo." },
            { type: "speak", text: "Can you help me?", hint: "Você pode me ajudar?" },
            { type: "speak", text: "I saw them yesterday.", hint: "Eu os vi ontem." },
            { type: "summary", items: [
              "Pronomes objeto: <strong>me, you, him, her, us, them</strong>.",
              "Recebem a ação (vêm depois do verbo / preposição).",
              "I see <strong>him</strong>, não I see he.",
              "Sujeito faz; objeto recebe."
            ]},
            { type: "flash", cards: [{"f": "I → me", "b": "eu → me / mim"}, {"f": "he → him", "b": "ele → o / lhe"}, {"f": "she → her", "b": "ela → a / lhe"}, {"f": "we → us", "b": "nós → nos"}, {"f": "they → them", "b": "eles → os / lhes"}] },
            { type: "homework", html: "Escreva 4 frases usando me, him, her e them (ex: Call me later) e confira com o Delagassa." }
          ]
        }
      ]
    },

    { id: "everyday", emoji: "💬", title: "Everyday English", subtitle: "Inglês do dia a dia, conversas reais.",
      lessons: [
        {
          id: "evd-1",
          title: "Cumprimentos e apresentações",
          minutes: 5,
          blocks: [
            { type: "text", html: "Saber cumprimentar e se apresentar abre todas as portas. Veja as formas mais comuns." },
            { type: "example", title: "Cumprimentos", items: [
              { en: "Hello! / Hi!", pt: "Olá! / Oi!" },
              { en: "Good morning.", pt: "Bom dia." },
              { en: "Good afternoon.", pt: "Boa tarde." },
              { en: "Good evening.", pt: "Boa noite (ao chegar)." }
            ]},
            { type: "example", title: "Apresentando-se", items: [
              { en: "My name is Ana.", pt: "Meu nome é Ana." },
              { en: "Nice to meet you.", pt: "Prazer em conhecer." },
              { en: "How are you?", pt: "Como vai?" },
              { en: "I'm fine, thanks.", pt: "Estou bem, obrigado." }
            ]},
            { type: "tip", html: "*Good night* não é para chegar — é para se despedir ou ir dormir. Ao chegar à noite, use *Good evening*." },
            { type: "exercise", question: "Como responder a \"Nice to meet you\"?", options: ["You're welcome", "Nice to meet you too", "Good night"], answer: 1, explain: "Retribui: *Nice to meet you too*." },
            { type: "exercise", question: "Qual usar ao CHEGAR de manhã?", options: ["Good night", "Good morning", "Goodbye"], answer: 1, explain: "De manhã: *Good morning*." },
            { type: "write", prompt: "Escreva em inglês: \"Prazer em conhecer você.\"", answer: "Nice to meet you.", explain: "Expressão fixa ao se apresentar." },
            { type: "speak", text: "Hi! My name is Ana. Nice to meet you.", hint: "Oi! Meu nome é Ana. Prazer em conhecer." }
          ]
        },
        {
          id: "evd-2",
          title: "Números, dias e horas",
          minutes: 6,
          blocks: [
            { type: "text", html: "Números, dias da semana e horas aparecem o tempo todo. Vamos ao essencial." },
            { type: "example", title: "Dias da semana", items: [
              { en: "Monday / Tuesday", pt: "segunda / terça" },
              { en: "Wednesday / Thursday", pt: "quarta / quinta" },
              { en: "Friday", pt: "sexta" },
              { en: "Saturday / Sunday", pt: "sábado / domingo" }
            ]},
            { type: "example", title: "Que horas são?", items: [
              { en: "It's three o'clock.", pt: "São três horas." },
              { en: "It's half past two.", pt: "São duas e meia." },
              { en: "It's a quarter to five.", pt: "São quinze para as cinco." }
            ]},
            { type: "tip", html: "Dias da semana são SEMPRE com letra maiúscula em inglês: *Monday*, não \"monday\"." },
            { type: "exercise", question: "Qual é \"quarta-feira\"?", options: ["Tuesday", "Wednesday", "Thursday"], answer: 1, explain: "Quarta = *Wednesday*." },
            { type: "exercise", question: "\"It's half past six\" significa...?", options: ["6:15", "6:30", "5:30"], answer: 1, explain: "half past six = seis e meia = *6:30*." }
          ]
        },
        {
          id: "evd-3",
          title: "No restaurante",
          minutes: 5,
          blocks: [
            { type: "text", html: "Pedir comida e bebida com confiança. As frases-chave que você vai usar sempre." },
            { type: "example", title: "Pedindo", items: [
              { en: "A table for two, please.", pt: "Uma mesa para dois, por favor." },
              { en: "Can I see the menu?", pt: "Posso ver o cardápio?" },
              { en: "I'd like a coffee.", pt: "Eu gostaria de um café." },
              { en: "The bill, please.", pt: "A conta, por favor." }
            ]},
            { type: "text", html: "<strong>I'd like</strong> (I would like) é a forma educada de pedir — soa bem melhor que \"I want\"." },
            { type: "tip", html: "*I'd like a coffee* soa educado; *I want a coffee* soa rude num restaurante. Use *I'd like* ou *Could I have...?*" },
            { type: "exercise", question: "Forma educada de pedir?", options: ["Give me a coffee", "I'd like a coffee", "I want coffee now"], answer: 1, explain: "*I'd like...* é o jeito educado." },
            { type: "exercise", question: "Como pedir a conta?", options: ["The bill, please", "The menu, please", "A table, please"], answer: 0, explain: "Conta = *the bill*." },
            { type: "write", prompt: "Peça um café de forma educada (use \"I'd like\").", answer: "I'd like a coffee, please.", explain: "*I'd like* é educado; *please* reforça a cortesia." },
            { type: "speak", text: "Can I see the menu, please?", hint: "Posso ver o cardápio, por favor?" }
          ]
        },
        {
          id: "evd-4",
          title: "Compras (Shopping)",
          minutes: 5,
          blocks: [
            { type: "text", html: "Comprar em inglês: perguntar preço, tamanho e pagar. As frases essenciais." },
            { type: "example", title: "Na loja", items: [
              { en: "How much is it?", pt: "Quanto custa?" },
              { en: "Do you have a smaller size?", pt: "Tem um tamanho menor?" },
              { en: "Can I pay by card?", pt: "Posso pagar no cartão?" },
              { en: "I'm just looking, thanks.", pt: "Só estou olhando, obrigado." }
            ]},
            { type: "tip", html: "*How much?* pergunta preço; *How many?* pergunta quantidade. Preço → *How much is it?*" },
            { type: "exercise", question: "Como perguntar o preço?", options: ["How many is it?", "How much is it?", "How old is it?"], answer: 1, explain: "Preço = *How much is it?*" },
            { type: "write", prompt: "Escreva em inglês: \"Posso pagar no cartão?\"", answer: "Can I pay by card?", explain: "*pay by card* = pagar no cartão." },
            { type: "speak", text: "How much is this?", hint: "Quanto custa isto?" }
          ]
        }
      ]
    },
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
            { type: "exercise", question: "Qual versão é para entrar na universidade?", options: ["General Training", "Academic", "Business"], answer: 1, explain: "A versão *Academic* é a exigida para estudo universitário." },
            { type: "write", prompt: "IELTS Writing começa aqui. Escreva 1 frase em inglês sobre por que você quer fazer o IELTS.", answer: "(Exemplo) I want to take the IELTS to study at a university abroad.", explain: "Não há resposta única — o importante é produzir. No chat, o Delagassa corrige a sua frase." },
            { type: "speak", text: "I would like to study abroad.", hint: "Eu gostaria de estudar no exterior." }
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
