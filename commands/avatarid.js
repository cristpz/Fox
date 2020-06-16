const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  bot.fetchUser(`${args[0]}`).then(myUser => {
    let avatarembed = new Discord.RichEmbed()
      .setTitle(`${myUser.tag}'s Avatar (Clickable)`)
      .setURL(`${myUser.displayAvatarURL}`)
      .setColor("#ffa500")
      .setImage(`${myUser.displayAvatarURL}`)
      .setTimestamp()
      .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

    message.channel.send(avatarembed);
  });
};

module.exports.help = {
  name: "disabledavatar"
};
