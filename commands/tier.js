const Discord = require("discord.js");
const db = require("quick.db");
const botconfig = require("../botconfig.json");
let xp = require("../xp.json");

module.exports.run = async (bot, message, args, tools) => {
  const emoji = bot.emojis.find(emoji => emoji.name === `vintagecoin`);

  if (!args[0]) return message.reply("please mention a valid tier from 1-10.");

  let balance = await db.fetch(`userBalance_${message.author.id}`);

  if (balance === null) balance = 0;

  if (!xp[message.author.id]) {
    message.reply("You do not have any xp dummy!");
  }

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvlXp = curlvl * 300;
  let difference = nxtLvlXp - curxp;

  let tiers = await db.fetch(`userTier_${message.author.id}`, 1);

  if (args[0] === "1") {
    if (tiers === 1) return message.channel.send("You are already in this tier.");

    if (tiers === null) {
      if (curxp < 3000)
        return message.channel.send(
          `Sorry, but your level is too low for that! (you need ${3000 -
            curxp} more xp)`
        );
      if (balance < 1000)
        return message.channel.send(
          `Sorry, but your balance is insufficient for that! (you need ${1000 -
            balance} more ${emoji})`
        );

      db.subtract(`userBalance_${message.author.id}`, 1000);
      xp[message.author.id].xp = curxp - 3000;
      xp[message.author.id].level = curlvl - 10;

      db.add(`userTier_${message.author.id}`, 1);

      message.channel.send(
        `Successfully joined Tier 1 (-10 lvl, -3000 xp, -1000${emoji})`
      );
    }
  }

  if (args[0] === "2") {
    if (tiers === 2) return message.channel.send("You are already in this tier.");

    if (tiers === 1) {
      if (curxp < 6000)
        return message.channel.send(
          `Sorry, but your level is too low for that! (you need ${6000 -
            curxp} more xp)`
        );
      if (balance < 5000)
        return message.channel.send(
          `Sorry, but your balance is insufficient for that! (you need ${5000 -
            balance} more ${emoji})`
        );

      db.subtract(`userBalance_${message.author.id}`, 5000);
      xp[message.author.id].xp = curxp - 6000;
      xp[message.author.id].level = curlvl - 20;

      db.add(`userTier_${message.author.id}`, 1);

      message.channel.send(
        `Successfully joined Tier 2 (-20 lvl, -6000 xp, -5000${emoji})`
      );
    }
  }

  if (args[0] === "3") {
    if (tiers === 3) return message.channel.send("You are already in this tier.");

    if (tiers === 2) {
      if (curxp < 9000)
        return message.channel.send(
          `Sorry, but your level is too low for that! (you need ${9000 -
            curxp} more xp)`
        );
      if (balance < 10000)
        return message.channel.send(
          `Sorry, but your balance is insufficient for that! (you need ${10000 -
            balance} more ${emoji})`
        );

      db.subtract(`userBalance_${message.author.id}`, 10000);
      xp[message.author.id].xp = curxp - 9000;
      xp[message.author.id].level = curlvl - 30;

      db.add(`userTier_${message.author.id}`, 1);

      message.channel.send(
        `Successfully joined Tier 3 (-30 lvl, -9000 xp, -10000${emoji})`
      );
    }
  }

  if (args[0] === "4") {
    if (tiers === 4) return message.channel.send("You are already in this tier.");

    if (tiers === 3) {
      if (curxp < 12000)
        return message.channel.send(
          `Sorry, but your level is too low for that! (you need ${12000 -
            curxp} more xp)`
        );
      if (balance < 20000)
        return message.channel.send(
          `Sorry, but your balance is insufficient for that! (you need ${20000 -
            balance} more ${emoji})`
        );

      db.subtract(`userBalance_${message.author.id}`, 20000);
      xp[message.author.id].xp = curxp - 12000;
      xp[message.author.id].level = curlvl - 40;

      db.add(`userTier_${message.author.id}`, 1);

      message.channel.send(
        `Successfully joined Tier 4 (-40 lvl, -12000 xp, -20000${emoji})`
      );
    }
  }

  if (args[0] === "5") {
    if (tiers === 5) return message.channel.send("You are already in this tier.");

    if (tiers === 4) {
      if (curxp < 15000)
        return message.channel.send(
          `Sorry, but your level is too low for that! (you need ${15000 -
            curxp} more xp)`
        );
      if (balance < 40000)
        return message.channel.send(
          `Sorry, but your balance is insufficient for that! (you need ${40000 -
            balance} more ${emoji})`
        );

      db.subtract(`userBalance_${message.author.id}`, 40000);
      xp[message.author.id].xp = curxp - 15000;
      xp[message.author.id].level = curlvl - 50;

      db.add(`userTier_${message.author.id}`, 1);

      message.channel.send(
        `Successfully joined Tier 5 (-50 lvl, -15000 xp, -40000${emoji})`
      );
    }
  }
  if (args[0] === "6") {
    if (tiers === 6) return message.channel.send("You are already in this tier.");

    if (tiers === 5) {
      if (curxp < 18000)
        return message.channel.send(
          `Sorry, but your level is too low for that! (you need ${18000 -
            curxp} more xp)`
        );
      if (balance < 80000)
        return message.channel.send(
          `Sorry, but your balance is insufficient for that! (you need ${80000 -
            balance} more ${emoji})`
        );

      db.subtract(`userBalance_${message.author.id}`, 80000);
      xp[message.author.id].xp = curxp - 18000;
      xp[message.author.id].level = curlvl - 60;

      db.add(`userTier_${message.author.id}`, 1);

      message.channel.send(
        `Successfully joined Tier 6 (-60 lvl, -18000 xp, -80000${emoji})`
      );
    }
  }
  if (args[0] === "7") {
    if (tiers === 7) return message.channel.send("You are already in this tier.");

    if (tiers === 6) {
      if (curxp < 21000)
        return message.channel.send(
          `Sorry, but your level is too low for that! (you need ${21000 -
            curxp} more xp)`
        );
      if (balance < 160000)
        return message.channel.send(
          `Sorry, but your balance is insufficient for that! (you need ${160000 -
            balance} more ${emoji})`
        );

      db.subtract(`userBalance_${message.author.id}`, 160000);
      xp[message.author.id].xp = curxp - 21000;
      xp[message.author.id].level = curlvl - 70;

      db.add(`userTier_${message.author.id}`, 1);

      message.channel.send(
        `Successfully joined Tier 7 (-70 lvl, -21000 xp, -160000${emoji})`
      );
    }
  }
  if (args[0] === "8") {
    if (tiers === 8) return message.channel.send("You are already in this tier.");

    if (tiers === 7) {
      if (curxp < 24000)
        return message.channel.send(
          `Sorry, but your level is too low for that! (you need ${24000 -
            curxp} more xp)`
        );
      if (balance < 320000)
        return message.channel.send(
          `Sorry, but your balance is insufficient for that! (you need ${320000 -
            balance} more ${emoji})`
        );

      db.subtract(`userBalance_${message.author.id}`, 320000);
      xp[message.author.id].xp = curxp - 24000;
      xp[message.author.id].level = curlvl - 80;

      db.add(`userTier_${message.author.id}`, 1);

      message.channel.send(
        `Successfully joined Tier 8 (-80 lvl, -24000 xp, -320000${emoji})`
      );
    }
  }
  if (args[0] === "9") {
    if (tiers === 9) return message.channel.send("You are already in this tier.");

    if (tiers === 8) {
      if (curxp < 27000)
        return message.channel.send(
          `Sorry, but your level is too low for that! (you need ${27000 -
            curxp} more xp)`
        );
      if (balance < 640000)
        return message.channel.send(
          `Sorry, but your balance is insufficient for that! (you need ${640000 -
            balance} more ${emoji})`
        );

      db.subtract(`userBalance_${message.author.id}`, 640000);
      xp[message.author.id].xp = curxp - 27000;
      xp[message.author.id].level = curlvl - 90;

      db.add(`userTier_${message.author.id}`, 1);

      message.channel.send(
        `Successfully joined Tier 9 (-90 lvl, -27000 xp, -640000${emoji})`
      );
    }
  }
  if (args[0] === "10") {
    if (tiers === 10) return message.channel.send("You are already in this tier.");

    if (tiers === 9) {
      if (curxp < 30000)
        return message.channel.send(
          `Sorry, but your level is too low for that! (you need ${30000 -
            curxp} more xp)`
        );
      if (balance < 1280000)
        return message.channel.send(
          `Sorry, but your balance is insufficient for that! (you need ${1280000 -
            balance} more ${emoji})`
        );

      db.subtract(`userBalance_${message.author.id}`, 1280000);
      xp[message.author.id].xp = curxp - 30000;
      xp[message.author.id].level = curlvl - 100;

      db.add(`userTier_${message.author.id}`, 1);

      message.channel.send(
        `Successfully joined Tier 10 (-100 lvl, -30000 xp, -1280000 ${emoji})`
      );
    }
  }
  if (tiers > 10) return;
};

module.exports.help = {
  name: "tier"
};
