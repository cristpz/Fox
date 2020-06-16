const Discord = require("discord.js");
const superagent = require("superagent");
module.exports.run = async (bot, message, args) => {
  const db = require("quick.db");
  const nsfw = db.fetch(`nsfw_${message.guild.id}`);
  if (nsfw === 0)
    return message.channel.send(
      "NSFW is turned OFF for this server, use !help nsfw for more info!"
    );
  if (!message.channel.nsfw)
    return message.channel.send(
      ":warning: This channel is not marked as **NSFW**"
    );
  let { body } = await superagent.get(`https://nekos.life/api/v2/img/yuri`);
  let yuriembed = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${message.author.username}, oh yes.`)
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
    .setImage(body.url);
  message.channel.send(yuriembed);
};
module.exports.help = {
  name: "yuri"
};
