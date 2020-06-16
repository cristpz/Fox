const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
let user = message.mentions.users.first();
  
  let {body} = await superagent
  .get(`https://nekos.life/api/v2/img/smug`);

  let smugembed = new Discord.RichEmbed()
  .setColor("#ffa500")
  .setTitle(`${message.author.username} smugs`)
  .setTimestamp()
  .setFooter("FoxBot, a bot by Akemi#2314", bot.user.displayAvatarURL)
  .setImage(body.url);
  if (!user) return message.channel.send(smugembed);
  
  let smugembed1 = new Discord.RichEmbed()
  .setColor("#ffa500")
  .setTitle(`${message.author.username} smugs on ${user.username}`)
  .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
  .setImage(body.url);

  if (user) return message.channel.send(smugembed1);

}

module.exports.help = {
  name: "smug"
}
