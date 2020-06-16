const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
if(!message.mentions.members.first()) return message.reply(`Usage: !poke <user>`);

  let {body} = await superagent
  .get(`https://nekos.life/api/v2/img/poke`);

  let pokeembed = new Discord.RichEmbed()
  .setColor("#ffa500")
  .setTitle(`${message.author.username} poked ${message.mentions.members.first().user.username}`)
  .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
  .setImage(body.url);

  message.channel.send(pokeembed);

}

module.exports.help = {
  name: "poke"
}
