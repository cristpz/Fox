const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  let { body } = await superagent.get(`https://nekos.life/api/v2/img/baka`);

  let bakaembed = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${message.author.username}, baka!`)
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
    .setImage(body.url);

  message.channel.send(bakaembed);
};

module.exports.help = {
  name: "baka"
};
