const Discord = module.require("discord.js");
const errors = require("../utils/errors.js");

const agree = "✅";
const disagree = "❌";

module.exports.run = async (bot, message, args) => {
  if (!message.guild.me.hasPermission("KICK_MEMBERS"))
    return message.reply("Sorry! I don't have the permission to do that.");

  if (!message.member.hasPermission("KICK_MEMBERS"))
    return errors.noPerms(message, "KICK_MEMBERS");

  if (message.mentions.users.size === 0) {
    return message.reply("Please mention a user to kick!");
  }

  let kickmember = message.guild.member(message.mentions.users.first());
  if (!kickmember) {
    message.reply("That user does not seem valid!");
  }

  if (!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
    return message
      .reply('I need the "KICK_MEMBERS" permission to kick!')
      .catch(console.error);
  }

  let msg = await message.channel.send("Vote now! (30 Seconds)");
  await msg.react(agree);
  await msg.react(disagree);

  const reactions = await message.awaitReactions(
    reaction =>
      reaction.emoji.name === agree || reaction.emoji.name === disagree,
    { time: 30000 }
  );
  msg.delete();

  var NO_Count = reactions.get(disagree).count;
  var YES_Count = reactions.get(agree);

  if (YES_Count == undefined) {
    var YES_Count = 1;
  } else {
    var YES_Count = reactions.get(agree).count;
  }

  var sumsum = new Discord.RichEmbed()

    .addField("Total votes (NO):", `${NO_Count - 1}`)
    .addField("Total votes (YES):", `${YES_Count - 1}`)
    .setFooter("NOTE: Votes needed to kick (5+)")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
    .setColor("0xffa500");

  await message.channel.send({ embed: sumsum });

  if (YES_Count >= 5 && YES_Count > NO_Count) {
    kickmember.kick().then(member => {
      message.reply(`${member.user.username} was succesfully kicked`);
    });
  }
};

module.exports.help = {
  name: "votekick"
};
