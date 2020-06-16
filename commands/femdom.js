const Discord = require("discord.js");
const superagent = require("superagent");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
  const db = require("quick.db");
  const nsfw = db.fetch(`nsfw_${message.guild.id}`);
  if (nsfw === 0)
    return message.channel.send(
      "NSFW is turned OFF for this server, use !help nsfw for more info!"
    );
  if (!message.channel.nsfw)
    return message.channel.send(
      ":warning: This channel is not marked as **NSFW**"
    );
  if (!message.mentions.members.first())
    return message.reply(`Usage: !femdom <user>`);

  function getUserFromMention(mention) {
    if (!mention) return;

    if (mention.startsWith("<@") && mention.endsWith(">")) {
      mention = mention.slice(2, -1);

      if (mention.startsWith("!")) {
        mention = mention.slice(1);
      }

      return bot.users.get(mention);
    }
  }

  if (!args[1]) {
    let { body } = await superagent.get(`https://nekos.life/api/v2/img/femdom`);

    let femdomembed = new Discord.RichEmbed()
      .setColor("#ffa500")
      .setTitle(
        `${message.author.username} dominated ${
          message.mentions.members.first().user.username
        }`
      )
      .setTimestamp()
      .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
      .setImage(body.url);

    message.channel.send(femdomembed);
  }

  if (args[1]) {
    if (message.author.id !== botconfig.ownerID) {
      const user = getUserFromMention(args[0]);
      const user1 = getUserFromMention(args[1]);

      let { body } = await superagent.get(
        `https://nekos.life/api/v2/img/femdom`
      );

      let femdomembed3 = new Discord.RichEmbed()
        .setColor("#ffa500")
        .setTitle(
          `Akemi dominated ${message.author.username}, ${user.username} and ${user1.username} 🖤`
        )
        .setTimestamp()
        .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
        .setImage(body.url);

      message.channel.send(femdomembed3);
    } else if (message.author.id === botconfig.ownerID) {
      const user = getUserFromMention(args[0]);
      const user1 = getUserFromMention(args[1]);

      let { body } = await superagent.get(
        `https://nekos.life/api/v2/img/femdom`
      );

      let femdomembed1 = new Discord.RichEmbed()
        .setColor("#ffa500")
        .setTitle(
          `${message.author.username} dominated ${user.username} and ${user1.username} ❤`
        )
        .setTimestamp()
        .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
        .setImage(body.url);

      message.channel.send(femdomembed1);
    }
  }
};

module.exports.help = {
  name: "femdom"
};
