const Discord = require("discord.js");
const superagent = require("superagent");

//.motivate - shows a random motivation post from reddit
module.exports.run = async (bot, message, args) => {
  for (let i = 0; i < 10; i++) {
    let motivate = await getMotivate();

    if (!motivate) {
      let again = "keep_the_loop_going";
    }
    if (motivate.text) {
      if (motivate.content === "") {
        return message.channel.send(`**${motivate.title}**`);
      }
      return message.channel.send(`**${motivate.title}**\n\`\`\`${motivate.content}\`\`\``);
    } else if (motivate.image) {
      //prettier-ignore
      let motivateembed = new Discord.RichEmbed()
        .setTitle("Motivational Message")
        .setDescription(`**${motivate.title}** | Get Motivated!`)
        .setColor("#ffa500")
      .setTimestamp()
      .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
        .setImage(motivate.content);

      return message.channel.send(motivateembed);
    }
  }

  async function getMotivate() {
    let { body } = await superagent
      .get(`https://www.reddit.com/r/GetMotivated/hot.json?limit=100`)
      .on("error", err => {
        //console.error(err);
        return message.channel.send(
          "Error while retrieving a motivation quote. Try again `!motivate`\n\n **If this problem keeps arising, make sure you've joined my support server to report any issues with the bot**"
        );
      });

    let number = randomNumber(100);
    let motivateTitle = body.data.children[number].data.title;
    if (motivateTitle.charAt(1).toLowerCase() == "t") {
      let motivateContent = body.data.children[number].data.selftext;
      let correctedTitle = motivateTitle.slice(6);

      return {
        text: true,
        image: false,
        again: false,
        title: correctedTitle,
        content: motivateContent
      };
    } else if (motivateTitle.charAt(1).toLowerCase() == "i") {
      let motivateImg = body.data.children[number].data.url;
      let correctedTitle = motivateTitle.slice(7);

      return {
        text: false,
        image: true,
        again: false,
        title: correctedTitle,
        content: motivateImg
      };
    } else {
      return false;
    }
  }

  function randomNumber(num) {
    let picker = Math.floor(Math.random() * num); //Generates a random number
    return picker;
  }
};

module.exports.help = {
  name: "motivate"
};
