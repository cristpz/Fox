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

  let { body } = await superagent.get(
    `https://nekos.life/api/v2/img/wallpaper`
  );

  let generateembed = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`Here's an automatically generated wallpaper~!`)
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
    .setImage(body.url);

  message.channel.send(generateembed);
};

module.exports.help = {
  name: "generatewp"
};
