const superagent = require("snekfetch");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args, level) => {
  const db = require("quick.db");
  const nsfw = db.fetch(`nsfw_${message.guild.id}`);
  if (nsfw === 0)
    return message.channel.send(
      "NSFW is turned OFF for this server, use !help nsfw for more info!"
    );
 await superagent.get("https://nekos.life/api/v2/img/lewd").end((err, response) => {
    const lewdembed = new Discord.RichEmbed()
      .setDescription("Nya~!")
      .setImage(response.body.url)
      .setTimestamp()
      .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
      .setColor("#ffa500");
    message.channel.send(lewdembed);
  });
};

module.exports.help = {
  name: "lewdneko"
};
