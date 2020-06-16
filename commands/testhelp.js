const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const filter = (reaction, user) => {
    return (
      ["🇦", "🇧", "🇨", "🇩", "🇪", "🇫", "🇬", "❌"].includes(
        reaction.emoji.name
      ) && user.id === message.author.id
    );
  };

  const embed = new Discord.RichEmbed()
    .setTitle("Introduction")
    .setColor("#ffa500")
    .setDescription(
      "🇦 | Fun Commands \n\n🇧 | Action Commands \n\n🇨 | Economy Commands \n\n🇩 | Utility Commands \n\n🇪 | NSFW Commands \n\n🇫 | Moderation Commands \n\n🇬 | Miscellaneous Commands \n\n❌ | Cancel"
    )
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  const embed2 = new Discord.RichEmbed()
    .setTitle("Action Commands [12]")
    .setColor("#ffa500")
    .setDescription(
      "slap pat hug cuddle kiss smug poke feed tickle nom lick baka"
    )
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  message.channel.send(embed).then(msg =>
    msg
      .react("🇦")
      .then(() => msg.react("🇧"))
      .then(() => msg.react("🇨"))
      .then(() => msg.react("🇩"))
      .then(() => msg.react("🇪"))
      .then(() => msg.react("🇫"))
      .then(() => msg.react("🇬"))
      .then(() => msg.react("❌"))
  );

  const reactions = await message.awaitReactions(
    reaction =>
      reaction.emoji.name === "🇦" ||
      reaction.emoji.name === "🇧" ||
      reaction.emoji.name === "🇨" ||
      reaction.emoji.name === "🇩" ||
      reaction.emoji.name === "🇪" ||
      reaction.emoji.name === "🇪" ||
      reaction.emoji.name === "🇫" ||
      reaction.emoji.name === "🇬" ||
      reaction.emoji.name === "❌",
    { time: 8000 }
  );

  var one = reactions.get("🇦");
  var two = reactions.get("🇧");
  var three = reactions.get("🇨");
  var four = reactions.get("🇩");
  var five = reactions.get("🇪");
  var six = reactions.get("🇫");
  var seven = reactions.get("🇬");
  var eight = reactions.get("❌");

  if (two === 1) {
    msg => msg.edit(embed2);
  } else if (eight === 1) {
    msg => msg.delete();
  }
};

module.exports.help = {
  name: "testhelp"
};
