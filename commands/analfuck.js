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
    return message.reply(`Usage: !analfuck <user>`);

  let { body } = await superagent.get(`https://nekos.life/api/v2/img/anal`);

  let analfuckembed = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(
      `${message.author.username} fucked ${
        message.mentions.members.first().user.username
      } anally`
    )
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
    .setImage(body.url);

  message.channel.send(analfuckembed);
};

module.exports.help = {
  name: "analfuck"
};
