const Discord = require("discord.js");
const fs = require("fs");
const botconfig = require("../botconfig.json");
const errors = require("../utils/errors.js");
const db = require("quick.db");
let xp = require("../xp.json");

module.exports.run = async (bot, message, args) => {
  let user = message.mentions.users.first() || message.author;

  let car = await db.get(`car_${user.id}`);

  let check = await db.get(`${car}_${user.id}`);
  
  if (check < 1) return db.delete(`car_${user.id}`),
    message.reply("that user has sold their main car, bruh.");
  
  if (check === null) return message.reply("check the user's inventory again...");
  
  if (!xp[user.id]) {
    xp[user.id] = {
      xp: 0,
      level: 1
    };
  }

  let curlvl = xp[user.id].level;

  let embedcorsa1 = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${user.username}'s Main Car`)
    .setDescription("**2002 Opel Corsa T1**")
    .setImage(
      "https://cdn.proxyparts.com/vehicles/100232/2835780/large/87ebf358-be1b-4714-b3b9-74ab843db032.jpg"
    )
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let embedcorsa2 = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${user.username}'s Main Car`)
    .setDescription("**2002 Opel Corsa T2**")
    .setImage(
      "http://www.cars-directory.net/pics/opel/corsa/2002/opel_corsa_a1247091024b2823272_orig.jpg"
    )
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let embedcorsa3 = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${user.username}'s Main Car`)
    .setDescription("**2002 Opel Corsa T3**")
    .setImage(
      "https://media.discordapp.net/attachments/530517627836170261/556905198686044161/161100245-4.jpg?width=400&height=266"
    )
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let embedclio1 = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${user.username}'s Main Car`)
    .setDescription("**Renault Clio v6 with a Twin Turbo T1**")
    .setImage(
      "https://media.discordapp.net/attachments/530517627836170261/556874546968526858/IMG_20190317_181414.jpg?width=400&height=243"
    )
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let embedclio2 = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${user.username}'s Main Car`)
    .setDescription("**Renault Clio v6 with a Twin Turbo T2**")
    .setImage(
      "https://media.discordapp.net/attachments/530517627836170261/556874546968526859/IMG_20190317_182003.png?width=400&height=267"
    )
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let embedclio3 = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${user.username}'s Main Car`)
    .setDescription("**Renault Clio v6 with a Twin Turbo T3**")
    .setImage(
      "https://media.discordapp.net/attachments/530517627836170261/556874547505266688/1200px-RenaultClioV6.jpg?width=400&height=262"
    )
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let embedevoix1 = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${user.username}'s Main Car`)
    .setDescription("**Mitsubishi Lancer Evolution IX T1**")
    .setImage(
      "https://media.discordapp.net/attachments/530517627836170261/556871407942762504/car_photo_212729.jpg?width=400&height=267"
    )
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let embedevoix2 = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${user.username}'s Main Car`)
    .setDescription("**Mitsubishi Lancer Evolution IX T2**")
    .setImage(
      "https://media.discordapp.net/attachments/530517627836170261/556871497499803678/IMG_20190317_180732.jpg?width=400&height=218"
    )
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let embedevoix3 = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${user.username}'s Main Car`)
    .setDescription("**Mitsubishi Lancer Evolution IX T3**")
    .setImage(
      "https://media.discordapp.net/attachments/530517627836170261/556871574524002393/maxresdefault.jpg?width=400&height=225"
    )
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let embedtestarossa1 = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${user.username}'s Main Car`)
    .setDescription("**Ferrari Testarossa (1986) T1**")
    .setImage(
      "https://cdn.discordapp.com/attachments/605490012074672158/622591651826761748/6fae89694a205a552b9b74e5dcc49294_XL.png"
    )
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let embedtestarossa2 = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${user.username}'s Main Car`)
    .setDescription("**Ferrari Testarossa (1986) T2**")
    .setImage(
      "https://cdn.discordapp.com/attachments/605490012074672158/622591852717015040/1995-berlinetta-motorcars-ferrari-testarossa-01_large.png"
    )
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let embedtestarossa3 = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${user.username}'s Main Car`)
    .setDescription("**Ferrari Testarossa (1986) T3**")
    .setImage(
      "https://cdn.discordapp.com/attachments/605490012074672158/622592065636925453/yes-0119.png"
    )
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let embedbora1 = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${user.username}'s Main Car`)
    .setDescription("**Volkswagen Bora (1999) T1**")
    .setImage("http://0x0.st/zyer.png")
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let embedbora2 = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${user.username}'s Main Car`)
    .setDescription("**Volkswagen Bora (1999) T2**")
    .setImage("http://0x0.st/zyes.png")
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let embedbora3 = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${user.username}'s Main Car`)
    .setDescription("**Volkswagen Bora (1999) T3**")
    .setImage("http://0x0.st/zyez.jpg")
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let embedbrz1 = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${user.username}'s Main Car`)
    .setDescription("**Subaru BRZ T1**")
    .setImage("http://0x0.st/zy4J.jpg")
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let embedbrz2 = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${user.username}'s Main Car`)
    .setDescription("**Subaru BRZ T2**")
    .setImage("http://0x0.st/zy4p.jpg")
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let embedbrz3 = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${user.username}'s Main Car`)
    .setDescription("**Subaru BRZ T3**")
    .setImage("http://0x0.st/zy4t.jpg")
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let embed380rs = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${user.username}'s Main Car`)
    .setDescription("**Nismo 380RS Secret Car**")
    .setImage("https://conceptzperformance.com/items/14797/original/main.jpg")
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
  let embedr32gtr1 = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${user.username}'s Main Car`)
    .setDescription("**Nissan R32 GTR T1**")
    .setImage("https://cdn.discordapp.com/attachments/609858707118882826/637967636873084938/nissan_skyliner32_nuevo_motor.jpg")
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
  let embedr32gtr2 = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${user.username}'s Main Car`)
    .setDescription("**Nissan R32 GTR T2**")
    .setImage("https://cdn.discordapp.com/attachments/609858707118882826/637967686940360754/6acb4423fa151440f389f90beb34728c.jpg")
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let embedr32gtr3 = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${user.username}'s Main Car`)
    .setDescription("**Nissan R32 GTR T3**")
    .setImage("https://cdn.discordapp.com/attachments/609858707118882826/637967726463156224/11882425036_f3a3fb23df_b.jpg")
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
  let embedw81 = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${user.username}'s Main Car`)
    .setDescription("**Vector W8 (1989) T1**")
    .setImage("http://www.bestvectordownload.com/wp-content/uploads/2019/06/Vector-Car-Vector-Wiegert-Vector-W8-Twin-Turbo.jpg")
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
  let embedw82 = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${user.username}'s Main Car`)
    .setDescription("**Vector W8 (1989) T2**")
    .setImage("https://i.imgur.com/Or4SdiY.jpg")
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let embedw83 = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${user.username}'s Main Car`)
    .setDescription("**Vector W8 (1989) T3**")
    .setImage("https://cdn.motor1.com/images/mgl/mLRqo/s1/vector-w8.jpg")
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
  let embedstarlet1 = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${user.username}'s Main Car`)
    .setDescription("**Toyota Starlet (1995) T1**")
    .setImage("https://i.ytimg.com/vi/4jDdmOKmJrU/maxresdefault.jpg")
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
  let embedstarlet2 = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${user.username}'s Main Car`)
    .setDescription("**Toyota Starlet (1995) T2**")
    .setImage("https://rzpict1.blob.core.windows.net/images/480/autowereld.nl/RZCATWNL31830418/TOYOTA-STARLET-00.jpg")
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let embedstarlet3 = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${user.username}'s Main Car`)
    .setDescription("**Toyota Starlet (1995) T3**")
    .setImage("https://images.cdn.circlesix.co/image/1/700/0/uploads/posts/2017/12/5b2a7287537eb6ba176199454c804a2d.jpg")
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
   let embedxmasgolf = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${user.username}'s Main Car`)
    .setDescription("**Volkswagen Golf Christmas Special**")
    .setImage("https://img.drivemag.net/media/default/0001/27/thumb_26486_default_large.jpeg")
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
  if (car === null)
    return message.reply(
      "that user has not set any of their cars as their main one yet!"
    );

  if (`${car}` === "clio") {
    if (curlvl >= 25) return message.channel.send(embedclio3);

    if (curlvl <= 9) return message.channel.send(embedclio1);

    if (curlvl <= 24) return message.channel.send(embedclio2);
  }

  if (`${car}` === "evoix") {
    if (curlvl >= 25) return message.channel.send(embedevoix3);

    if (curlvl <= 9) return message.channel.send(embedevoix1);

    if (curlvl <= 24) return message.channel.send(embedevoix2);
  }

  if (`${car}` === "corsa") {
    if (curlvl >= 25) return message.channel.send(embedcorsa3);

    if (curlvl <= 9) return message.channel.send(embedcorsa1);

    if (curlvl <= 24) return message.channel.send(embedcorsa2);
  }

  if (`${car}` === "testarossa") {
    if (curlvl >= 25) return message.channel.send(embedtestarossa3);

    if (curlvl <= 9) return message.channel.send(embedtestarossa1);

    if (curlvl <= 24) return message.channel.send(embedtestarossa2);
  }

  if (`${car}` === "bora") {
    if (curlvl >= 25) return message.channel.send(embedbora3);

    if (curlvl <= 9) return message.channel.send(embedbora1);

    if (curlvl <= 24) return message.channel.send(embedbora2);
  }

  if (`${car}` === "brz") {
    if (curlvl >= 25) return message.channel.send(embedbrz3);

    if (curlvl <= 9) return message.channel.send(embedbrz1);

    if (curlvl <= 24) return message.channel.send(embedbrz2);
  }
  
  if (`${car}` === "r32gtr") {
    if (curlvl >= 25) return message.channel.send(embedr32gtr3);

    if (curlvl <= 9) return message.channel.send(embedr32gtr1);

    if (curlvl <= 24) return message.channel.send(embedr32gtr2);
  }

  if (`${car}` === "380rs") {
    message.channel.send(embed380rs);
  }
  
  if (`${car}` === "golfxmas") {
    message.channel.send(embedxmasgolf);
  }
  
  if (`${car}` === "w8") {
    if (curlvl >= 25) return message.channel.send(embedw83);

    if (curlvl <= 9) return message.channel.send(embedw81);

    if (curlvl <= 24) return message.channel.send(embedw82);
  }
  
  if (`${car}` === "starlet") {
    if (curlvl >= 25) return message.channel.send(embedstarlet3);

    if (curlvl <= 9) return message.channel.send(embedstarlet1);

    if (curlvl <= 24) return message.channel.send(embedstarlet2);
  }
  
};

module.exports.help = {
  name: "car"
};
