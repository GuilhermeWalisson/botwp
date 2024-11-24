const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");
const msgWelcome = require("../messages/welcome.json");

const client = new Client({
    authStrategy: new LocalAuth(),
  });

  client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
  });
  
  client.on("ready", () => {
    console.log("Bot online!");
  });

  client.on("message_create", message => {
    if(message.body == "start") {
        message.reply(msgWelcome.message);
    }
    if(message.body == "1") {
      message.reply("É uma piada, eu acho.");
    }
  })

  client.initialize();