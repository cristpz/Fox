const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  message.channel.send(`
I have a website now! :wave:
https://fox-project.website
`);
};
module.exports.help = {
  name: "website"
};
