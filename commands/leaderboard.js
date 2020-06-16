const Discord = require("discord.js");
const xp = require("../xp.json");
const config = require("../botconfig.json"),
      colour = config.colour;

module.exports.run = async (bot, message, args, tools) => {
  
let file = Object.entries(xp)
              .map(([key, val]) => ({id: key, ...val}))
              .sort((a, b) => b.xp - a.xp);

  
let result = file.slice(0, 10);
let data = JSON.stringify(result);
var output = "";
  
data = data.replace(/[^0-9,]/g,'');
data = data.split(',');

var place = 1;
  
for (var i = 0; i < 29; i = i + 3) {
  let usertag = bot.users.get(data[i]);
  if (usertag === undefined) usertag = "dm Akemi#2314 to remove this user";
  else if (usertag !== undefined) usertag = bot.users.get(data[i]).tag;
  output = output + "\n" + place + ". " + usertag + " * " + data[i+1] + " XP * <LVL " + data[i+2] + ">";
  place++;
}

message.channel.send("```md"+ output +"```");
  
};

module.exports.help = {
  name: "leaderboard"
}