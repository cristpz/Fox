const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let user = message.mentions.users.first() || message.author;

  let avatarurl = `${user.displayAvatarURL}`;

  let avatarembed = new Discord.RichEmbed()
    .setTitle(`${user.tag}'s Avatar (Clickable)`)
    .setURL(avatarurl)
    .setColor("#ffa500")
    .setImage(avatarurl)
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  message.channel.send(avatarembed);
};

module.exports.help = {
  name: "avatar"
};
