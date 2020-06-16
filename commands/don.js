const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  const emoji = bot.emojis.find(emoji => emoji.name === `vintagecoin`);
  let balance = db.fetch(`userBalance_${message.author.id}`)
  if (args[0] < 0) return;
  if (args[0] === NaN) return;
  if (!args[0]) return message.reply('you must add a valid number following the command dummy!');
  if (args[0] === NaN) return message.reply('you must add a valid number following the command dummy!'); 
  let heads = 1;
  let tails = 0;
  let final = await db.fetch(`userBalance_${message.author.id}`);
  let result = Math.floor(Math.random() * 2); //Randomely selects Heads or Tails
  if (args[0] > balance) return message.channel.send(`Sorry, your balance in your account is insufficient to place that bet.`);

  if (result == 0) {
    db.add(`userBalance_${message.author.id}`, `${args.join(' ')}`);
    message.channel.send(`Amount successfully doubled! (+${args.join(' ') * 2}${emoji}) `);
  } 
  else if (result == 1) {
    db.subtract(`userBalance_${message.author.id}`, `${args.join(' ')}`)
    message.channel.send(`You lost all your money placed on that bet, good luck next time!`);
  } 
  else {
    return message.channel.send(
      "Error Occurred, Try again.\n\n **If this problem keeps arising, use `!suggest` to report that problem!**"
    );
  }
};

module.exports.help = {
  name: "don"
};