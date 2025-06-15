// Dados das matérias do portfolio
export const materias = [
  {
    id: 1,
    slug: "engenharia-software",
    titulo: "Engenharia de Software",
    descricao:
      "Estudo dos princípios da engenharia aplicados ao desenvolvimento de software...",
    professor: {
      nome: "Prof. Mestre. Jefferson Antonio Ribeiro Passerini",
      descricao:
        "Mestre em Ciência da Computação com especializações em Geoprocessamento e Gerenciamento de Projetos. Possui mais de 25 anos de experiência em Engenharia de Software, atuando com desenvolvimento de sistemas, migração de legados. Docente no ensino superior nas áreas de desenvolvimento, banco de dados e gestão de TI.",
      experiencia: "25+ anos",
    },
    conteudoAprendido: [
      {
        topico: "Introdução a Engenharia de Software com Sommervile",
        detalhes:
          "Aprendi os conceitos iniciais da engenharia de software e sua importância na criação de sistemas confiáveis.",
      },
      {
        topico: "Metodologias de processo de software",
        detalhes:
          "Estudei cascata, espiral, Scrum, entendendo quando aplicar cada modelo.",
      },
      {
        topico: "Engenharia de requisitos",
        detalhes:
          "Aprendi a captar, organizar e validar requisitos por entrevistas e documentação clara.",
      },
      {
        topico: "Modelagem de sistemas",
        detalhes:
          "Usei modelos para mapear o funcionamento do sistema antes da programação.",
      },
      {
        topico: "Projeto de arquitetura de um software",
        detalhes:
          "Organizei sistemas usando padrões como MVC e microserviços, pensando em escalabilidade.",
      },
    ],
    projetos: [
      {
        nome: "Iniciando conhecimento em casos de uso",
        descricao:
          "Desenvolvimento de uma documentação de casos de uso, diagramas de classe e tabelas sobre os casos de uso de uma situação espeficíca.",
        tecnologias: ["Astah UML", "Word", "Excel"],
        githubUrl: "https://github.com/ViniciusC4/Projeto-Integrador-I/tree/main/atividade-imobiliaria",
        status: "Concluído",
      },
    ],
    cor: "#60519B",
    icone: "Code",
  },
  {
    id: 2,
    slug: "matematica-discreta",
    titulo: "Matemática Discreta | Com Evanivaldo Castro Silva Junior",
    descricao: "Estudo das estruturas matemáticas discretas fundamentais...",
    professor: {
      nome: "Prof. Dr. Evanivaldo Castro Silva Junior",
      descricao:
        "Doutor em Engenharia Elétrica pela USP, com mestrado em Matemática Aplicada e graduação em Matemática pela UNESP. Atua há mais de 20 anos na docência e pesquisa, com ênfase em análise numérica, visão computacional, imagens médicas, engenharia biomédica e otimização. Possui também formação em Gestão Pública. Foi diretor da Fatec Jales por mais de sete anos e hoje leciona nas Fatecs de Jales e São José do Rio Preto.",
      experiencia: "20+ anos",
    },
    conteudoAprendido: [
      {
        topico: "Lógica proposicional e predicados",
        detalhes:
          "Aprendi a criar e interpretar expressões lógicas com conectivos e quantificadores.",
      },
      {
        topico: "Teoria dos conjuntos",
        detalhes:
          "Estudei operações com conjuntos aplicadas a algoritmos e estruturas de dados.",
      },
      {
        topico: "Relações e funções",
        detalhes:
          "Entendi relações (reflexiva, simétrica...) e funções injetiva, sobrejetiva e bijetiva.",
      },
      {
        topico: "Teoria dos grafos",
        detalhes:
          "Aprendi o que são grafos e suas aplicações em redes e caminhos.",
      },
      {
        topico: "Combinatória",
        detalhes:
          "Usei permutações e combinações para analisar possibilidades e probabilidades.",
      },
      {
        topico: "Algoritmos de grafos",
        detalhes:
          "Implementei BFS, DFS e Dijkstra para explorar e encontrar caminhos em grafos.",
      },
    ],

    projetos: [
      {
        nome: "Primeira atividade de matemática discreta",
        descricao:
          "Realização das atividades apresentadas no arquivo, um pouco de tabela verdade, conjuntos e circuito de lógica.",
        tecnologias: ["Escrito no caderno"],
        githubUrl: "https://github.com/ViniciusC4/Matematica-Discreta.git",
        status: "Concluído",
      },
    ],
    cor: "#1E202C",
    icone: "Calculator",
  },
  {
    id: 3,
    slug: "matematica-discreta-2",
    titulo: "Matemática Discreta | Com William Guimarães Borges",
    descricao: "Estudo das estruturas matemáticas discretas fundamentais...",
    professor: {
      nome: "Prof. William Guimarães Borges",
      descricao:
        "Engenheiro de Computação com licenciatura em Matemática e MBA em Gestão de Projetos. Possui especializações em Engenharia de Segurança do Trabalho, Engenharia Civil, Matemática Financeira e Educação Profissional. Atuou por 6 anos em gestão de projetos de TI em grandes empresas em São Paulo. Atualmente é docente e coordenador em ETECs de Jales e Fernandópolis, professor na FEF desde 2013 e ex-supervisor da UNIVESP no curso de Engenharia de Computação.",
      experiencia: "10+ anos",
    },
    conteudoAprendido: [
      {
        topico: "Revisão do que foi passado pelo outro professor",
        detalhes:
          "Revisamos lógica, conjuntos e circuitos, reforçando o conteúdo anterior com exercícios.",
      },
    ],
    conteudoAprendido: [
      {
        topico: "Revisão do que foi passado pelo outro professor",
        detalhes:
          "Por conta da troca de professores no meio do bimestre, o professor novo fez uma revisão intensa conosco. ",
      },
    ],
    projetos: [
      {
        nome: "Revisão do conteúdo passado",
        descricao:
          "Foi apresentado vários exércicios para realizarmos, envolvendo tabela verdade, conjunto, expressão lógica e circuito de lógica",
        tecnologias: ["Escrito no caderno"],
        status: "Concluído",
      },
    ],
    cor: "#1E202C",
    icone: "Calculator",
  },
  {
    id: 4,
    slug: "projeto-integrador-1",
    titulo: "Projeto Integrador I",
    descricao:
      "Disciplina prática que integra conhecimentos de diferentes áreas...",
    professor: {
      nome: "Prof. Mestre. Jefferson Antonio Ribeiro Passerini",
      descricao:
        "Mestre em Ciência da Computação com especializações em Geoprocessamento e Gerenciamento de Projetos. Possui mais de 25 anos de experiência em Engenharia de Software, atuando com desenvolvimento de sistemas, migração de legados. Docente no ensino superior nas áreas de desenvolvimento, banco de dados e gestão de TI.",
      experiencia: "25+ anos",
    },
    conteudoAprendido: [
      {
        topico: "Conhecendo o GIT",
        detalhes: "Entendi o que é Git, como ele rastreia mudanças no código.",
      },
      {
        topico: "Conhecendo e aprendendo comandos do GitHub",
        detalhes:
          "Pratiquei comandos para versionar e colaborar em repositórios remotos.",
      },
      {
        topico: "Trabalho em equipe no GitHub",
        detalhes:
          "Simulamos uma equipe real usando Pull Requests e revisões de código.",
      },
      {
        topico: "Discernimento e aprofundamento sobre os padrões de projetos",
        detalhes:
          "Analisamos documentações de projetos anteriores para aprender boas práticas.",
      },
    ],
    projetos: [
      {
        nome: "Primeira versão da documentação do projeto integrador",
        descricao:
          "Um rascunho com uma versão incompleta da documentação do meu projeto, com muitos erros, mas visando o aprendizado",
        tecnologias: ["Astah UML", "Excel", "Word"],
        githubUrl:
          "https://github.com/ViniciusC4/Projeto-Integrador-I/tree/main/rascunho-documentacao-projeto-integrador",
        status: "Concluído",
      },
      {
        nome: "Primeiro Sprint",
        descricao:
          "Realização de uma atividade sobre a documentação de um projeto de extensão. Aprendendo a enxergar diagrama de classes, casos de uso, requisitos, de uma maneira mais profunda",
        tecnologias: ["Astah UML", "Excel", "Word"],
        githubUrl:
          "https://github.com/ViniciusC4/Projeto-Integrador-I/blob/main/primeiro-sprint/Sprint_Documentation_assinado_assinado_assinado_assinado_29_assinado_assinado_assinado_assinado.pdf",
        status: "Concluído",
      },
      {
        nome: "Parte da documentação final do projeto integrador",
        descricao:
          "A entrega da documentação até certa parte colocando em prática o que aprendemos desde o início do ano",
        tecnologias: ["Astah UML", "Excel", "Word"],
        status: "Em desenvolvimento",
      },
    ],
    cor: "#31323E",
    icone: "Users",
  },
  {
    id: 5,
    slug: "estrutura-dados",
    titulo: "Estrutura de Dados",
    descricao:
      "Estudo das diferentes formas de organização de dados na memória do computador, incluindo arrays, listas, pilhas, filas, árvores e grafos, além de algoritmos para manipulação dessas estruturas.",
    professor: {
      nome: "Prof. William Guimarães Borges",
      descricao:
        "Engenheiro de Computação com licenciatura em Matemática e MBA em Gestão de Projetos. Possui especializações em Engenharia de Segurança do Trabalho, Engenharia Civil, Matemática Financeira e Educação Profissional. Atuou por 6 anos em gestão de projetos de TI em grandes empresas em São Paulo. Atualmente é docente e coordenador em ETECs de Jales e Fernandópolis, professor na FEF desde 2013 e ex-supervisor da UNIVESP no curso de Engenharia de Computação.",
      experiencia: "10+ anos",
    },
    conteudoAprendido: [
      {
        topico: "Função e vetor em C",
        detalhes:
          "Funções ajudam a organizar o código e a reutilizar instruções. Vetores armazenam vários dados do mesmo tipo. Juntos, são usados para manipular listas de dados, como notas de alunos ou séries numéricas.",
      },
      {
        topico: "Matrizes em C",
        detalhes:
          "Matrizes são estruturas bidimensionais que funcionam como tabelas. São úteis para representar dados em linhas e colunas, como tabuleiros de jogos ou notas de provas.",
      },
      {
        topico: "Structs em C",
        detalhes:
          "Structs permitem agrupar diferentes tipos de dados em uma só estrutura. Isso facilita a criação de representações mais completas, como um cadastro de pessoa com nome, idade e altura.",
      },
      {
        topico: "Lista encadeada em C",
        detalhes:
          "Listas encadeadas são compostas por nós que apontam para o próximo. Elas permitem adicionar ou remover elementos com mais flexibilidade que os vetores.",
      },
      {
        topico: "Pilha e filas em C",
        detalhes:
          "Pilhas usam o método LIFO e filas usam FIFO. São úteis em várias situações, como desfazer ações (pilha) ou gerenciar senhas em atendimento (fila).",
      },
    ],
    projetos: [
      {
        nome: "Pasta de conteúdo",
        descricao:
          "Uma pasta completa com todos os arquivos aprendidos, separados por conteúdo, para o professor analisar e ver o quanto estamos prestando atenção nas aulas.",
        tecnologias: ["C", "Compilador de C"],
        githubUrl: "https://github.com/ViniciusC4/Estrutura-de-Dados.git",
        status: "Em desenvolvimento",
      },
    ],
    cor: "#60519B",
    icone: "Database",
  },
  {
    id: 6,
    slug: "prog-web-mobile",
    titulo: "Técnicas Avançadas de Programação Web e Mobile",
    descricao:
      "Estudo de técnicas e ferramentas avançadas para desenvolvimento de aplicações web e mobile, incluindo frameworks modernos, APIs e boas práticas de desenvolvimento.",
    professor: {
      nome: "Prof. Marcelo Tadeu Boer",
      descricao:
        "Graduado em Processamento de Dados, atua como docente no Centro Paula Souza (FATEC e ETEC) e na FEF. Possui experiência em Sistemas de Informação, com foco em programação web, segurança da informação, desenvolvimento mobile, engenharia de software e jogos pedagógicos. Também trabalha com projetos envolvendo Arduino e monitoramento de dispositivos eletroeletrônicos.",
    },
    conteudoAprendido: [
      {
        topico: "React",
        detalhes:
          "Biblioteca JavaScript para construir interfaces de usuário, especialmente para web e mobile, usando componentes reutilizáveis que facilitam a organização e manutenção do código.",
      },
      {
        topico: "Firebase",
        detalhes:
          "Plataforma do Google que oferece serviços como banco de dados em tempo real, autenticação, armazenamento e hospedagem para apps web e mobile, facilitando o backend sem precisar criar tudo do zero.",
      },
    ],
    projetos: [
      {
        nome: "Aplicativo em React conectado ao Firebase",
        descricao:
          "Aplicativo completo com funções de cadastro e login, com credencias no banco de dados Firebase",
        tecnologias: ["React", "Firebase"],
        githubUrl: "https://github.com/ViniciusC4/TAPM.git",
        status: "Em desenvolvimento",
      },
    ],
    cor: "#1E202C",
    icone: "Smartphone",
  },
  {
    id: 7,
    slug: "gestao-agil",
    titulo: "Gestão Ágil de Projetos de Software",
    descricao:
      "Estudo das metodologias ágeis aplicadas à gestão de projetos de software, incluindo Scrum, Kanban e XP, com foco em entrega contínua de valor e adaptação a mudanças.",
    professor: {
      nome: "Prof. André Zagato Gomes",
      descricao:
        "Engenheiro de Computação e Engenheiro Eletricista, com licenciaturas em Matemática e Pedagogia. Mestre em Ciências da Educação e pós-graduado em Docência e Gestão Escolar. Atua como professor técnico nas áreas de Ciências da Computação e Eletrotécnica na ETEC de Fernandópolis, com experiência em desenvolvimento de software, sistemas web e engenharia elétrica.",
    },
    conteudoAprendido: [
      {
        topico: "Modelos de processo de software",
        detalhes:
          "Diferentes formas de organizar o desenvolvimento, como Cascata (etapas sequenciais), Espiral (iterativo com riscos), Prototipação (modelos iniciais) e métodos Ágeis focados em flexibilidade.",
      },
      {
        topico: "Metodologia Scrum",
        detalhes:
          "Framework ágil que organiza o trabalho em ciclos curtos chamados sprints, com papéis definidos como Product Owner, Scrum Master e time, promovendo entregas rápidas e melhoria contínua.",
      },
      {
        topico: "Extreme Programming (XP)",
        detalhes:
          "Método ágil que enfatiza práticas como programação em par, testes automatizados e integração contínua para garantir qualidade e adaptação rápida às mudanças.",
      },
    ],
    projetos: [],
    cor: "#31323E",
    icone: "Target",
  },
  {
    id: 8,
    slug: "prog-avancada",
    titulo: "Técnicas Avançadas de Programação",
    descricao:
      "Estudo de técnicas avançadas de programação, incluindo padrões de projeto, programação funcional, concorrência e otimização de algoritmos.",
    professor: {
      nome: "Prof. Mestre. Welington Luis Codinhoto Garcia",
      descricao:
        "Mestre em Engenharia Elétrica pela UNESP e graduado pelo Centro Universitário de Jales. Atua como professor na FEF, com experiência na área de Ciência da Computação, com ênfase em Sistemas de Informação.",
    },
    conteudoAprendido: [
      {
        topico: "Revisão de .Net/C#",
        detalhes:
          ".Net é uma plataforma da Microsoft para desenvolvimento de aplicações, que suporta várias linguagens (inclusive C#) e facilita a criação de sistemas robustos e escaláveis.",
      },
      {
        topico:
          "Entendimento de como funciona um projeto com a agregação 1 para muitos (1 pra N)",
        detalhes:
          "Agregação 1 para muitos significa que um objeto principal pode estar ligado a vários objetos associados, mas eles podem existir independentemente.",
      },
    ],
    projetos: [
      {
        nome: "Sistema 1 pra N",
        descricao:
          "Implementação de um sistema distribuído com tolerância a falhas.",
        tecnologias: ["C#", ".Net"],
        githubUrl:
          "https://github.com/ViniciusC4/Tecnicas-Avancadas-de-Programacao/tree/main/Atividade1",
        status: "Em desenvolvimento",
      },
    ],
    cor: "#60519B",
    icone: "Cpu",
  },
  {
    id: 9,
    slug: "icmned",
    titulo: "I.C.M.N.E.D",
    descricao:
      "Introdução aos Conceitos Matemáticos para Negócios e Economia Digital - Fundamentos matemáticos aplicados ao contexto de negócios digitais.",
    professor: {
      nome: "Prof. Marinalva da Silva Talpo Boldrin",
      descricao:
        "Especialista em Gestão Empresarial e graduada em Administração, com mais de 18 anos de experiência no Ensino Superior. Atuou como diretora da empresa Clavim Shoes por 10 anos, gerenciando áreas como marketing, finanças e recursos humanos. Atualmente leciona na Fatec Jales, com experiência nas áreas de administração, empreendedorismo, liderança e economia sustentável. Também atua em cursos técnicos e participa da organização de eventos acadêmicos.",
      experiencia: "10+ anos",
    },
    conteudoAprendido: [
      {
        topico: "Inteligência Corporativa e Modelos de Negócios na Era Digital",
        detalhes:
          "Estudo de como empresas usam dados, tecnologia e cultura para criar e adaptar seus modelos de negócio na era digital.",
      },
      {
        topico: "Conceito de Modelo de Negócio",
        detalhes:
          "Definição do que a empresa faz para gerar valor e como ela organiza seus recursos para isso.",
      },
      {
        topico: "Business Model Canvas de Alex Osterwalder",
        detalhes:
          "Ferramenta visual para planejar os principais componentes de um negócio, como clientes, atividades e receitas.",
      },
      {
        topico:
          "Diferenças entre Modelos de Negócios e Estratégias Competitivas",
        detalhes:
          "Modelo de negócio mostra como a empresa opera; estratégia competitiva mostra como vencer no mercado.",
      },
      {
        topico: "Evolução do Conceito de Estratégia Competitiva",
        detalhes:
          "Antes focava em preço; hoje considera forças do mercado que influenciam a competição.",
      },
      {
        topico: "Linha do Tempo da Era Digital",
        detalhes:
          "Principais marcos tecnológicos desde o transistor até a internet popularizada globalmente.",
      },
      {
        topico: "Vantagens da Era Digital",
        detalhes:
          "Novos modelos, alcance global, rapidez na inovação e trabalho remoto são alguns benefícios.",
      },
      {
        topico: "Desvantagens da Era Digital nos Modelos de Negócios",
        detalhes:
          "Alta concorrência, falta de contato físico e custos de entrega são desafios comuns.",
      },
      {
        topico: "Requisitos para o Sucesso do Negócio na Era Digital",
        detalhes:
          "Ter um bom modelo, usar tecnologia e entender o mercado são essenciais para sucesso.",
      },
      {
        topico: "Vantagens dos Novos Modelos de Negócios",
        detalhes:
          "Criam valor, inovam e diferenciam a empresa no mercado competitivo.",
      },
      {
        topico: "Missão de uma Empresa",
        detalhes:
          "Declara o propósito da empresa: o que faz, como faz e para quem faz.",
      },
      {
        topico: "Visão de uma Empresa",
        detalhes:
          "Define como a empresa se vê no futuro e seu posicionamento no mercado.",
      },
      {
        topico: "Valores de uma Empresa",
        detalhes:
          "Princípios que guiam a cultura e as ações da empresa diariamente.",
      },
      {
        topico: "Definição de Negócio por Produto e por Mercado",
        detalhes:
          "Negócio pode ser definido pelo que vende (produto) ou para quem vende (mercado).",
      },
      {
        topico: "Slogans de Empresas",
        detalhes:
          "Frases curtas que representam a marca e ajudam na comunicação com o público.",
      },
      {
        topico: "Objetivos da Organização",
        detalhes:
          "Metas como satisfação do cliente, lucro e atenção à concorrência.",
      },
      {
        topico: "Previsão das Necessidades dos Clientes",
        detalhes:
          "Uso de pesquisas para entender o que os clientes querem e precisam.",
      },
      {
        topico: "Produção para Satisfação dos Clientes",
        detalhes:
          "Focar em qualidade, atendimento e inovação para manter clientes felizes.",
      },
      {
        topico: "Análise SWOT",
        detalhes:
          "Avalia forças, fraquezas, oportunidades e ameaças para tomar decisões melhores.",
      },
      {
        topico: "Principais Mercados de Clientes",
        detalhes:
          "Segmentos de mercado como consumidor final, empresas e organizações sem fins lucrativos.",
      },
      {
        topico: "Comportamento do Consumidor",
        detalhes:
          "Estuda como as pessoas escolhem, compram e usam produtos e serviços.",
      },
      {
        topico: "Fidelidade do Cliente",
        detalhes:
          "Compromisso do cliente em comprar e recomendar a empresa repetidamente.",
      },
      {
        topico: "Retenção de Clientes",
        detalhes:
          "Importância de manter clientes atuais para aumentar lucros e reduzir custos.",
      },
      {
        topico: "Ciclo de Negócios",
        detalhes:
          "Fases de prosperidade, recessão e recuperação que afetam as empresas.",
      },
      {
        topico: "Mudanças no Mercado Atual",
        detalhes:
          "Tecnologia, globalização e mudanças nos clientes transformam o mercado constantemente.",
      },
      {
        topico: "Definição e Registro da Razão Social",
        detalhes:
          "Como escolher e registrar o nome oficial da empresa conforme regras legais.",
      },
      {
        topico: "Nome Fantasia",
        detalhes:
          "Nome comercial usado para identificação, deve ser criativo e fácil de lembrar.",
      },
    ],
    projetos: [
      {
        nome: "Documentação do nosso projeto",
        descricao:
          "Na documentação está todas as metodologias que aprendemos, visão, slogan, logo, objetivo, análise SWOT, etc",
        tecnologias: ["Word", "Canva"],
        githubUrl: "https://github.com/usuario/previsao-vendas",
        status: "Concluído",
      },
    ],
    cor: "#1E202C",
    icone: "TrendingUp",
  },
  {
    id: 10,
    slug: "ocso",
    titulo: "O.C.S.O",
    descricao:
      "Organização de Computadores e Sistemas Operacionais - Estudo da arquitetura de computadores e funcionamento de sistemas operacionais.",
    professor: {
      nome: "Prof. Mestre. Welington Luis Codinhoto Garcia",
      descricao:
        "Mestre em Engenharia Elétrica pela UNESP e graduado pelo Centro Universitário de Jales. Atua como professor na FEF, com experiência na área de Ciência da Computação, com ênfase em Sistemas de Informação.",
    },
    conteudoAprendido: [
      {
        topico: "Pipeline em Processadores",
        detalhes:
          "Técnica utilizada em arquiteturas de processadores para melhorar a eficiência e o desempenho na execução de instruções. Inclui estágios (Busca, Decodificação, Execução, Acesso à Memória, Escrita de Resultado), vantagens e desafios (Hazards, Stalling).",
      },
      {
        topico: "Barramentos em Sistemas de Computadores",
        detalhes:
          "Conceito de barramentos, tipos (dados, endereço, controle), hierarquia e função na comunicação entre componentes do computador.",
      },
      {
        topico: "Dispositivos de Entrada/Saída e Barramentos",
        detalhes:
          "Exploração de dispositivos de entrada e saída, sua interação com o processador e a memória através de barramentos, e métodos de comunicação.",
      },
      {
        topico: "Organização de Computadores e Sistemas Operacionais - Parte 2",
        detalhes:
          "Aprofundamento em conceitos de organização de computadores, incluindo tipos de memória, hierarquia de memória e princípios de funcionamento.",
      },
      {
        topico: "Organização de Computadores e Sistemas Operacionais - Parte 3",
        detalhes:
          "Continuação dos estudos sobre organização de computadores, focando em unidades de controle, ciclos de instrução e modos de endereçamento.",
      },
      {
        topico:
          "Organização de Computadores e Sistemas Operacionais - Introdução",
        detalhes:
          "Introdução à arquitetura de computadores, componentes básicos (CPU, memória, I/O) e o papel fundamental dos sistemas operacionais.",
      },
      {
        topico: "Organização do Processador",
        detalhes:
          "Detalhes sobre a estrutura interna do processador, incluindo a Unidade de Controle, ULA, registradores e o ciclo de busca-decodificação-execução.",
      },
      {
        topico: "Unidade Aritmética e Lógica (ULA) - Parte 1",
        detalhes:
          "Introdução à Unidade Aritmética e Lógica (ULA), suas funções, operações básicas (aritméticas e lógicas) e sua importância no processador.",
      },
      {
        topico: "Unidade Aritmética e Lógica (ULA) - Parte 2",
        detalhes:
          "Aprofundamento nas operações da ULA, incluindo representação de números, circuitos lógicos para operações e otimizações de desempenho.",
      },
    ],
    projetos: [],
    cor: "#31323E",
    icone: "HardDrive",
  },
  {
    id: 11,
    slug: "ihc",
    titulo: "Interação Humano Computador",
    descricao:
      "Estudo dos princípios e técnicas para o design de interfaces de usuário eficientes e acessíveis, considerando aspectos cognitivos, emocionais e ergonômicos da interação humano-computador.",
    professor: {
      nome: "Prof. Dra. Lígia Rodrigues Prete",
      descricao:
        "Doutora e Mestre em Engenharia Elétrica com foco em Automação pela UNESP, graduada em Processamento de Dados e pós-graduada em Desenvolvimento de Sistemas e Licenciatura em Informática. Com no mínimo 25 anos de experiência, atua como docente na Fatec Jales (CEETEPS), com forte atuação nas áreas de Ciência da Computação, desenvolvimento de sistemas, banco de dados, UX/UI e automação.",
      experiencia: "20+ anos",
    },
    conteudoAprendido: [
      {
        topico: "Princípios de UX/UI",
        detalhes:
          "Estudo dos princípios fundamentais de design de interfaces, incluindo alinhamento, hierarquia visual, acessibilidade, estética, funcionalidade e experiência do usuário.",
      },
      {
        topico: "Usabilidade de um sistema",
        detalhes:
          "Conceitos e critérios de usabilidade, como facilidade de aprendizado, eficiência, memorabilidade, prevenção de erros e satisfação do usuário.",
      },
      {
        topico:
          "Figma: O que é, pra que serve e como pode ajudar os programadores",
        detalhes:
          "Exploração do Figma como ferramenta de prototipação de interfaces, colaboração em tempo real, criação de fluxos de navegação e visualização de projetos front-end.",
      },
    ],
    projetos: [
      {
        nome: "Protótipo de um aplicativo",
        descricao:
          "Fizemos um mockup de um aplicativo de celular, explorando e entendendo as funcionalidades do Figma.",
        tecnologias: ["Figma"],
        githubUrl:
          "https://www.figma.com/proto/BrEexORSMi7Uft9YBFCMKN/AprendiJ%C3%A1?node-id=1-11&p=f&t=lr3HeJ4xEiYZbV7h-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=43%3A34&show-proto-sidebar=1&classId=96a3141f-998a-4dcd-b954-0d6e57ef16ff&assignmentId=1d2c0a98-e84b-4494-a373-a66795e30ab5&submissionId=44e92375-10cb-4e4c-1eff-724d41c2cec2",
        status: "Concluído",
      },
      {
        nome: "Programando o aplicativo feito no Figma",
        descricao:
          "Após fazermos o rascunho usando ferramentas do Figma, programamos o aplicativo com foco em usabilidade e design centrado no usuário.",
        tecnologias: ["Figma", "HTML", "CSS"],
        githubUrl:
          "https://github.com/ViniciusC4/Interacao-Humano-Computador/tree/main/App%20-%20AprendiJa",
        status: "Concluído",
      },
    ],
    cor: "#60519B",
    icone: "Palette",
  },
  {
    id: 12,
    slug: "tabdrnr",
    titulo: "T.A.BD.R.NR",
    descricao:
      "Técnicas Avançadas de Bancos de Dados Relacionais e Não-Relacionais - Estudo aprofundado de sistemas de gerenciamento de bancos de dados modernos.",
    professor: {
      nome: "Prof. Mestre. Alexandre Aparecido Bernardes",
      descricao:
        "Mestre em Ciência da Computação pela UNESP, com graduação em Processamento de Dados e especialização em Desenvolvimento de Sistemas. Atua como professor e coordenador na Fatec Jales e na ETEC de Jales, com mais de 20 anos de experiência no ensino técnico e superior. Tem expertise em Processamento de Imagens, Visão Computacional, Banco de Dados, Engenharia de Software, Desenvolvimento Web e Estrutura de Dados. Coordenou diversos cursos na área de TI, incluindo programas pioneiros de articulação entre ensino médio e superior.",
      experiencia: "20+ anos",
    },
    conteudoAprendido: [
      {
        topico: "Revisão básica sobre SELECT",
        detalhes:
          "Revisão dos comandos básicos de seleção de dados em SQL, incluindo filtros com WHERE, ordenação com ORDER BY, agrupamento com GROUP BY e junções simples.",
      },
      {
        topico: "View, conceito, como funciona e exercícios de fixação",
        detalhes:
          "Conceito de VIEW em SQL como uma tabela virtual, utilidade para abstração e segurança, e exemplos práticos de criação e uso.",
      },
      {
        topico:
          "Function e Procedure, o que são, diferenças e exercícios de fixação",
        detalhes:
          "Explicação sobre funções e procedimentos armazenados no banco de dados, principais diferenças e como implementá-los para reutilização de lógica.",
      },
      {
        topico: "DCL para PostgresSQL",
        detalhes:
          "Estudo da Linguagem de Controle de Dados (DCL), abordando comandos GRANT e REVOKE no PostgreSQL para controle de permissões de acesso.",
      },
    ],
    projetos: [
      {
        nome: "Exercícios de DCL",
        descricao:
          "Execução de comandos DCL no PostgreSQL para praticar concessão e revogação de privilégios.",
        tecnologias: ["PostgresSQL"],
        githubUrl:
          "https://github.com/ViniciusC4/Banco-de-Dados/tree/main/Atividade%20de%20DCL",
        status: "Concluído",
      },
      {
        nome: "Exercícios de View",
        descricao:
          "Criação de diferentes tipos de views no PostgreSQL para praticar abstração e simplificação de consultas.",
        tecnologias: ["PostgresSQL"],
        githubUrl:
          "https://github.com/ViniciusC4/Banco-de-Dados/tree/main/Atividade%20de%20view",
        status: "Concluído",
      },
      {
        nome: "Exercícios de Function e Procedure",
        descricao:
          "Desenvolvimento e testes de funções e procedimentos armazenados para reforçar o aprendizado sobre lógica em SQL.",
        tecnologias: ["PostgresSQL"],
        githubUrl:
          "https://github.com/ViniciusC4/Banco-de-Dados/tree/main/Atividade%20de%20Procedure%20e%20Function",
        status: "Concluído",
      },
    ],
    cor: "#1E202C",
    icone: "Server",
  },
];

// Função para buscar matéria por slug
export const getMateriaBySlug = (slug) => {
  return materias.find((materia) => materia.slug === slug);
};

// Função para obter todas as matérias
export const getAllMaterias = () => {
  return materias;
};
