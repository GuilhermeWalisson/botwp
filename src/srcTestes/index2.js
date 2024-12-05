const qrcode = require("qrcode-terminal");
const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");
const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: "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",
});

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Bot online!");
});

// Função para gerar a resposta do Groq
function getGroqChatCompletion(messageContent) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Você agora é um assistente da escola Ceti leopoldo pacheco, que se chama Leo. Responda algo relacionado a ambito escolar e nada mais alem desse assunto. 
    Mensagem a ser respondida apos o comando '!leo': ${messageContent}`,
      },
    ],
    model: "gemma-7b-it",
  });
}



client.on("message_create", async (message) => {
    if(message.body === "!req") {
        const media = MessageMedia.fromFilePath('./1344447.png')
        await client.sendMessage(message.from, media);
        message.reply("Olá")
    }
    
})

client.on("message_create", async (message) => {
  // Verifica se o conteúdo da mensagem existe
  if (message.body.includes("!leo")) {
    // Adiciona um delay de 2 segundos antes de responder
    setTimeout(async () => {
      try {
        const chatCompletion = await getGroqChatCompletion(message.body);
        const response =
          chatCompletion.choices[0]?.message?.content ||
          "Não consegui gerar uma resposta.";

          client.sendMessage(message.from, response);
      } catch (error) {
        console.error("Erro ao obter resposta da API:", error);
      }
    }, 2000); // 2000 milissegundos = 2 segundos
  }
});

client.initialize();
