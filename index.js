const qrcode = require("qrcode-terminal");
const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");
// const msgWelcome = require("./messages/welcome.json");

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("chatbot online!");
});

const setUsers = new Set();

client.on("message_create", async (message) => {
  const userNumber = message.from;

  if (!setUsers.has(userNumber) || message.body == "start") {
    console.log(`Numero registrado! [ numero: ${userNumber} ]`);
    // console.log(message);

    // Adiciona o número ao conjunto
    setUsers.add(userNumber);

    //envia a mensagem de boas vindas.
    const media = MessageMedia.fromFilePath("./imgs/boasvindas.jpg");
    await client.sendMessage(message.from, media);
    message.react("👋"); //reage a mensagem do visitante.
    message.reply(`*Sejam bem-vindos à I Feira das Profissões do CETI Leopoldo Pacheco - 2024*\n
Este evento foi idealizado para inspirar, conectar e apresentar o universo de possibilidades que o futuro oferece, com foco em tecnologia, inovação, saúde e
empreendedorismo.\n
Durante a feira, você terá a oportunidade de explorar stands interativos,
projetos criativos e conhecer mais sobre as profissões que estão moldando o
mundo.\n
Este é um espaço para aprender, trocar ideias e se inspirar com o talento e a dedicação dos nossos alunos. Aproveite ao máximo esse momento de descoberta e, juntos, vamos celebrar o poder da educação em construir um futuro brilhante!\n
_Siga-nos no Instagram: *@ceti.leopoldo.pacheco*_`);

    setTimeout(async () => {
      client.sendMessage(
        message.from,
        `Convidamos todos a explorar nossos stands e descobrir como cada um
desses cursos pode ajudar a construir um futuro brilhante e repleto de
oportunidades. Estamos aqui para responder todas as suas perguntas!`
      );
    }, 7000);
    setTimeout(async () => {
      client.sendMessage(
        message.from,
        `> digite X para começar sua navegação! 🧭`
      );
    }, 10000);
  } else {
    console.log(`Numero já está em uma sessão! [ numero: ${userNumber} ]`);
  }

  //condições de navegações.
  if (message.body == "x" || message.body == "X") {
    message.react("🤖");
    message.reply(`*Bem-vindo* ao primeiro projeto da nossa feira: "Chatbot Inteligente no WhatsApp"!\n     
*Professor responsável:* Francisco Carvalho
*Aluno Desenvolverdor:* Guilherme Walisson\n
Aqui você conhecerá uma solução inovadora que combina inteligência artificial com programação avançada para criar um assistente virtual prático e eficiente no WhatsApp.\n
Nosso chatbot é projetado para fornecer orientações personalizadas sobre a nossa feira e sobre todos os stands expostos em tempo real e automatizar processos de atendimento, trazendo mais agilidade e soluções à comunicação. A integração entre algoritmos de IA e fluxos programados garante respostas naturais e contextualizadas, otimizando a experiência do usuário.\n
Descubra como essa tecnologia pode transformar a interação entre pessoas e empresas, tornando o atendimento mais humano, eficiente e acessível.\n*Experimente o futuro da comunicação inteligente!*`);

    setTimeout(async () => {
      client.sendMessage(
        message.from,
        `> Para continuar a navegação digite *0* 🧭`
      );
    }, 5000);
  }

  if (message.body == "0") {
    message.react("🚶‍➡️");
    message.reply(`Seguindo a primeira sala a esquerda, nossa sala de informática, você encontrará a sala de tecnologias digitais da informação e comunicação.\n
Abaixo estão os stands contidos na sala, para mais detalhes, *digite o numero* do stand de acordo com o menu:\n
1️⃣ *Evolução dos computadores*
2️⃣ *Cubo de IA*
3️⃣ *Apresentação*
4️⃣ *Plataforma Scratch/Alura*
5️⃣ *Projetos*
6️⃣ *Próximo Menu*
`);
  }

  if (message.body == "1") {
    message.reply(`*Primeiro Stand: “Evolução dos Computadores / Gigantes da tecnologia"*\n\n*Professores responsáveis:* Neide e Valquíria\n*Alunos:* Crislane, Gilberto, Tiago, Marinete, Jesus, Lucas, Carlos,
Erikon e Francilene\n
_"Evolução dos Computadores/Gigantes da tecnologia”_ Aqui, você será transportado no início da era digital com a maquete do ENIAC , o primeiro computador eletrônico da história. Além disso, embarque conosco em uma viagem pelas gerações dos computadores , desde os primeiros modelos com válvulas eletrônicas, passando pelos transistores, circuitos integrados e microprocessadores. Descubra como a tecnologia evoluiu de máquinas imensas para dispositivos compactos, transformando nossas vidas e o futuro da humanidade.\n
Explore o passado, entenda o presente e imagine o futuro da computação!
Será apresentado uma maquete do primeiro computador eletrônico da história - ENIAC, uma breve descrição e fotos das 5 gerações dos computadores,
bem como uma maquete de roda gigante com os grandes nomes de revolucionários da tecnologia.`);

    setTimeout(async () => {
      client.sendMessage(
        message.from,
        `🚶‍➡️Continue navegando nos stands contidos na sala, para mais detalhes, *digite o numero* do stand de acordo com o menu:\n
2️⃣ *Cubo de IA*
3️⃣ *Apresentação*
4️⃣ *Plataforma Scratch/Alura*
5️⃣ *Projetos*
6️⃣ *Próximo Menu*`
      );
    }, 5000);
  }

  if (message.body == "2") {
    message.reply(`*Segundo Stand: "Cubo de IA 3D: A Revolução Interativa"*\n\n*Professor Responsável:* Francisco Carvalho\n*Aluno:* Marcos Antonio\n
Explore uma experiência única onde a inteligência artificial ganha forma em cubo 3D interativo. Aqui, você poderá visualizar conceitos complexos ganhando vida em 3D, experiências soluções inovadoras para diversas áreas, como educação, design, saúde e entretenimento, e compreender como a integração entre IA e realidade 3D.
Venha explorar o futuro da inovação de forma criativa e interativa.\n*Descubra o que acontece inteligência quando encontra dimensão!*`);

    setTimeout(async () => {
      client.sendMessage(
        message.from,
        `🚶‍♂️ Continue navegando nos stands contidos na sala, para mais detalhes, *digite o numero* do stand de acordo com o menu:\n
3️⃣ *Apresentação*
4️⃣ *Plataforma Scratch/Alura*
5️⃣ *Projetos*
6️⃣ *Próximo Menu*`
      );
    }, 5000);
  }

  if (message.body == "3") {
    message.reply(`*Terceiro Stand: Apresentação*\n\n*Professora responsável:* Fabiana\n*Aluna:* Maria Ellenn\n\n
Descrição: Nesse momento será apresentado um projeto que foi criado com base nos cinco projetos desenvolvidos pela plataforma Alura/Scratch.`);

    setTimeout(async () => {
      client.sendMessage(
        message.from,
        `🚶‍♂️ Continue navegando nos stands contidos na sala, para mais detalhes, *digite o numero* do stand de acordo com o menu:\n
4️⃣ *Plataforma Scratch/Alura*
5️⃣ *Projetos*
6️⃣ *Próximo Menu*`
      );
    }, 5000);
  }

  if (message.body == "4") {
    message.reply(`*Quarto Stand: Plataforma Scratch/Alura*\n\n*Professora responsável:* Fabiana\n*Alunas:* Maria Yasmin e Ruth\n
*Descrição:* Será explicado e demonstrado de uma forma ilustrativa a tela de criação da plataforma Scratch, onde os alunos irão fazer uma simulação de como é feito esse processo.`);

    setTimeout(async () => {
      client.sendMessage(
        message.from,
        `🚶‍♂️ Continue navegando nos stands contidos na sala, para mais detalhes, *digite o numero* do stand de acordo com o menu:\n
  5️⃣ *Projetos*
  6️⃣ *Próximo Menu*`
      );
    }, 5000);
  }

  if (message.body == "5") {
    message.reply(`*Quinto Stand: Projetos*\n\n*Professora responsável:* Fabiana\n*Alunos:* Thalison e Marcos Vinicius.\n
*Descrição:* Será demonstrado alguns projetos criados pelos alunos durante as
aulas por meio de QR Code e através de computadores .
No Corredor, você terá a oportunidade de mergulhar no fascinante universo do
empreendedorismo. Um espaço dedicado para inspirar, conectar e capacitar
aqueles que buscam transformar ideias em negócios de sucesso. Explore
ferramentas, conceitos e histórias de quem inovou e fez a diferença, além de
conhecer soluções criativas para os desafios do mercado. Prepare-se para
despertar seu espírito empreendedor e dar o próximo passo rumo à realização
de seus projetos!
`);

    setTimeout(async () => {
      client.sendMessage(
        message.from,
        `🚶‍♂️ Continue navegando nos stands contidos na sala, para mais detalhes, *digite o numero* do stand de acordo com o menu:\n
7️⃣ *Hardware e Software*
8️⃣ *Formas de empreender*
9️⃣ *Consciência Negra*
1️⃣0️⃣ *Poemas Objetos*
1️⃣1️⃣ *A Linha do Tempo da Revolução Industrial*
1️⃣2️⃣ *Saúde - Cálculo do IMC.*
1️⃣3️⃣ *Saúde*
1️⃣4️⃣ *Saúde mental*
1️⃣5️⃣ *Encerrar navegação*
  `
      );
    }, 5000);
  }

  if (message.body == "7") {
    message.reply(`Hardware e Software
Professora responsável: Fabiana e Juçara
Alunos: Adryan e Isaac
Descrição: Os alunos irão explicar os conteúdos utilizando demonstrações a
respeito do tema.`);

    setTimeout(async () => {
      client.sendMessage(
        message.from,
        `🚶‍♂️ Continue navegando nos stands contidos na sala, para mais detalhes, *digite o numero* do stand de acordo com o menu:\n
8️⃣ *Formas de empreender*
9️⃣ *Consciência Negra*
1️⃣0️⃣ *Poemas Objetos*
1️⃣1️⃣ *A Linha do Tempo da Revolução Industrial*
1️⃣2️⃣ *Saúde - Cálculo do IMC.*
1️⃣3️⃣ *Saúde*
1️⃣4️⃣ *Saúde mental*
1️⃣5️⃣ *Encerrar navegação*
  `
      );
    }, 5000);
  }

  if (message.body == "8") {
    message.reply(`Formas de empreender
Professor Responsável: Vicente Neto
Alunos: Peter, Wanderson, Geysiane.
Descrição: identificação do mercado de trabalho e das oportunidades para
alunos do ensino médio `);

    setTimeout(async () => {
      client.sendMessage(
        message.from,
        `🚶‍♂️ Continue navegando nos stands contidos na sala, para mais detalhes, *digite o numero* do stand de acordo com o menu:\n
9️⃣ *Consciência Negra*
1️⃣0️⃣ *Poemas Objetos*
1️⃣1️⃣ *A Linha do Tempo da Revolução Industrial*
1️⃣2️⃣ *Saúde - Cálculo do IMC.*
1️⃣3️⃣ *Saúde*
1️⃣4️⃣ *Saúde mental*
1️⃣5️⃣ *Encerrar navegação*
  `
      );
    }, 5000);
  }

  if (message.body == "9") {
    message.reply(`: Consciência Negra
Professoras responsáveis: Dilma e Márcia
Descrição: Dentro desta sala, convidamos você a visitar um estande
especialmente dedicado à Consciência Negra, um espaço de reflexão,
aprendizagem e valorização da história, cultura e contribuições da população
negra. Aqui, celebramos a diversidade e promovemos o diálogo sobre igualdade,
identidade e inclusão. Descubra histórias de biodiversidade, conquistas
marcantes e iniciativas que reafirmam a importância de construir uma sociedade
mais justa e respeitosa para todos. Seja bem-vindo a um ambiente de
reconhecimento e transformação!
No corredor que leva às salas e ao pátio, você encontrará uma seleção especial
de estandes interativos que apresentam diversos temas e projetos inovadores.
Este espaço foi cuidadosamente planejado para surpreender e envolver os
visitantes, com dinâmicas, projeções e materiais que estimulam a curiosidade e
a troca de ideias. Não deixe de explorar cada estande e aproveite as
oportunidades de aprendizado e conexão que estão à sua disposição!`);

    setTimeout(async () => {
      client.sendMessage(
        message.from,
        `🚶‍♂️ Continue navegando nos stands contidos na sala, para mais detalhes, *digite o numero* do stand de acordo com o menu:\n
1️⃣0️⃣ *Poemas Objetos*
1️⃣1️⃣ *A Linha do Tempo da Revolução Industrial*
1️⃣2️⃣ *Saúde - Cálculo do IMC.*
1️⃣3️⃣ *Saúde*
1️⃣4️⃣ *Saúde mental*
1️⃣5️⃣ *Encerrar navegação*
  `
      );
    }, 5000);
  }

  if (message.body == "10") {
    message.reply(`: Poemas – Objetos,
Professora Responsável: Eliete
O primeiro stand da esquerda, localizado no pátio um.
Descrição: Os poemas-objetos são uma forma de a poesia se libertar da folha
de papel e explorar outras possibilidades criativas. A linguagem dos objetos é
usada para inscrever a singularidade da experiência e do conhecimento
individual do mundo com base na intertextualidade.
`);

    setTimeout(async () => {
      client.sendMessage(
        message.from,
        `🚶‍♂️ Continue navegando nos stands contidos na sala, para mais detalhes, *digite o numero* do stand de acordo com o menu:\n
1️⃣1️⃣ *A Linha do Tempo da Revolução Industrial*
1️⃣2️⃣ *Saúde - Cálculo do IMC.*
1️⃣3️⃣ *Saúde*
1️⃣4️⃣ *Saúde mental*
1️⃣5️⃣ *Encerrar navegação*
  `
      );
    }, 5000);
  }

  if (message.body == "11") {
    message.reply(`A Linha do Tempo da Revolução Industrial
Professora Responsável: Eliane Barros
Descrição: Aqui, você embarcará em uma jornada fascinante pelos principais
momentos da Revolução Industrial, um marco que transformou a história da
humanidade. Explore os avanços tecnológicos que mudaram a forma de
produzir, viver e trabalhar, desde as primeiras máquinas a vapor do século XVIII
até a era da automação e da indústria 4.0.
Com painéis interativos e exemplos práticos, você poderá compreender
como cada etapa dessa revolução impactou a sociedade e moldou o mundo
moderno. Descubra como a inovação impulsiona o progresso e continua a
definir nosso futuro!`);

    setTimeout(async () => {
      client.sendMessage(
        message.from,
        `🚶‍♂️ Continue navegando nos stands contidos na sala, para mais detalhes, *digite o numero* do stand de acordo com o menu:\n
  1️⃣2️⃣ *Saúde - Cálculo do IMC.*
  1️⃣3️⃣ *Saúde*
  1️⃣4️⃣ *Saúde mental*
  1️⃣5️⃣ *Encerrar navegação*
    `
      );
    }, 5000);
  }

  if (message.body == "12") {
    message.reply(`Saúde - Cálculo do IMC.
Professores Responsáveis: Cristiane.
Alunos: Mateus, Júlio César.
Descrição: IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado
pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa,
dividindo-se o peso do paciente pela sua altura elevada ao quadrado.`);

    setTimeout(async () => {
      client.sendMessage(
        message.from,
        `🚶‍♂️ Continue navegando nos stands contidos na sala, para mais detalhes, *digite o numero* do stand de acordo com o menu:\n
1️⃣3️⃣ *Saúde*
1️⃣4️⃣ *Saúde mental*
1️⃣5️⃣ *Encerrar navegação*
  `
      );
    }, 5000);
  }

  if (message.body == "13") {
    message.reply(`Saúde
Professora responsável: Karina
Descrição: Aqui você aprenderá sobre a importância de monitorar os níveis de
glicose no sangue para uma saúde equilibrada. Vamos demonstrar como as
medições são realizadas, explicar os dispositivos usados e sua importância no
controle de condições como o diabetes. Descubra dicas práticas para interpretar
os resultados e como essa prática pode ajudar a prevenir complicações e
melhorar a qualidade de vida. Nossa equipe está pronta para esclarecer dúvidas
e compartilhar informações essenciais. Venha experimentar e se informar!`);
    setTimeout(async () => {
      client.sendMessage(
        message.from,
        `🚶‍♂️ Continue navegando nos stands contidos na sala, para mais detalhes, *digite o numero* do stand de acordo com o menu:\n
    1️⃣4️⃣ *Saúde mental*
    1️⃣5️⃣ *Encerrar navegação*
      `
      );
    }, 5000);
  }

  if (message.body == "14") {
    message.reply(`Saúde Mental
Professores responsáveis: Eldània, Cristiane, Cláudia, Dilma e Paulo
Descrição: As vantagens e desvantagens do uso das telas
digitais na saúde mental`);
    setTimeout(async () => {
      client.sendMessage(
        message.from,
        `🚶‍♂️ Continue navegando nos stands contidos na sala, para mais detalhes, *digite o numero* do stand de acordo com o menu:\n
    1️⃣5️⃣ *Encerrar navegação*
      `
      );
    }, 5000);
  }

  if (message.body == "15") {
    message.react("👋");
    message.reply("> Navegação encerrada! 🤖");
  }

  if (message.body == "6") {
    message.reply(`🚶‍♂️ Continue navegando nos stands contidos na sala, para mais detalhes, *digite o numero* do stand de acordo com o menu:\n
7️⃣ *Hardware e Software*
8️⃣ *Formas de empreender*
9️⃣ *Consciência Negra*
1️⃣0️⃣ *Poemas Objetos*
1️⃣1️⃣ *A Linha do Tempo da Revolução Industrial*
1️⃣2️⃣ *Saúde - Cálculo do IMC.*
1️⃣3️⃣ *Saúde*
1️⃣4️⃣ *Saúde mental*
1️⃣5️⃣ *Encerrar navegação*`)
  }
});

client.initialize();
