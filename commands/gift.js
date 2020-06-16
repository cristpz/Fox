const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  const emoji = bot.emojis.find(emoji => emoji.name === `vintagecoin`);
  const emojiob = bot.emojis.find(emoji => emoji.name === "ballbama");
  const emojico = bot.emojis.find(emoji => emoji.name === "cok");
  const emojitestarossa = bot.emojis.find(
    emoji => emoji.name === "testarossa2"
  );
  const emojibora = bot.emojis.find(emoji => emoji.name === `bora`);
  const emojibrz = bot.emojis.find(emoji => emoji.name === `brz`);
  const emojiclio = bot.emojis.find(emoji => emoji.name === `clio`);
  const emojicorsa = bot.emojis.find(emoji => emoji.name === `corsa`);
  const emojievo = bot.emojis.find(emoji => emoji.name === `evo`);
  const emojir32gtr = bot.emojis.find(emoji => emoji.name === `r32gtr`);
  const emojiw8 = bot.emojis.find(emoji => emoji.name === `vectorw8`);
  const emojistarlet = bot.emojis.find(emoji => emoji.name === `starlet`);
  const emojigolf = bot.emojis.find(emoji => emoji.name === `golfxmas`);
  if (!message.mentions.members.first())
    return message.channel.send(`Please mention a valid user!`);

  let targetMember = message.mentions.members.first();
  let amount = args[2];

  if (amount < 0) return message.channel.send(`...`);

  if (targetMember.bot) return message.reply(`you cannot gift items to bots!`);

  if (isNaN(amount))
    return message.channel.send(`Please define a valid amount of this item!`);

  let targetBalance = await db.fetch(`obamos_${targetMember.id}`),
    selfBalance = await db.fetch(`obamos_${message.author.id}`),
    selfBalance2 = await db.fetch(`clio_${message.author.id}`),
    selfBalance3 = await db.fetch(`cocaine_${message.author.id}`),
    selfBalance4 = await db.fetch(`evoix_${message.author.id}`),
    selfBalance5 = await db.fetch(`corsa_${message.author.id}`),
    selfBalance6 = await db.fetch(`testarossa_${message.author.id}`),
    selfBalance7 = await db.fetch(`bora_${message.author.id}`),
    selfBalance8 = await db.fetch(`brz_${message.author.id}`),
    selfBalance9 = await db.fetch(`r32gtr_${message.author.id}`),
    selfBalance10 = await db.fetch(`w8_${message.author.id}`),
    selfBalance11 = await db.fetch(`starlet_${message.author.id}`),
    selfBalance12 = await db.fetch(`golfxmas_${message.author.id}`);


  if (targetBalance === null) targetBalance = 0;
  if (selfBalance === null) selfBalance = 0;
  if (args[0] === "cocaine") {
    if (args[2] === 0) return message.channel.send("Uhh, what?");
    if (amount === NaN) return message.channel.send("Uhh, what?");
    if (args[2] === null) return;
    if (!args[2]) return;
    if (args[1] === 0) return message.channel.send("Uhh, what?");
    if (!args[1]) return message.channel.send("Uhh, what?");
    if (args[2] > selfBalance3)
      return message.channel.send(
        `Sorry, but you cannot do that, try checking your inventory again...`
      );

    db.add(`cocaine_${targetMember.id}`, amount);
    db.subtract(`cocaine_${message.author.id}`, amount);

    let embed = new Discord.RichEmbed()
      .setColor("#ffa500")
      .addField(
        "Gift",
        `gifted ${amount}g of ${emojico} to ${targetMember.user.username}`
      )
      .setTimestamp()
      .setFooter(
        `From ${message.author.username}`,
        message.author.displayAvatarURL
      );

    message.channel.send(embed);
  }
  if (args[0] === "obamos") {
    if (args[2] === 0) return message.channel.send("Uhh, what?");
    if (amount === NaN) return message.channel.send("Uhh, what?");
    if (args[2] === null) return;
    if (!args[2]) return;
    if (args[1] === 0) return message.channel.send("Uhh, what?");
    if (!args[1]) return message.channel.send("Uhh, what?");
    if (args[2] > selfBalance)
      return message.channel.send(
        `Sorry, but you cannot do that, try checking your inventory again...`
      );

    db.add(`obamos_${targetMember.id}`, amount);
    db.subtract(`obamos_${message.author.id}`, amount);

    let embed = new Discord.RichEmbed()
      .setColor("#ffa500")
      .addField(
        "Gift",
        `gifted x${amount} ${emojiob} to ${targetMember.user.username}`
      )
      .setTimestamp()
      .setFooter(
        `From ${message.author.username}`,
        message.author.displayAvatarURL
      );

    message.channel.send(embed);
  }
  if (args[0] === "clio") {
    if (args[2] === 0) return message.channel.send("Uhh, what?");
    if (amount === NaN) return message.channel.send("Uhh, what?");
    if (args[2] === null) return;
    if (!args[2]) return;
    if (args[1] === 0) return message.channel.send("Uhh, what?");
    if (!args[1]) return message.channel.send("Uhh, what?");
    if (args[2] > selfBalance2)
      return message.channel.send(
        `Sorry, but you cannot do that, try checking your inventory again...`
      );

    db.add(`clio_${targetMember.id}`, amount);
    db.subtract(`clio_${message.author.id}`, amount);

    let embed = new Discord.RichEmbed()
      .setColor("#ffa500")
      .addField(
        "Gift",
        `gifted x${amount} ${emojiclio} to ${targetMember.user.username}`
      )
      .setTimestamp()
      .setFooter(
        `From ${message.author.username}`,
        message.author.displayAvatarURL
      );

    message.channel.send(embed);
  }
  if (args[0] === "evoix") {
    if (args[2] === 0) return message.channel.send("Uhh, what?");
    if (args[2] === null) return;
    if (!args[2]) return;
    if (amount === NaN) return message.channel.send("Uhh, what?");
    if (args[1] === 0) return message.channel.send("Uhh, what?");
    if (!args[1]) return message.channel.send("Uhh, what?");
    if (args[2] > selfBalance4)
      return message.channel.send(
        `Sorry, but you cannot do that, try checking your inventory again...`
      );

    db.add(`evoix_${targetMember.id}`, amount);
    db.subtract(`evoix_${message.author.id}`, amount);

    let embed = new Discord.RichEmbed()
      .setColor("#ffa500")
      .addField(
        "Gift",
        `gifted x${amount} ${emojievo} to ${targetMember.user.username}`
      )
      .setTimestamp()
      .setFooter(
        `From ${message.author.username}`,
        message.author.displayAvatarURL
      );

    message.channel.send(embed);
  }
  if (args[0] === "corsa") {
    if (args[2] === 0) return message.channel.send("Uhh, what?");
    if (args[2] === null) return;
    if (!args[2]) return;
    if (amount === NaN) return message.channel.send("Uhh, what?");
    if (args[1] === 0) return message.channel.send("Uhh, what?");
    if (!args[1]) return message.channel.send("Uhh, what?");
    if (args[2] > selfBalance5)
      return message.channel.send(
        `Sorry, but you cannot do that, try checking your inventory again...`
      );

    db.add(`corsa_${targetMember.id}`, amount);
    db.subtract(`corsa_${message.author.id}`, amount);

    let embed = new Discord.RichEmbed()
      .setColor("#ffa500")
      .addField(
        "Gift",
        `gifted x${amount} ${emojicorsa} to ${targetMember.user.username}`
      )
      .setTimestamp()
      .setFooter(
        `From ${message.author.username}`,
        message.author.displayAvatarURL
      );

    message.channel.send(embed);
  }
  if (args[0] === "testarossa") {
    if (args[2] === 0) return message.channel.send("Uhh, what?");
    if (amount === NaN) return message.channel.send("Uhh, what?");
    if (args[2] === null) return;
    if (!args[2]) return;
    if (args[1] === 0) return message.channel.send("Uhh, what?");
    if (!args[1]) return message.channel.send("Uhh, what?");
    if (args[2] > selfBalance6)
      return message.channel.send(
        `Sorry, but you cannot do that, try checking your inventory again...`
      );

    db.add(`testarossa_${targetMember.id}`, amount);
    db.subtract(`testarossa_${message.author.id}`, amount);

    let embed = new Discord.RichEmbed()
      .setColor("#ffa500")
      .addField(
        "Gift",
        `gifted x${amount} ${emojitestarossa} to ${targetMember.user.username}`
      )
      .setTimestamp()
      .setFooter(
        `From ${message.author.username}`,
        message.author.displayAvatarURL
      );

    message.channel.send(embed);
  }
  if (args[0] === "bora") {
    if (args[2] === 0) return message.channel.send("Uhh, what?");
    if (args[2] === null) return;
    if (!args[2]) return;
    if (amount === NaN) return message.channel.send("Uhh, what?");
    if (args[1] === 0) return message.channel.send("Uhh, what?");
    if (!args[1]) return message.channel.send("Uhh, what?");
    if (args[2] > selfBalance7)
      return message.channel.send(
        `Sorry, but you cannot do that, try checking your inventory again...`
      );

    db.add(`bora_${targetMember.id}`, amount);
    db.subtract(`bora_${message.author.id}`, amount);

    let embed = new Discord.RichEmbed()
      .setColor("#ffa500")
      .addField(
        "Gift",
        `gifted x${amount} ${emojibora} to ${targetMember.user.username}`
      )
      .setTimestamp()
      .setFooter(
        `From ${message.author.username}`,
        message.author.displayAvatarURL
      );

    message.channel.send(embed);
  }
  if (args[0] === "brz") {
    if (args[2] === 0) return message.channel.send("Uhh, what?");
    if (args[2] === null) return;
    if (!args[2]) return;
    if (amount === NaN) return message.channel.send("Uhh, what?");
    if (args[1] === 0) return message.channel.send("Uhh, what?");
    if (!args[1]) return message.channel.send("Uhh, what?");
    if (args[2] > selfBalance8)
      return message.channel.send(
        `Sorry, but you cannot do that, try checking your inventory again...`
      );

    db.add(`brz_${targetMember.id}`, amount);
    db.subtract(`brz_${message.author.id}`, amount);

    let embed = new Discord.RichEmbed()
      .setColor("#ffa500")
      .addField(
        "Gift",
        `gifted x${amount} ${emojibrz} to ${targetMember.user.username}`
      )
      .setTimestamp()
      .setFooter(
        `From ${message.author.username}`,
        message.author.displayAvatarURL
      );

    message.channel.send(embed);
  }
  if (args[0] === "r32gtr") {
    if (args[2] === 0) return message.channel.send("Uhh, what?");
    if (args[2] === null) return;
    if (!args[2]) return;
    if (amount === NaN) return message.channel.send("Uhh, what?");
    if (args[1] === 0) return message.channel.send("Uhh, what?");
    if (!args[1]) return message.channel.send("Uhh, what?");
    if (args[2] > selfBalance9)
      return message.channel.send(
        `Sorry, but you cannot do that, try checking your inventory again...`
      );

    db.add(`r32gtr_${targetMember.id}`, amount);
    db.subtract(`r32gtr_${message.author.id}`, amount);

    let embed = new Discord.RichEmbed()
      .setColor("#ffa500")
      .addField(
        "Gift",
        `gifted x${amount} ${emojir32gtr} to ${targetMember.user.username}`
      )
      .setTimestamp()
      .setFooter(
        `From ${message.author.username}`,
        message.author.displayAvatarURL
      );

    message.channel.send(embed);
  }
   if (args[0] === "w8") {
    if (args[2] === 0) return message.channel.send("Uhh, what?");
     if (args[2] === null) return;
    if (!args[2]) return;
    if (amount === NaN) return message.channel.send("Uhh, what?");
    if (args[1] === 0) return message.channel.send("Uhh, what?");
    if (!args[1]) return message.channel.send("Uhh, what?");
    if (args[2] > selfBalance10)
      return message.channel.send(
        `Sorry, but you cannot do that, try checking your inventory again...`
      );

    db.add(`w8_${targetMember.id}`, amount);
    db.subtract(`w8_${message.author.id}`, amount);

    let embed = new Discord.RichEmbed()
      .setColor("#ffa500")
      .addField(
        "Gift",
        `gifted x${amount} ${emojiw8} to ${targetMember.user.username}`
      )
      .setTimestamp()
      .setFooter(
        `From ${message.author.username}`,
        message.author.displayAvatarURL
      );

    message.channel.send(embed);
  }
  if (args[0] === "starlet") {
    if (args[2] === 0) return message.channel.send("Uhh, what?");
     if (args[2] === null) return;
    if (!args[2]) return;
    if (amount === NaN) return message.channel.send("Uhh, what?");
    if (args[1] === 0) return message.channel.send("Uhh, what?");
    if (!args[1]) return message.channel.send("Uhh, what?");
    if (args[2] > selfBalance11)
      return message.channel.send(
        `Sorry, but you cannot do that, try checking your inventory again...`
      );

    db.add(`starlet_${targetMember.id}`, amount);
    db.subtract(`starlet_${message.author.id}`, amount);

    let embed = new Discord.RichEmbed()
      .setColor("#ffa500")
      .addField(
        "Gift",
        `gifted x${amount} ${emojistarlet} to ${targetMember.user.username}`
      )
      .setTimestamp()
      .setFooter(
        `From ${message.author.username}`,
        message.author.displayAvatarURL
      );

    message.channel.send(embed);
  }
  if (args[0] === "golfxmas") {
    if (args[2] === 0) return message.channel.send("Uhh, what?");
     if (args[2] === null) return;
    if (!args[2]) return;
    if (amount === NaN) return message.channel.send("Uhh, what?");
    if (args[1] === 0) return message.channel.send("Uhh, what?");
    if (!args[1]) return message.channel.send("Uhh, what?");
    if (args[2] > selfBalance12)
      return message.channel.send(
        `Sorry, but you cannot do that, try checking your inventory again...`
      );

    db.add(`golfxmas_${targetMember.id}`, amount);
    db.subtract(`golfxmas_${message.author.id}`, amount);

    let embed = new Discord.RichEmbed()
      .setColor("#ffa500")
      .addField(
        "Gift",
        `gifted x${amount} ${emojigolf} to ${targetMember.user.username}`
      )
      .setTimestamp()
      .setFooter(
        `From ${message.author.username}`,
        message.author.displayAvatarURL
      );

    message.channel.send(embed);
  }
};

module.exports.help = {
  name: "gift"
};
