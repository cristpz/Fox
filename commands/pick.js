const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!args[0]) return message.reply(`Usage: !pick <object 1> <object 2>`);

  //4048ball (question)
if(!args[1]) return message.reply("Please mention more than 1 thing.");
let replies = ["I pick the first one.", "I pick the second one.", "I pick none.", "I pick all of them."];

let result = Math.floor((Math.random() * replies.length));
let question = args.slice(0).join(" ");

let ballembed = new Discord.RichEmbed()
.setAuthor(message.author.tag)
.setColor("ffa500")
.addField("Things Compared", question)
.addField("The bot's choice", replies[result])
.setTimestamp()
.setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)

message.channel.send(ballembed);



}

module.exports.help = {
  name: "pick"
}
