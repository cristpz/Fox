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
  if (!message.mentions.members.first())
    return message.reply(`Usage: !bj <user>`);
  let { body } = await superagent.get(`https://nekos.life/api/v2/img/bj`);

  let bjembed = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(
      `${message.author.username} sucked ${
        message.mentions.members.first().user.username
      }'s pp`
    )
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
    .setImage(body.url);

  let customemb = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`Akemi sucked ${message.author.username}'s pp ^-^ ~`)
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
    .setImage(body.url);

  if (
    message.author.id === "358223744411369473" &&
    message.mentions.members.first().id === "306104099185623042"
  )
    return message.channel.send(customemb);

  message.channel.send(bjembed);
};

module.exports.help = {
  name: "bj"
};
