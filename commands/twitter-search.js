const Discord = require("discord.js");
const botconfig = require("../botconfig");
let purple = botconfig.purple;


module.exports.run = async (bot, message, args) => {
  if(!args[0]) return message.reply(`usage: !twitter <twitter tag>`);
  let user = args.slice(0).join(" ");
  let twitter = `https://twitter.com/${user}/`;

  message.channel.send(twitter);

}

module.exports.help = {
  name: "twitter"
}