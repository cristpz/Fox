const Discord = require("discord.js");
require("parse");

module.exports.run = async (bot, message, args) => {
  let num = parseInt(message.args[0]) || false;
  if (num > 3600)
    return message.channel.send("Lockdown must last less than an hour.");
  if (num <= 1) return message.channel.send("Lockdown time too short.");
  if (!message.args[0] || num === false)
    return message.channel.send(
      "You can lockdown a channel with:\n !lockdown <seconds>"
    );
  message.channel
    .send(
      "**This channel has been locked down for " +
        num +
        " seconds.**\nYou can end lockdown by typing `unlock` in chat or by waiting the alloted time."
    )
    .then(m => {
      let before = m.channel.permissionOverwrites.get(message.guild.id);
      if (before) {
        if (before.allow & (1 << 11)) before = true;
        else if (before.deny & (1 << 11)) before = false;
        else before = null;
      } else before = null;
      message.channel
        .overwritePermissions(message.guild.id, {
          SEND_MESSAGES: false
        })
        .then(() => {
          let collect = message.channel.createCollector(
            ms => ms.author.id === message.author.id,
            {
              time: num * 1000
            }
          );
          collect.on("message", msg => {
            if (msg.content === "unlock") {
              m.channel
                .overwritePermissions(message.guild.id, {
                  SEND_MESSAGES: before
                })
                .then(() => {
                  clearTimeout(timer);
                  message.channel.send("**The lockdown has ended**");
                  collect.stop();
                });
            }
          });
          let timer = setTimeout(function() {
            m.channel
              .overwritePermissions(message.guild.id, {
                SEND_MESSAGES: before
              })
              .then(() => {
                message.channel.send("**The lockdown has ended**");
                collect.stop();
              });
          }, num * 1000);
        });
    });
};

module.exports.help = {
  name: "lockdown"
};
