const Discord = require("discord.js");
const superagent = require("superagent");



module.exports.run = async (bot, message, args) => {
  let {body} = await superagent
  .get(`https://nekos.life/api/v2/fact`);

  let factembed = new Discord.RichEmbed()
  .setColor("#ffa500")
  .setTitle(`Random Fact:`)
  .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
  .setDescription(body.fact);
  message.channel.send(factembed);

}

module.exports.help = {
  name: "fact"
}
