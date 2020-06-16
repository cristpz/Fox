const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.channel.send(`
  \`Server Invite Link:\`
  https://discord.gg/KhxWfY8`);

}

module.exports.help = {
  name: "server"
}
