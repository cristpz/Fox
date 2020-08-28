const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.guild.me.hasPermission("MANAGE_MESSAGES"))
    return message.reply("Sorry! I don't have the permission to do that.");
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("Sorry, you cannot use this command.");
  if (!args[0])
    return message.channel.send(
      "Please provide a valid number of messages to clear. (2-100)"
    );
  if (args[0] <= 1)
    return message.channel.send(
      "Please provide a valid number from 2-100."
    );
  if (args[0] >= 101)
    return message.channel.send(
      "Please provide a valid number from 2-100."
    );
  message.channel.bulkDelete(args[0] + 1).then(() => {
    message.channel
      .send(`Cleared ${args[0]} messages.`)
      .then(msg => msg.delete(2000));
  });
};

module.exports.help = {
  name: "clear"
};
