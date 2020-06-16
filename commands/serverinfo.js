const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    // `${message.guild.emojis.map(e=>e.toString()).join(", ")}`
    // `${message.guild.channels.map(c=>c.name).join(', ')}`
    // `${message.guild.roles.map(r=>r.name).join(', ')}`
    let sicon = `https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}?size=128`;
  if (message.guild.features.includes('ANIMATED_ICON')) sicon = `https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}.gif?size=128`
    let serverembed = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Server ID", message.guild.id)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined At", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount)
    .addField(`Total Emojis [${message.guild.emojis.size}]`, `use !emotelist to see a full list of the server's emotes`)
    .addField(`Total Channels [${message.guild.channels.size}]`, `use !chanlist to see a full list of the server's channels`)
    .addField(`Total Roles [${message.guild.roles.size}]`, `use !rolelist to see a full list of the server's roles`)
    .addField("Server Owner", message.guild.owner)
    .addField("Server Owner ID", message.guild.owner.id)
    .addField("Server Region", message.guild.region)
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

    message.channel.send(serverembed);
}

module.exports.help = {
  name: "serverinfo"
}
