const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  if (!args[0]) return message.reply(`Usage: !tickle <user>`);

  let { body } = await superagent.get(`https://nekos.life/api/v2/img/tickle`);

  let tickleembed = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(
      `${message.author.username} tickled ${
        message.mentions.members.first().user.username
      }`
    )
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
    .setImage(body.url);

  message.channel.send(tickleembed);
};

module.exports.help = {
  name: "tickle"
};
