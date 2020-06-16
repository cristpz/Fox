const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  let user = message.mentions.users.first();

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
  let { body } = await superagent.get(`https://nekos.life/api/v2/img/pwankg`);

  let wankembed = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${message.author.username} wanks...`)
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
    .setImage(body.url);

  if (!user) return message.channel.send(wankembed);

  let wankembed1 = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${message.author.username} wanks to ${user.username}`)
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
    .setTimestamp()
    .setImage(body.url);

  if (user) return message.channel.send(wankembed1);
};

module.exports.help = {
  name: "wank"
};
