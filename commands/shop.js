const Discord = require("discord.js");
const db = require("quick.db");
const fs = require("fs");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
  
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if (!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }
  let prefix = prefixes[message.guild.id].prefixes;
  
  const emoji = bot.emojis.find(emoji => emoji.name === `vintagecoin`);
  const emojiob = bot.emojis.find(emoji => emoji.name === `ballbama`);
  const emojico = bot.emojis.find(emoji => emoji.name === `cok`);
  const emojitestarossa = bot.emojis.find(
    emoji => emoji.name === `testarossa2`
  );
  const emojibora = bot.emojis.find(emoji => emoji.name === `bora`);
  const emojibrz = bot.emojis.find(emoji => emoji.name === `brz`);
  const emojiclio = bot.emojis.find(emoji => emoji.name === `clio`);
  const emojicorsa = bot.emojis.find(emoji => emoji.name === `corsa`);
  const emojievo = bot.emojis.find(emoji => emoji.name === `evo`);
  const emojir32gtr = bot.emojis.find(emoji => emoji.name === `r32gtr`);
  const emojigolf = bot.emojis.find(emoji => emoji.name === `golfxmas`);
  const emojiw8 = bot.emojis.find(emoji => emoji.name === `vectorw8`);
  const emojistarlet = bot.emojis.find(emoji => emoji.name === `starlet`);
  
  const amount = args[2];

  const balance = db.fetch(`userBalance_${message.author.id}`);
  const obamos = db.fetch(`obamos_${message.author.id}`);
  const clio = db.fetch(`clio_${message.author.id}`);
  const evoix = db.fetch(`evoix_${message.author.id}`);
  const cocaine = db.fetch(`cocaine_${message.author.id}`);
  const corsa = db.fetch(`corsa_${message.author.id}`);
  const nsx = db.fetch(`nsx_${message.author.id}`);
  const testarossa = db.fetch(`testarossa_${message.author.id}`);
  const bora = db.fetch(`bora_${message.author.id}`);
  const brz = db.fetch(`brz_${message.author.id}`);
  const r32gtr = db.fetch(`r32gtr_${message.author.id}`);
  const golfxmas = db.fetch(`golfxmas_${message.author.id}`);
  const w8 = db.fetch(`w8_${message.author.id}`);
  const starlet = db.fetch(`starlet_${message.author.id}`);
  const bal = db.fetch(`userBalance_${message.author.id}`);

  let embed = new Discord.RichEmbed()
    .setTitle(`Item Shop (you have ${bal}${emoji})`)
    .setDescription(`Usage: ${prefix}shop <buy/sell> <item> <amount>`)
    .setColor("#ffa500")
    .addField(
      `Cocaine ${emojico} (cocaine)`,
      `Buy for: 60${emoji}/g | Sell for: 30${emoji}/g`
    )
    .addField(
      `Obamos ${emojiob} (obamos)`,
      `Buy for: 250${emoji} | Sell for: 125${emoji}`
    )
  .addField(
      `Toyota Starlet (1995) ${emojistarlet} (starlet)`,
      `Buy for: 1000${emoji} | Sell for: 500${emoji}`
    )
    .addField(
      `Volkswagen Bora (1999) ${emojibora} (bora)`,
      `Buy for: 4000${emoji} | Sell for: 2000${emoji}`
    )
    .addField(
      `2002 Opel Corsa ${emojicorsa} (corsa)`,
      `Buy for: 5000${emoji} | Sell for: 2500${emoji}`
    )
  .addField(
      `Nissan R32 GT-R ${emojir32gtr} (r32gtr)`,
      `Buy for: 20000${emoji} | Sell for: 10000${emoji}`
    )
    .addField(
      `Subaru BRZ ${emojibrz} (brz)`,
      `Buy for: 40000${emoji} | Sell for: 20000${emoji}`
    )
    .addField(
      `Renault Clio v6 with a Twin Turbo ${emojiclio} (clio)`,
      `Buy for: 60000${emoji} | Sell for: 30000${emoji}`
    )
    .addField(
      `Mitsubishi Lancer Evolution IX ${emojievo} (evoix)`,
      `Buy for: 80000${emoji} | Sell for: 40000${emoji}`
    )
    .addField(
      `Ferrari Testarossa (1986) ${emojitestarossa} (testarossa)`,
      `Buy for: 160000${emoji} | Sell for: 80000${emoji}`
    )
  .addField(
      `Vector W8 (1989) ${emojiw8} (w8)`,
      `Buy for: 440000${emoji} | Sell for: 220000${emoji}`
    )
    .addField(`Christmas Golf ${emojigolf} (golfxmas)`, `Buy for: - | Sell for: 200000${emoji}`)
    .setThumbnail(
      "https://cdn.glitch.com/ae3d8f57-6627-4730-920d-b6a465c0fa1b%2Fold_sex.png?1549720347259"
    )
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  if (!args[0]) return message.channel.send(embed);

  if (!args[1])
    return message.channel.send(
      "How about rechecking the item list? Use !shop to see the list."
    );

  if (args[0] === "buy") {
    if (amount.includes("-"))
      return message.channel.send("Nice try smartass...");
    if (args[1] === "obamos") {
      if (amount === "0") return message.channel.send("Hm...");
      if (amount === NaN) return message.channel.send("Hm...");
      if (!amount)
        return message.channel.send(
          "Please mention a valid number of that item to purchase!"
        );
      if (balance < 250 * amount)
        return message.channel.send(
          "Your balance is insufficient for this purchase!"
        );
      db.subtract(`userBalance_${message.author.id}`, 250 * amount);
      db.add(`obamos_${message.author.id}`, amount);
      message.channel.send(
        `Successfully bought ` +
          "**" +
          amount +
          "**" +
          ` ${emojiob} for ${amount * 250}${emoji}!`
      );
    }
    if (args[1] === "clio") {
      if (amount === "0") return message.channel.send("Hm...");
      if (amount === NaN) return message.channel.send("Hm...");
      if (!amount)
        return message.channel.send(
          "Please mention a valid number of that item to purchase!"
        );
      if (balance < 60000 * amount)
        return message.channel.send(
          "Your balance is insufficient for this purchase!"
        );
      db.subtract(`userBalance_${message.author.id}`, 60000 * amount);
      db.add(`clio_${message.author.id}`, amount);
      message.channel.send(
        `Successfully bought ` +
          "**" +
          amount +
          "**" +
          ` ${emojiclio} for ${amount * 60000}${emoji}!`
      );
    }
    if (args[1] === "r32gtr") {
      if (amount === "0") return message.channel.send("Hm...");
      if (amount === NaN) return message.channel.send("Hm...");
      if (!amount)
        return message.channel.send(
          "Please mention a valid number of that item to purchase!"
        );
      if (balance < 20000 * amount)
        return message.channel.send(
          "Your balance is insufficient for this purchase!"
        );
      db.subtract(`userBalance_${message.author.id}`, 20000 * amount);
      db.add(`r32gtr_${message.author.id}`, amount);
      message.channel.send(
        `Successfully bought ` +
          "**" +
          amount +
          "**" +
          ` ${emojir32gtr} for ${amount * 20000}${emoji}!`
      );
    }
    if (args[1] === "cocaine") {
      if (amount === "0") return message.channel.send("Hm...");
      if (amount === NaN) return message.channel.send("Hm...");
      if (!amount)
        return message.channel.send(
          "Please mention a valid number of that item to purchase!"
        );
      if (balance < 60 * amount)
        return message.channel.send(
          "Your balance is insufficient for this purchase!"
        );
      db.subtract(`userBalance_${message.author.id}`, 60 * amount);
      db.add(`cocaine_${message.author.id}`, amount);
      message.channel.send(
        `Successfully bought ` +
          "**" +
          amount +
          "g**" +
          ` of ${emojico} for ${amount * 60}${emoji}!`
      );
    }
    if (args[1] === "evoix") {
      if (amount === "0") return message.channel.send("Hm...");
      if (amount === NaN) return message.channel.send("Hm...");
      if (!amount)
        return message.channel.send(
          "Please mention a valid number of that item to purchase!"
        );
      if (balance < 80000 * amount)
        return message.channel.send(
          "Your balance is insufficient for this purchase!"
        );
      db.subtract(`userBalance_${message.author.id}`, 80000 * amount);
      db.add(`evoix_${message.author.id}`, amount);
      message.channel.send(
        `Successfully bought ` +
          "**" +
          amount +
          "**" +
          ` ${emojievo} for ${amount * 80000}${emoji}!`
      );
    }
    if (args[1] === "corsa") {
      if (amount === "0") return message.channel.send("Hm...");
      if (amount === NaN) return message.channel.send("Hm...");
      if (!amount)
        return message.channel.send(
          "Please mention a valid number of that item to purchase!"
        );
      if (balance < 5000 * amount)
        return message.channel.send(
          "Your balance is insufficient for this purchase!"
        );
      db.subtract(`userBalance_${message.author.id}`, 5000 * amount);
      db.add(`corsa_${message.author.id}`, amount);
      message.channel.send(
        `Successfully bought ` +
          "**" +
          amount +
          "**" +
          ` ${emojicorsa} for ${amount * 5000}${emoji}!`
      );
    }
    if (args[1] === "testarossa") {
      if (amount === "0") return message.channel.send("Hm...");
      if (amount === NaN) return message.channel.send("Hm...");
      if (!amount)
        return message.channel.send(
          "Please mention a valid number of that item to purchase!"
        );
      if (balance < 5000 * amount)
        return message.channel.send(
          "Your balance is insufficient for this purchase!"
        );
      db.subtract(`userBalance_${message.author.id}`, 160000 * amount);
      db.add(`testarossa_${message.author.id}`, amount);
      message.channel.send(
        `Successfully bought ` +
          "**" +
          amount +
          "**" +
          ` ${emojitestarossa} for ${amount * 160000}${emoji}!`
      );
    }
    if (args[1] === "bora") {
      if (amount === "0") return message.channel.send("Hm...");
      if (amount === NaN) return message.channel.send("Hm...");
      if (!amount)
        return message.channel.send(
          "Please mention a valid number of that item to purchase!"
        );
      if (balance < 5000 * amount)
        return message.channel.send(
          "Your balance is insufficient for this purchase!"
        );
      db.subtract(`userBalance_${message.author.id}`, 4000 * amount);
      db.add(`bora_${message.author.id}`, amount);
      message.channel.send(
        `Successfully bought ` +
          "**" +
          amount +
          "**" +
          ` ${emojibora} for ${amount * 4000}${emoji}!`
      );
    }
    if (args[1] === "brz") {
      if (amount === "0") return message.channel.send("Hm...");
      if (amount === NaN) return message.channel.send("Hm...");
      if (!amount)
        return message.channel.send(
          "Please mention a valid number of that item to purchase!"
        );
      if (balance < 40000 * amount)
        return message.channel.send(
          "Your balance is insufficient for this purchase!"
        );
      db.subtract(`userBalance_${message.author.id}`, 40000 * amount);
      db.add(`brz_${message.author.id}`, amount);
      message.channel.send(
        `Successfully bought ` +
          "**" +
          amount +
          "**" +
          ` ${emojibrz} for ${amount * 40000}${emoji}!`
      );
    }
    if (args[1] === "w8") {
      if (amount === "0") return message.channel.send("Hm...");
      if (amount === NaN) return message.channel.send("Hm...");
      if (!amount)
        return message.channel.send(
          "Please mention a valid number of that item to purchase!"
        );
      if (balance < 440000 * amount)
        return message.channel.send(
          "Your balance is insufficient for this purchase!"
        );
      db.subtract(`userBalance_${message.author.id}`, 440000 * amount);
      db.add(`w8_${message.author.id}`, amount);
      message.channel.send(
        `Successfully bought ` +
          "**" +
          amount +
          "**" +
          ` ${emojiw8} for ${amount * 440000}${emoji}!`
      );
    }
    if (args[1] === "starlet") {
      if (amount === "0") return message.channel.send("Hm...");
      if (amount === NaN) return message.channel.send("Hm...");
      if (!amount)
        return message.channel.send(
          "Please mention a valid number of that item to purchase!"
        );
      if (balance < 1000 * amount)
        return message.channel.send(
          "Your balance is insufficient for this purchase!"
        );
      db.subtract(`userBalance_${message.author.id}`, 1000 * amount);
      db.add(`starlet_${message.author.id}`, amount);
      message.channel.send(
        `Successfully bought ` +
          "**" +
          amount +
          "**" +
          ` ${emojistarlet} for ${amount * 1000}${emoji}!`
      );
    }
  }
  if (args[0] === "sell") {
    if (amount.includes("-"))
      return message.channel.send("Nice try smartass...");
    if (args[1] === "obamos") {
      if (obamos < amount)
        return message.channel.send(
          "You do not have that many obamos to sell..."
        );
      if (amount === "0") return message.channel.send("Hm...");
      if (amount === NaN) return message.channel.send("Hm...");
      if (!amount)
        return message.channel.send(
          "Please mention a valid number of that item to sell!"
        );
      db.add(`userBalance_${message.author.id}`, 125 * amount);
      db.subtract(`obamos_${message.author.id}`, amount);
      message.channel.send(
        `Successfully sold ` +
          "**" +
          amount +
          "**" +
          ` ${emojiob} for ${amount * 125}${emoji}!`
      );
    }
    if (args[1] === "clio") {
      if (clio < amount)
        return message.channel.send(
          "You do not have that many clios to sell..."
        );
      if (amount === "0") return message.channel.send("Hm...");
      if (amount === NaN) return message.channel.send("Hm...");
      if (!amount)
        return message.channel.send(
          "Please mention a valid number of that item to sell!"
        );
      db.add(`userBalance_${message.author.id}`, 30000 * amount);
      db.subtract(`clio_${message.author.id}`, amount);
      message.channel.send(
        `Successfully sold ` +
          "**" +
          amount +
          "**" +
          ` ${emojiclio} for ${amount * 30000}${emoji}!`
      );
    }
    if (args[1] === "r32gtr") {
      if (r32gtr < amount)
        return message.channel.send(
          "You do not have that many r32 gt-r's to sell..."
        );
      if (amount === "0") return message.channel.send("Hm...");
      if (amount === NaN) return message.channel.send("Hm...");
      if (!amount)
        return message.channel.send(
          "Please mention a valid number of that item to sell!"
        );
      db.add(`userBalance_${message.author.id}`, 10000 * amount);
      db.subtract(`r32gtr_${message.author.id}`, amount);
      message.channel.send(
        `Successfully sold ` +
          "**" +
          amount +
          "**" +
          ` ${emojir32gtr} for ${amount * 10000}${emoji}!`
      );
    }
    if (args[1] === "cocaine") {
      if (cocaine < amount)
        return message.channel.send(
          "You do not have that much cocaine to sell..."
        );
      if (amount === "0") return message.channel.send("Hm...");
      if (amount === NaN) return message.channel.send("Hm...");
      if (!amount)
        return message.channel.send(
          "Please mention a valid number of that item to sell!"
        );
      db.add(`userBalance_${message.author.id}`, 30 * amount);
      db.subtract(`cocaine_${message.author.id}`, amount);
      message.channel.send(
        `Successfully sold ` +
          "**" +
          amount +
          "g**" +
          ` of ${emojico} for ${amount * 30}${emoji}!`
      );
    }
    if (args[1] === "evoix") {
      if (evoix < amount)
        return message.channel.send(
          "You do not have that many evo IX's to sell..."
        );
      if (amount === "0") return message.channel.send("Hm...");
      if (amount === NaN) return message.channel.send("Hm...");
      if (!amount)
        return message.channel.send(
          "Please mention a valid number of that item to sell!"
        );
      db.add(`userBalance_${message.author.id}`, 40000 * amount);
      db.subtract(`evoix_${message.author.id}`, amount);
      message.channel.send(
        `Successfully sold ` +
          "**" +
          amount +
          "**" +
          ` ${emojievo} for ${amount * 40000}${emoji}!`
      );
    }
    if (args[1] === "corsa") {
      if (corsa < amount)
        return message.channel.send(
          "You do not have that many corsas to sell..."
        );
      if (amount === "0") return message.channel.send("Hm...");
      if (amount === NaN) return message.channel.send("Hm...");
      if (!amount)
        return message.channel.send(
          "Please mention a valid number of that item to sell!"
        );
      db.add(`userBalance_${message.author.id}`, 2500 * amount);
      db.subtract(`corsa_${message.author.id}`, amount);
      message.channel.send(
        `Successfully sold ` +
          "**" +
          amount +
          "**" +
          ` ${emojicorsa} for ${amount * 2500}${emoji}!`
      );
    }
    if (args[1] === "testarossa") {
      if (corsa < amount)
        return message.channel.send(
          "You do not have that many testarossas to sell..."
        );
      if (amount === "0") return message.channel.send("Hm...");
      if (amount === NaN) return message.channel.send("Hm...");
      if (!amount)
        return message.channel.send(
          "Please mention a valid number of that item to sell!"
        );
      db.add(`userBalance_${message.author.id}`, 80000 * amount);
      db.subtract(`testarossa_${message.author.id}`, amount);
      message.channel.send(
        `Successfully sold ` +
          "**" +
          amount +
          "**" +
          ` ${emojitestarossa} for ${amount * 80000}${emoji}!`
      );
    }
    if (args[1] === "bora") {
      if (bora < amount)
        return message.channel.send(
          "You do not have that many boras to sell..."
        );
      if (amount === "0") return message.channel.send("Hm...");
      if (amount === NaN) return message.channel.send("Hm...");
      if (!amount)
        return message.channel.send(
          "Please mention a valid number of that item to sell!"
        );
      db.add(`userBalance_${message.author.id}`, 2000 * amount);
      db.subtract(`bora_${message.author.id}`, amount);
      message.channel.send(
        `Successfully sold ` +
          "**" +
          amount +
          "**" +
          ` ${emojibora} for ${amount * 2000}${emoji}!`
      );
    }
    if (args[1] === "brz") {
      if (brz < amount)
        return message.channel.send(
          "You do not have that many brz's to sell..."
        );
      if (amount === "0") return message.channel.send("Hm...");
      if (amount === NaN) return message.channel.send("Hm...");
      if (!amount)
        return message.channel.send(
          "Please mention a valid number of that item to sell!"
        );
      db.add(`userBalance_${message.author.id}`, 20000 * amount);
      db.subtract(`brz_${message.author.id}`, amount);
      message.channel.send(
        `Successfully sold ` +
          "**" +
          amount +
          "**" +
          ` ${emojibrz} for ${amount * 20000}${emoji}!`
      );
    }
    if (args[1] === "golfxmas") {
      if (golfxmas < amount)
        return message.channel.send(
          "You do not have that many xmas golf's to sell..."
        );
      if (amount === "0") return message.channel.send("Hm...");
      if (amount === NaN) return message.channel.send("Hm...");
      if (!amount)
        return message.channel.send(
          "Please mention a valid number of that item to sell!"
        );
      db.add(`userBalance_${message.author.id}`, 200000 * amount);
      db.subtract(`golfxmas_${message.author.id}`, amount);
      message.channel.send(
        `Successfully sold ` +
          "**" +
          amount +
          "**" +
          ` ${emojigolf} for ${amount * 200000}${emoji}!`
      );
    }
    if (args[1] === "w8") {
      if (w8 < amount)
        return message.channel.send(
          "You do not have that many w8's to sell..."
        );
      if (amount === "0") return message.channel.send("Hm...");
      if (amount === NaN) return message.channel.send("Hm...");
      if (!amount)
        return message.channel.send(
          "Please mention a valid number of that item to sell!"
        );
      db.add(`userBalance_${message.author.id}`, 220000 * amount);
      db.subtract(`w8_${message.author.id}`, amount);
      message.channel.send(
        `Successfully sold ` +
          "**" +
          amount +
          "**" +
          ` ${emojiw8} for ${amount * 220000}${emoji}!`
      );
    }
    if (args[1] === "starlet") {
      if (starlet < amount)
        return message.channel.send(
          "You do not have that many starlet's to sell..."
        );
      if (amount === "0") return message.channel.send("Hm...");
      if (amount === NaN) return message.channel.send("Hm...");
      if (!amount)
        return message.channel.send(
          "Please mention a valid number of that item to sell!"
        );
      db.add(`userBalance_${message.author.id}`, 500 * amount);
      db.subtract(`starlet_${message.author.id}`, amount);
      message.channel.send(
        `Successfully sold ` +
          "**" +
          amount +
          "**" +
          ` ${emojistarlet} for ${amount * 500}${emoji}!`
      );
    }
  }
};

module.exports.help = {
  name: "shop"
};