const Discord = module.require('discord.js');
const botconfig = require('../botconfig.json');

module.exports.run = async (bot, message, args) => {
  if (args.join(' ') === NaN) return;
  const moment = require("moment");
require("moment-duration-format");
const status = {
  online: "Online",
  idle: "Idle",
  dnd: "Do Not Disturb",
  offline: "Offline/Invisible"
};
    bot.fetchUser(`${args[0]}`).then(myUser => {
    
      let embed = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setImage(myUser.displayAvatarURL)
    .setAuthor(`${myUser.username} | ID: ${myUser.id}`)
    .addField("Bot?", myUser.bot, true)
    .addField("Discriminator", myUser.discriminator, true)
    .addField("Status", `${status[myUser.presence.status]}`, true)
    .addField("Playing", `${myUser.presence.game ? `${myUser.presence.game.name}` : "nothing currently."}`, true)
      .addField("Created At", `${moment.utc(myUser.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
  /* .addField(`Roles [${user.user.roles.size}]`  , `${user.roles.map(r=>r.name).join(', ')}` ) */
  .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
      
      message.channel.send(embed);
      
});
}

module.exports.help = {
    name: "userinfoid"
}
