const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  if(!args[0]) return message.reply(`Usage: !chat <message>`);
  let text = args.join(' ');
  let {body} = await superagent
  .get(`https://nekos.life/api/v2/chat?text=${text}`);

  let chatembed = new Discord.RichEmbed()
  .setColor("#ffa500")
  .setTitle(`Answer:`)
  .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
  .setDescription(body.response);
  message.channel.send(chatembed);

}

module.exports.help = {
  name: "chat"
}
