const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

  if(message.author.id !== botconfig.ownerID) return;
  if(!args[0]) return message.channel.send("Please provide a valid number of messages to clear.");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "cle4r"
}
