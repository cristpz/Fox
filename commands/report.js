const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!args[0]) return message.reply(`Usage: !report <user> <reason>`);

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Sorry, I cannot find that user.")
    let reason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("User Report")
    .setColor("#ffa500")
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", reason)
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("It looks like this server doesn't have a channel for reports.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

    return;
}
module.exports.help = {
  name: "report"
}
