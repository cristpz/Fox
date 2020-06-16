const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  if (!args.join(' ')) return message.reply('usage: !carsearch <car model>')
  
  let {body} = await superagent
.get(`http://www.carimagery.com/api.asmx/GetImageUrl?searchTerm=${args.join(' ')}`);

  let embed = new Discord.RichEmbed()
  .setColor("#ffa500")
  .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
  .setImage(body.string.text);

  message.channel.send(embed);

}

module.exports.help = {
  name: 'carsearch'
}
