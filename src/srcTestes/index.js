// const qrcode = require("qrcode-terminal");
// const { Client, LocalAuth } = require("whatsapp-web.js");
// const Groq = require("groq-sdk");

// const groq = new Groq({
//   apiKey: "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",
// });

// const client = new Client({
//   authStrategy: new LocalAuth(),
// });

// client.on("qr", (qr) => {
//   qrcode.generate(qr, { small: true });
// });

// client.on("ready", () => {
//   console.log("Bot online!");
// });

// client.on("message_create", async (message) => {
//         const chatCompletion = await getGroqChatCompletion();
//         // console.log(chatCompletion.choices[0]?.message?.content || "");

//         function getGroqChatCompletion() {
//             return groq.chat.completions.create({
//             messages: [
//                 {
//                 role: "assistant",
//                 content: `Responda essa mensagem em português: ${message.body}`,
//                 },
//             ],
//             model: "gemma-7b-it",
//             });
//         }
//         client.sendMessage(message.from, `${chatCompletion.choices[0]?.message?.content}`);
// });

// client.initialize();
