const Discord = module.require('discord.js');


module.exports.run = async (bot, message, args) => {
    
  const moment = require("moment");
require("moment-duration-format");
const status = {
  online: "Online",
  idle: "Idle",
  dnd: "Do Not Disturb",
  offline: "Offline/Invisible"
};
  
  let user = message.mentions.users.first() || message.author;
  
  let userinfoembed = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setAuthor(`${user.tag} | ID: ${user.id}`, user.displayAvatarURL)
    .addField("Bot?", user.bot, true)
    .addField("Discriminator", user.discriminator, true)
    .addField("Status", `${status[user.presence.status]}`, true)
    .addField("Playing", `${user.presence.game ? `${user.presence.game.name}` : "nothing currently."}`, true)
  .addField("Created At", `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
  /* .addField(`Roles [${user.user.roles.size}]`  , `${user.roles.map(r=>r.name).join(', ')}` ) */
  .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  message.channel.send(userinfoembed);
  
  /*let user0 = bot.users.find(user => user.username == args.join(' '));
//once you've found the user you can get the id (or you can write .id after the find method)
let id = user0.id;
  
  bot.fetchUser(id).then(myUser => {
    
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
  /*.setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
      
      message.channel.send(embed);
      
});
  
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
  /*.setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
      
      message.channel.send(embed);*/
}

module.exports.help = {
    name: "userinfo"
}
