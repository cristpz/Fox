const Discord = require("discord.js");
const botconfig = require('../botconfig.json');

module.exports.run = async (bot, message, args) => {
if(message.author.id !== botconfig.ownerID) return;
            console.clear();
               bot.destroy()
               bot.login(botconfig.token);
             message.channel.send("Kon kon, done!");
         return;
}
module.exports.help = {
  name: "reload"
}
