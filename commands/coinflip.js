const Discord = require("discord.js");

//!coinflip
module.exports.run = async (bot, message, args) => {
  let heads = 1;
  let tails = 0;

  let result = Math.floor(Math.random() * 2); //Randomly selects Heads or Tails

  if (result == 0) return message.channel.send("Tails.");
  else if (result == 1) return message.channel.send("Heads.");
  else {
    return message.channel.send(
      "Error Occurred, Flip again.\n\n **If this problem keeps arising, use `!suggest` to report that problem!**"
    );
  }
};

module.exports.help = {
  name: "coinflip"
};
