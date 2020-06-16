const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  let suggestion = args.slice(0).join(" ");
  if (!suggestion) return message.reply("Please enter a valid suggestion!");
  let suggestembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setImage(message.author.displayAvatarURL)
  .addField("With ID", message.author.id)
  .addField("Suggestion", suggestion)
  .addField("Time/Date", message.createdAt)
  .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
  .setColor("ffa500");
bot.guilds.get("500244270373011466").channels.get("504743305427550219").send(suggestembed);
  message.reply('your suggestion has been saved, thank you!');
}
module.exports.help = {
  name: "suggest"
}
