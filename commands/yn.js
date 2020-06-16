const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!args[0]) return message.reply(`Usage: !yn <object 1> <object 2>`);
  
if(!args[0]) return message.reply("Please ask a full question.");
let replies = ["Yes.", "No."];

let result = Math.floor((Math.random() * replies.length));
let question = args.slice(0).join(" ");

let ynembed = new Discord.RichEmbed()
.setColor("ffa500")
.addField("Answer", replies[result])
.setTimestamp()
.setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

return message.channel.send(ynembed);



}

module.exports.help = {
  name: "yn"
}
