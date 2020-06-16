const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
  if (!message.guild.me.hasPermission("BAN_MEMBERS"))
    return message.reply("Sorry! I don't have the permission to do that.");
  if (!message.member.hasPermission("BAN_MEMBERS"))
    return errors.noPerms(message, "BAN_MEMBERS");
  if (!args[0]) return message.reply("Usage: !ban <user> <reason>");

  let bUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  if (!bUser) return errors.cantfindUser(message.channel);
  if (bUser.id === bot.user.id) return errors.botuser(message);
  let bReason = args.join(" ").slice(22);
  if (!bReason) return errors.noReason(message.channel);
  if (bUser.hasPermission("MANAGE_MESSAGES"))
    return errors.equalPerms(message, bUser, "MANAGE_MESSAGES");

  let banEmbed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor("#ffa500")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField(
      "Banned By",
      `<@${message.author.id}> with ID ${message.author.id}`
    )
    .addField("Banned In", message.channel)
    .addField("Reason", bReason)
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  message.guild.member(bUser).ban(bReason);
  return message.channel.send(banEmbed);
};

module.exports.help = {
  name: "ban"
};
