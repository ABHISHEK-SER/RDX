const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://telegra.ph/file/991a06ce548b9bf7d5185.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `ABHISHEK SER Created By ABHISHEK SURESH


🌐Creator number : wa.me/919074692450

🌐ABHISHEK SER UPGRADE VERSION COMING SOON

🌐THANKS TO SUPPORT 😊🥰

©ABHISHEK SER
`}) 

}));
