const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let user = message.mentions.users.first() || message.author;

  if (user.presence.game != null) {
    if (user.presence.game.name === "Spotify") {
      var trackImg = user.presence.game.assets.largeImageURL;
      var trackUrl = `https://open.spotify.com/track/${user.presence.game.syncID}`;
      var trackName = user.presence.game.details;
      var trackAlbum = user.presence.game.assets.largeText;
      var trackAuthor = user.presence.game.state;

      let embed = new Discord.RichEmbed()
        .setTitle(`${user.username}#${user.discriminator} | Track Info`) // | Listening to music on Spotify, "https://cdn.discordapp.com/emojis/525426257853284352.gif?v=1")
        .setColor("#ffa500")
        .setThumbnail(trackImg)
        .addField("Song Name", `${trackName}`, true)
        .addField("Album", `${trackAlbum}`, true)
        .addField("Author", `${trackAuthor}`, true)
        .addField(
          "Listen to this track here:",
          `[Open Spotify](${trackUrl})`,
          true
        )
        .setTimestamp()
        .setFooter(
          /* "FoxBot, a bot by Akemi#4040" */ "Listening to music on spotify",
          "https://cdn.discordapp.com/emojis/525404673843134464.png?v=1"
        );

      message.channel.send(embed);
    } else {
      message.channel.send(
        `Sorry, that user isn't listening to anything on spotify right now.`
      );
    }
  }
};
module.exports.help = {
  name: "spotify"
};
