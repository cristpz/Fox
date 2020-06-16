const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  /*function getUserFromMention(mention) {
    if (!mention) return;

    if (mention.startsWith("<@") && mention.endsWith(">")) {
      mention = mention.slice(2, -1);

      if (mention.startsWith("!")) {
        mention = mention.slice(1);
      }

      return bot.users.get(mention);
    }
  }

  // eslint-disable-next-line no-unused-vars
  function getUserFromMentionRegEx(mention) {
    // The id is the first and only match found by the RegEx.
    const matches = mention.match(/^<@!?(\d+)>$/);

    // If supplied variable was not a mention, matches will be null instead of an array.
    if (!matches) return;

    // However the first element in the matches array will be the entire mention, not just the ID,
    // so use index 1.
    const id = matches[1];

    return bot.users.get(id);
  }
  if (args[1]) {
    const user = getUserFromMention(args[0]);
    const user1 = getUserFromMention(args[1]);
    message.channel.send(
      user.username + " and " + user1.username + " were mentioned"
    );
  }*/
  
 /*bot.fetchUser(message.author.id).then(async(Guild) => {
   console.log(Guild); 
 });*/
  
  
};

module.exports.help = {
  name: "test"
};
