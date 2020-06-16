const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!args[0]) return message.reply(`Usage: !8ball <question>`);

  if (!args[1]) return message.reply("Please ask a full question.");
  let replies = [
    "Yes.",
    "No.",
    "Idk :confused:",
    "Fuck yes.",
    "Fuck no.",
    "Probably yes.",
    "Probably no."
  ];

  let result = Math.floor(Math.random() * replies.length);
  let question = args.slice(0).join(" ");

  let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#ffa500")
    .addField("❓ Question ❓", question)
    .addField("🎱 Answer 🎱", replies[result])
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  message.channel.send(ballembed);
};

module.exports.help = {
  name: "8ball"
};
