const superagent = require("snekfetch");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args, level) => {
  const db = require("quick.db");
  const nsfw = db.fetch(`nsfw_${message.guild.id}`);
  if (nsfw === 0)
    return message.channel.send(
      "NSFW is turned OFF for this server, use !help nsfw for more info!"
    );
if (!message.channel.nsfw) 
 return message.channel.send(":warning: This channel is not marked as **NSFW**");
  const { body } = await superagent
    .get("https://nekos.life/api/v2/img/Random_hentai_gif");

      const hentaiembed = new Discord.RichEmbed()
        .setImage(body.url)
        .setTimestamp()
        .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
        .setColor("#ffa500");
      message.channel.send(hentaiembed);
};

module.exports.help = {
  name: "hentaigif"
};
