const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
  if (!message.guild.me.hasPermission("KICK_MEMBERS"))
    return message.reply("Sorry! I don't have the permission to do that.");
  if (!message.member.hasPermission("KICK_MEMBERS"))
    return errors.noPerms(message, "KICK_MEMBERS");
  if (!args[0]) return message.reply(`Usage: !kick <user> <reason>`);
  let kUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  if (!kUser) return errors.cantfindUser(message.channel);
  let kReason = args.join(" ").slice(22);

  let kickEmbed = new Discord.RichEmbed()
    .setDescription("Kick")
    .setColor("#ffa500")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField(
      "Kicked By",
      `<@${message.author.id}> with ID ${message.author.id}`
    )
    .addField("Kicked In", message.channel)
    .addField("Reason", kReason)
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  message.guild.member(kUser).kick(kReason);
  return message.channel.send(kickEmbed);
};

module.exports.help = {
  name: "kick"
};
