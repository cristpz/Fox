const Discord = require("discord.js");
const db = require("quick.db"),
  ms = require("parse-ms");

module.exports.run = async (bot, message, args, tools) => {
  const emoji = bot.emojis.find(emoji => emoji.name === `vintagecoin`);
  if (isNaN(args.join(" ")))
    return message.reply(
      "you must mention a valid amount of " + emoji + " to bet!"
    );
  var number = `${args.join(" ")}`;
  var randomnumber = Math.floor(Math.random() * number * 2) - number;
  let amount = randomnumber;
  let selfBalance = await db.fetch(`userBalance_${message.author.id}`);

  if (selfBalance === null) selfBalance = 0;

  if (args[0] === NaN) return;
  if (args[0] < 0) return;

  if (amount > selfBalance)
    return message.channel.send(
      `Sorry, your balance in your account is insufficient.`
    );

  db.add(`userBalance_${message.author.id}`, `${amount}`);
  let balance = await db.fetch(`userBalance_${message.author.id}`);
  message.reply(`balance: ${balance} profit/loss: ${amount}`);
};
module.exports.help = {
  name: "5050"
};
