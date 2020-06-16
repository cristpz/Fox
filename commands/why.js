const Discord = require("discord.js");
const superagent = require("superagent");



module.exports.run = async (bot, message, args) => {
  let {body} = await superagent
  .get(`https://nekos.life/api/v2/why`);

  let whyembed = new Discord.RichEmbed()
  .setColor("#ffa500")
  .setTitle(`${message.author.username}, why though`)
  .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
  .setDescription(body.why);
  message.channel.send(whyembed);

}

module.exports.help = {
  name: "why"
}
