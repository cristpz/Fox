const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

  let embed = new Discord.RichEmbed()
  .setTitle(`Invite me to your server from here!`)
  .setURL('https://discordapp.com/oauth2/authorize?client_id=508054508744605700&scope=bot&permissions=2113268982')
  .setColor('#ffa500');
    let embed2 = new Discord.RichEmbed()
  .setTitle(`Here is my top.gg link aswell!`)
  .setURL('https://top.gg/bot/508054508744605700')
  .setColor('#ffa500');
  
  let embed3 = new Discord.RichEmbed()
  .setTitle(`And of course I'm on Bots For Discord too!`)
  .setURL('https://botsfordiscord.com/bot/508054508744605700')
  .setColor('#ffa500');
  
  await message.channel.send(embed);
  await message.channel.send(embed2);
  await message.channel.send(embed3);
}
module.exports.help = {
  name: "invite"
}
