const Discord = require("discord.js");
const fs = require("fs");
const botconfig = require("../botconfig.json");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
  if(message.guild.id === '403892662681337856') return;
  if(!args[0]) return message.reply(`Usage: !prefix <custom prefix>`);
  if (!message.member.hasPermission("MANAGE_GUILD")) return errors.noPerms(message, "MANAGE_GUILD");
  
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });
 
  let sEmbed = new Discord.RichEmbed()
  .setColor(botconfig.orange)
  .setTitle("Prefix Set! (this may take a bit to change)")
  .setDescription(`Set to ${args[0]}`)
  .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  message.channel.send(sEmbed);

}

module.exports.help = {
  name: "prefix"
}