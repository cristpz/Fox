const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
  if (!message.guild.me.hasPermission("MANAGE_ROLES"))
    return message.reply("Sorry! I don't have the permission to do that.");
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return errors.noPerms(message, "MANAGE_ROLES");
  if (!args[0]) return message.reply("Usage: !removerole <user> <role>");

  let rMember =
    message.guild.member(message.mentions.users.first()) ||
    message.guild.members.get(args[0]);
  if (!rMember) return message.reply("Couldn't find that user.");
  let role = args.join(" ").slice(22);
  if (!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if (!gRole) return message.reply("Couldn't find that role.");

  if (!rMember.roles.has(gRole.id))
    return message.reply("They don't have that role.");
  await rMember.removeRole(gRole.id);

  message.channel.send("done.");
};

module.exports.help = {
  name: "removerole"
};
