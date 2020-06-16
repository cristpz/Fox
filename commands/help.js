const Discord = require("discord.js");
const fs = require("fs");
const botconfig = require("../botconfig.json");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  const nsfw = db.fetch(`nsfw_${message.guild.id}`);
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if (!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }
  let prefix = prefixes[message.guild.id].prefixes;

  let one = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "5050")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "5050 <amount of vintage coins to bet>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let two = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "8ball")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "8ball <full question>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let three = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "addrole")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "addrole <member> <role>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let four = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "analfuck")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "analfuck <user>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let five = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "anime")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "anime <title/part of the title>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let six = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "avatar")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "avatar <member (optional)>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
  let badges = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "badges")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "badges <buy/sell/help> <badge>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let seven = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "baka")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "baka")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let eight = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "balance")
    .addField("Aliases", "bal")
    .addField("Usage", prefix + "balance <member (optional)>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let nine = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "ban")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "ban <member> <reason>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
  let bite = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "bite")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "bite <member>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let ten = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "banner")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "banner <list/image link> <member (optional)>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let eleven = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "bj (blowjob)")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "bj <member>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let twelve = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "bloke")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "bloke <member (optional)>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let thirteen = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "botowner")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "botowner")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let fourteen = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "brazil")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "brazil <member (optional)")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let hundredtwentyeight = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "car")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "car <member (optional)>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let fifteen = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "cat")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "cat")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let sixteen = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "cgm (cat girl meme)")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "cgm")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let hundredthirtytwo = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "changelog")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "changelog")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let seventeen = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "chanlist")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "chanlist")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let eighteen = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "chat")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "chat <text>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let nineteen = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "cheers")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "cheers")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let twenty = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "clear")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "clear <number of messages>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let twentyone = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "coinflip")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "coinflip")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let twentytwo = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "csgo")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "csgo <steamid64/steamurl>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let twentythree = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "cuddle")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "cuddle <member>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let twentyfour = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "cum")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "cum <member (optional)")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let twentyfive = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "daily")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "daily")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let twentysix = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "define")
    .addField("Aliases", "n/a")
    .addField(
      "Usage",
      prefix +
        "define <word (separate words using underscores e.g: word1_word2)>"
    )
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
  let divorce = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "divorce")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "divorce <member>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let twentyseven = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "dog")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "dog")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let twentyeight = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "don (double or nothing)")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "don <amount of vintage coins to bet>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
  let drag = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "drag (race)")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "race <amount of vintage coins to bet> <member>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let twentynine = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "elon")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "elon <text>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let thirty = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "emotelist")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "emotelist")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let thirtyone = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "fact")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "fact")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let thirtytwo = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "feed")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "feed <member>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let thirtythree = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "feet")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "feet")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let thirtyfour = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "femdom (feminine domination)")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "femdom <member>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let thirtyfive = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "fox")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "fox")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let thirtysix = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "fuck")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "fuck <member>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let thirtyseven = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "gasmoji (gasm emoji)")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "gasmoji")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let thirtyeight = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "generateavatar")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "generateavatar")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let thirtynine = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "generatewaifu")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "generatewaifu")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let forty = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "generatewp (generate wallpaper)")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "generatewp")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let fortyone = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "getemote")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "getemote <custom emote name>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let fortytwo = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "gift")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "gift <item> <member> <amount>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let fortythree = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "google")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "google <search text>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let fortyfour = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "hello")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "hello")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let fortyfive = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "help")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "help <command name (optional)>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let fortysix = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "hentai")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "hentai")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let fortyseven = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "hentaigif")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "hentaigif")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
  let hide = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "hide")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "hide")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let fortyeight = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "hug")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "hug <member>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let fortynine = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "info")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "info")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let fifty = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "invite")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "invite")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let fiftyone = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "kick")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "kick <member> <reason>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let fiftytwo = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "kiss")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "kiss <member>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let fiftythree = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "kitsune (fox girl)")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "kitsune")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let laugh = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "laugh")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "laugh")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
  let fiftyfour = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "level")
    .addField("Aliases", "lvl")
    .addField("Usage", prefix + "level <member (optional)>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let fiftyfive = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "lewd")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "lewd <member>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let fiftysix = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "lewdholo (NSFW holo)")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "lewdholo")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let fiftyseven = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "lewdkitsune (NSFW fox girl)")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "lewdkitsune")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let fiftyeight = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "lewdneko (NSFW cat girl)")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "lewdneko")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let fiftynine = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "lewdtrap (NSFW trap)")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "lewdtrap")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let sixty = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "lick")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "lick <member>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let sixtyone = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "licpus (lick pussy)")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "licpus <member>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let sixtytwo = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "lizard")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "lizard")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let sixtythree = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "lockdown")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "lockdown <time (in seconds)>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
  let love = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "love")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "love <member>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let sixtyfour = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "mal (my anime list)")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "mal <username>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
  let marry = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "marry")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "marry <member>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let sixtyfive = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "meme")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "meme <1-10 (optional)>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let sixtysix = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "motivate")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "motivate")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let sixtyseven = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "music")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "music")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let sixtyeight = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "neko (cat girl)")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "neko")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let sixtynine = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "nom")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "nom <member>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let seventy = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "nsfw")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "nsfw <on/off>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let seventyone = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "nsfwoff")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "nsfwoff")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let seventytwo = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "nsfwon")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "nsfwon")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let seventythree = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "nsfwtake")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "nsfwtake")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let seventyfour = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "oi")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "oi <member (optional)>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
  let options = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "options")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "options <help>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
  let seventyfive = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "osulatest (latest play)")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "osulatest <username>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let seventysix = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "osurecent (all recent plays)")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "osurecent <username>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let seventyseven = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "osu (osu user stats)")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "osu <help/0-3> <username>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let seventyeight = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "owoify")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "owoify <text>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let seventynine = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "pat")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "pat <member>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let eighty = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "pay")
    .addField("Aliases", "n/a")
    .addField(
      "Usage",
      prefix + "pay <member> <amount of vintage coins to give>"
    )
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let eightyone = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "pick")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "pick <choice 1> <choice 2>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let eightytwo = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "ping")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "ping")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let eightythree = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "poke")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "poke <member>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let eightyfour = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "poll")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "poll <reason>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let eightyfive = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "pope")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "pope <text>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let eightysix = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "ppsize")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "ppsize")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let eightyseven = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "prefix")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "prefix <custom prefix>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let eightyeight = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "profile")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "profile <member (optional)>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
  let punch = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "punch")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "punch <member>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let eightynine = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "rate")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "rate <something to rate>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let ninety = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "ratewaifu")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "ratewaifu <waifu to rate>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let hundredtwentynine = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "reddit (single post Reddit search)")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "reddit <subreddit name>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let ninetyone = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "removerole")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "removerole <member> <role>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let ninetytwo = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "rep")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "rep <member>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let ninetythree = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "report")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "report <member> <reason>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let hundredthirtyone = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "rim")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "rim <member (optional)>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let ninetyfour = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "rolelist")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "rolelist")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let ninetyfive = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "roll")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "roll")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let ninetysix = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "russia")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "russia <member (optional)>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let ninetyseven = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "say")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "say <text>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let hundredtwentyfive = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "screenshot")
    .addField("Aliases", "ss")
    .addField("Usage", prefix + "screenshot <text>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let ninetyeight = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "server")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "server")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let ninetynine = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "serverinfo")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "serverinfo")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let hundredtwentysix = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "setcar")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "setcar <car>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let hundredtwentyseven = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "setnote")
    .addField("Aliases", "ss")
    .addField("Usage", prefix + "setnote <text>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let hundred = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "shibe")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "shibe")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
  let ship = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "ship")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "ship <member>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let hundredone = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "shitpost")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "shitpost <1-10 (optional>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let hundredtwo = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "shop")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "shop <help/buy/sell> <amount (optional)>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let hundredthree = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "slap")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "slap <member>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let hundredfour = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "smug")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "smug")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let hundredfive = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "spank")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "spank <member>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let hundredsix = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "spotify")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "spotify <member (optional)>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let hundredseven = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "suggest")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "suggest <suggestion>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let hundredeight = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "suicide")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "suicide <member (optional)>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let think = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "think")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "think")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
  let hundrednine = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "tickle")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "tickle <member>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
  let tidfuck = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "tidfuck")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "tidfuck <member>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let hundredten = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "tidsize (tiddies size)")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "tidsize")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let hundredeleven = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "tier")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "tier <1-10>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let hundredtwelve = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "tierinfo")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "tierinfo")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let hundredthirteen = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "tits")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "tits")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let hundredfourteen = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "trump")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "trump <text>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
  let tummy = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "tummy")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "tummy")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let hundredfifteen = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "twitter")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "twitter <username>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let hundredsixteen = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "userinfo")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "userinfo <member (optional)>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let userinfoid = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "userinfoid")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "userinfoid <user id>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
  let hundredseventeen = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "usercount")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "usercount")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let hundredeighteen = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "votekick")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "votekick <member>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let hundrednineteen = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "wank")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "wank <member (optional)>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let hundredtwenty = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "website")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "website")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let hundredtwentyone = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "why")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "why")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let hundredtwentytwo = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "work")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "work")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let hundredtwentythree = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "yn (yes or no)")
    .addField("Aliases", "na")
    .addField("Usage", prefix + "yn <question>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let hundredthirty = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "youtube (single video Youtube search)")
    .addField("Aliases", "yt")
    .addField("Usage", prefix + "youtube <video title>")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let hundredtwentyfour = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "yuri")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "yuri")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
  let leaderboard = new Discord.RichEmbed()
    .setColor("#ffa500")
    .addField("Command Name", "leaderboard")
    .addField("Aliases", "n/a")
    .addField("Usage", prefix + "leaderboard")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let bicon = bot.user.displayAvatarURL;

  let botembed = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setThumbnail(bicon)
    .addField("Command Count", "145 commands, fully loaded")
    .addField(
      "Quick Tip!",
      "You can now use `" +
        prefix +
        "help <command name>` to see more info about a command."
    )
  .addBlankField()
    .addField(
      "Fun [53]",
      " `8ball` `cat` `dog` `google` `pick` `rate` `ratewaifu` `neko` `generateavatar` `yn` `lizard` `gasmoji` `coinflip` `define` `motivate` `meme` `shitpost` `roll` `anime` `generatewp` `why` `fact` `owoify` `generatewaifu` `ppsize` `tidsize` `mal` `osuS` `osurecent` `osulatest` `shibe` `fox` `twitter` `spotify` `cheers` `cgm` `chat` `kitsune` `say` `banner` `suicide` `trump` `elon` `pope` `brazil` `russia` `oi` `bloke` `screenshot` `reddit` `youtube` `rim` `ship` "
    )
    .addField(
      "Actions [18]",
      " `slap` `pat` `hug` `cuddle` `kiss` `smug` `poke` `feed` `tickle` `nom` `lick` `baka` `bite` `punch` `love` `think` `laugh` `hide` "
    )
    .addField(
      "Economy [21]",
      " `profile` `shop` `gift` `bal/balance` `lvl/level` `pay` `daily` `work` `rep` `5050` `don` `tier` `tierinfo` `car` `setcar` `setnote` `marry` `divorce` `drag` `badges` `leaderboard` "
    )
    .addField(
      "Utility [13]",
      " `nsfw` `changelog` `report` `help` `avatar` `serverinfo` `rolelist` `chanlist` `emotelist` `userinfo` `userinfoid` `getemote (could be buggy)` `options` "
    )
    .addField(
      "NSFW [21]",
      " `lewdneko` `lewdtrap` `fuck` `hentai` `hentaigif` `generatewp` `spank` `bj` `lewdholo` `lewdkitsune` `feet` `lewd` `analfuck` `femdom` `wank` `boobs` `yuri` `cum` `licpus` `tummy` `tidfuck` "
    )
    .addField(
      "Moderation [8]",
      " `kick` `ban` `addrole` `removerole` `votekick` `clear` `lockdown` `prefix` "
    )
    .addField(
      "Miscellaneous [11]",
      " `invite` `music` `ping` `info` `hello` `botowner` `usercount` `suggest` `server` `website` `poll` "
    )
  .addBlankField()
  .addField(
      `**Changelog** (v2.10.4)`,
      `\`\`\`diff
++ p!leaderboard
\`\`\``)
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let botembednolewd = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setThumbnail(bicon)
    .addField("Command Count", "145 commands, fully loaded")
    .addField(
      "Quick Tip!",
      "You can now use `" +
        prefix +
        "help <command name>` to see more info about a command."
    )
  .addBlankField()
    .addField(
      "Fun [53]",
      " `8ball` `cat` `dog` `google` `pick` `rate` `ratewaifu` `neko` `generateavatar` `yn` `lizard` `gasmoji` `coinflip` `define` `motivate` `meme` `shitpost` `roll` `anime` `generatewp` `why` `fact` `owoify` `generatewaifu` `ppsize` `tidsize` `mal` `osuS` `osurecent` `osulatest` `shibe` `fox` `twitter` `spotify` `cheers` `cgm` `chat` `kitsune` `say` `banner` `suicide` `trump` `elon` `pope` `brazil` `russia` `oi` `bloke` `screenshot` `reddit` `youtube` `rim` `ship` "
    )
    .addField(
      "Actions [18]",
      " `slap` `pat` `hug` `cuddle` `kiss` `smug` `poke` `feed` `tickle` `nom` `lick` `baka` `bite` `punch` `love` `think` `laugh` `hide` "
    )
    .addField(
      "Economy [21]",
      " `profile` `shop` `gift` `bal/balance` `lvl/level` `pay` `daily` `work` `rep` `5050` `don` `tier` `tierinfo` `car` `setcar` `setnote` `marry` `divorce` `drag` `badges` `leaderboard` "
    )
    .addField(
      "Utility [13]",
      " `nsfw` `changelog` `report` `help` `avatar` `serverinfo` `rolelist` `chanlist` `emotelist` `userinfo` `userinfoid` `getemote (could be buggy)` `options` "
    )
    .addField(
      "Moderation [8]",
      " `kick` `ban` `addrole` `removerole` `votekick` `clear` `lockdown` `prefix` "
    )
    .addField(
      "Miscellaneous [11]",
      " `invite` `music` `ping` `info` `hello` `botowner` `usercount` `suggest` `server` `website` `poll` "
    )
  .addBlankField()
  .addField(
      `**Changelog** (v2.10.4)`,
      `\`\`\`diff
++ p!leaderboard
\`\`\``)
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  if (args[0] === "5050") return message.channel.send(one);
  if (args[0] === "8ball") return message.channel.send(two);
  if (args[0] === "addrole") return message.channel.send(three);
  if (args[0] === "analfuck") return message.channel.send(four);
  if (args[0] === "anime") return message.channel.send(five);
  if (args[0] === "avatar") return message.channel.send(six);
  if (args[0] === "baka") return message.channel.send(seven);
  if (args[0] === "bal") return message.channel.send(eight);
  if (args[0] === "balance") return message.channel.send(eight);
  if (args[0] === "ban") return message.channel.send(nine);
  if (args[0] === "banner") return message.channel.send(ten);
  if (args[0] === "bj") return message.channel.send(eleven);
  if (args[0] === "bloke") return message.channel.send(twelve);
  if (args[0] === "botowner") return message.channel.send(thirteen);
  if (args[0] === "brazil") return message.channel.send(fourteen);
  if (args[0] === "cat") return message.channel.send(fifteen);
  if (args[0] === "cgm") return message.channel.send(sixteen);
  if (args[0] === "chanlist") return message.channel.send(seventeen);
  if (args[0] === "chat") return message.channel.send(eighteen);
  if (args[0] === "cheers") return message.channel.send(nineteen);
  if (args[0] === "clear") return message.channel.send(twenty);
  if (args[0] === "coinflip") return message.channel.send(twentyone);
  if (args[0] === "csgo") return message.channel.send(twentytwo);
  if (args[0] === "cuddle") return message.channel.send(twentythree);
  if (args[0] === "cum") return message.channel.send(twentyfour);
  if (args[0] === "daily") return message.channel.send(twentyfive);
  if (args[0] === "define") return message.channel.send(twentysix);
  if (args[0] === "dog") return message.channel.send(twentyseven);
  if (args[0] === "don") return message.channel.send(twentyeight);
  if (args[0] === "elon") return message.channel.send(twentynine);
  if (args[0] === "emotelist") return message.channel.send(thirty);
  if (args[0] === "fact") return message.channel.send(thirtyone);
  if (args[0] === "feed") return message.channel.send(thirtytwo);
  if (args[0] === "feet") return message.channel.send(thirtythree);
  if (args[0] === "femdom") return message.channel.send(thirtyfour);
  if (args[0] === "fox") return message.channel.send(thirtyfive);
  if (args[0] === "fuck") return message.channel.send(thirtysix);
  if (args[0] === "gasmoji") return message.channel.send(thirtyseven);
  if (args[0] === "generateavatar") return message.channel.send(thirtyeight);
  if (args[0] === "generatewaifu") return message.channel.send(thirtynine);
  if (args[0] === "generatewp") return message.channel.send(forty);
  if (args[0] === "getemote") return message.channel.send(fortyone);
  if (args[0] === "gift") return message.channel.send(fortytwo);
  if (args[0] === "google") return message.channel.send(fortythree);
  if (args[0] === "hello") return message.channel.send(fortyfour);
  if (args[0] === "help") return message.channel.send(fortyfive);
  if (args[0] === "hentai") return message.channel.send(fortysix);
  if (args[0] === "hentaigif") return message.channel.send(fortyseven);
  if (args[0] === "hug") return message.channel.send(fortyeight);
  if (args[0] === "info") return message.channel.send(fortynine);
  if (args[0] === "invite") return message.channel.send(fifty);
  if (args[0] === "kick") return message.channel.send(fiftyone);
  if (args[0] === "kiss") return message.channel.send(fiftytwo);
  if (args[0] === "kitsune") return message.channel.send(fiftythree);
  if (args[0] === "lvl") return message.channel.send(fiftyfour);
  if (args[0] === "level") return message.channel.send(fiftyfour);
  if (args[0] === "lewd") return message.channel.send(fiftyfive);
  if (args[0] === "lewdholo") return message.channel.send(fiftysix);
  if (args[0] === "lewdkitsune") return message.channel.send(fiftyseven);
  if (args[0] === "lewdneko") return message.channel.send(fiftyeight);
  if (args[0] === "lewdtrap") return message.channel.send(fiftynine);
  if (args[0] === "lick") return message.channel.send(sixty);
  if (args[0] === "licpus") return message.channel.send(sixtyone);
  if (args[0] === "lizard") return message.channel.send(sixtytwo);
  if (args[0] === "lockdown") return message.channel.send(sixtythree);
  if (args[0] === "mal") return message.channel.send(sixtyfour);
  if (args[0] === "meme") return message.channel.send(sixtyfive);
  if (args[0] === "motivate") return message.channel.send(sixtysix);
  if (args[0] === "music") return message.channel.send(sixtyseven);
  if (args[0] === "neko") return message.channel.send(sixtyeight);
  if (args[0] === "nom") return message.channel.send(sixtynine);
  if (args[0] === "nsfw") return message.channel.send(seventy);
  if (args[0] === "oi") return message.channel.send(seventyfour);
  if (args[0] === "osulatest") return message.channel.send(seventyfive);
  if (args[0] === "osurecent") return message.channel.send(seventysix);
  if (args[0] === "osu") return message.channel.send(seventyseven);
  if (args[0] === "owoify") return message.channel.send(seventyeight);
  if (args[0] === "pat") return message.channel.send(seventynine);
  if (args[0] === "pay") return message.channel.send(eighty);
  if (args[0] === "pick") return message.channel.send(eightyone);
  if (args[0] === "ping") return message.channel.send(eightytwo);
  if (args[0] === "poke") return message.channel.send(eightythree);
  if (args[0] === "poll") return message.channel.send(eightyfour);
  if (args[0] === "pope") return message.channel.send(eightyfive);
  if (args[0] === "ppsize") return message.channel.send(eightysix);
  if (args[0] === "prefix") return message.channel.send(eightyseven);
  if (args[0] === "profile") return message.channel.send(eightyeight);
  if (args[0] === "rate") return message.channel.send(eightynine);
  if (args[0] === "ratewaifu") return message.channel.send(ninety);
  if (args[0] === "removerole") return message.channel.send(ninetyone);
  if (args[0] === "rep") return message.channel.send(ninetytwo);
  if (args[0] === "report") return message.channel.send(ninetythree);
  if (args[0] === "rolelist") return message.channel.send(ninetyfour);
  if (args[0] === "roll") return message.channel.send(ninetyfive);
  if (args[0] === "russia") return message.channel.send(ninetysix);
  if (args[0] === "say") return message.channel.send(ninetyseven);
  if (args[0] === "server") return message.channel.send(ninetyeight);
  if (args[0] === "serverinfo") return message.channel.send(ninetynine);
  if (args[0] === "shibe") return message.channel.send(hundred);
  if (args[0] === "shitpost") return message.channel.send(hundredone);
  if (args[0] === "shop") return message.channel.send(hundredtwo);
  if (args[0] === "slap") return message.channel.send(hundredthree);
  if (args[0] === "smug") return message.channel.send(hundredfour);
  if (args[0] === "spank") return message.channel.send(hundredfive);
  if (args[0] === "spotify") return message.channel.send(hundredsix);
  if (args[0] === "suggest") return message.channel.send(hundredseven);
  if (args[0] === "suicide") return message.channel.send(hundredeight);
  if (args[0] === "tickle") return message.channel.send(hundrednine);
  if (args[0] === "tidsize") return message.channel.send(hundredten);
  if (args[0] === "tier") return message.channel.send(hundredeleven);
  if (args[0] === "tierinfo") return message.channel.send(hundredtwelve);
  if (args[0] === "tits") return message.channel.send(hundredthirteen);
  if (args[0] === "trump") return message.channel.send(hundredfourteen);
  if (args[0] === "twitter") return message.channel.send(hundredfifteen);
  if (args[0] === "userinfo") return message.channel.send(hundredsixteen);
  if (args[0] === "usercount") return message.channel.send(hundredseventeen);
  if (args[0] === "votekick") return message.channel.send(hundredeighteen);
  if (args[0] === "wank") return message.channel.send(hundrednineteen);
  if (args[0] === "website") return message.channel.send(hundredtwenty);
  if (args[0] === "why") return message.channel.send(hundredtwentyone);
  if (args[0] === "work") return message.channel.send(hundredtwentytwo);
  if (args[0] === "yn") return message.channel.send(hundredtwentythree);
  if (args[0] === "yuri") return message.channel.send(hundredtwentyfour);
  if (args[0] === "screenshot") return message.channel.send(hundredtwentyfive);
  if (args[0] === "ss") return message.channel.send(hundredtwentyfive);
  if (args[0] === "setcar") return message.channel.send(hundredtwentysix);
  if (args[0] === "setnote") return message.channel.send(hundredtwentyseven);
  if (args[0] === "car") return message.channel.send(hundredtwentyeight);
  if (args[0] === "reddit") return message.channel.send(hundredtwentynine);
  if (args[0] === "youtube") return message.channel.send(hundredthirty);
  if (args[0] === "yt") return message.channel.send(hundredthirty);
  if (args[0] === "rim") return message.channel.send(hundredthirtyone);
  if (args[0] === "changelog") return message.channel.send(hundredthirtytwo);
if (args[0] === "laugh") return message.channel.send(laugh);  
if (args[0] === "bite") return message.channel.send(bite);  
if (args[0] === "think") return message.channel.send(think);
if (args[0] === "love") return message.channel.send(punch);
if (args[0] === "marry") return message.channel.send(marry);
if (args[0] === "divorce") return message.channel.send(divorce);
if (args[0] === "ship") return message.channel.send(ship);
if (args[0] === "tummy") return message.channel.send(tummy); 
if (args[0] === "tidfuck") return message.channel.send(tidfuck); 
if (args[0] === "hide") return message.channel.send(hide); 
if (args[0] === "drag") return message.channel.send(drag); 
if (args[0] === "badges") return message.channel.send(badges); 
if (args[0] === "options") return message.channel.send(options); 
if (args[0] === "leaderboard") return message.channel.send(leaderboard); 

  if (!args[0] && nsfw === 0) return message.channel.send(botembednolewd);
  if (!args[0] && nsfw === 1) return message.channel.send(botembed);
  if (!args[0] && nsfw === null) return message.channel.send(botembed);
};
module.exports.help = {
  name: "help"
};
