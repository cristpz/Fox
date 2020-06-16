const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!args[0]) return message.reply(`Usage: !say <message>`);
if (args.join(" ") === `@everyone`) return message.channel.send(`No way bucko!`);
      const sayMessage = args.join(` `);
      message.delete().catch();
  let embed = new Discord.RichEmbed()
  .setColor('#ffa500')
  .setTitle(sayMessage)
  .setThumbnail(message.author.displayAvatarURL)
  .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
      message.channel.send(embed);

}

module.exports.help = {
  name: "say"
}