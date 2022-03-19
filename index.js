// Bot By Givara.
require("events").EventEmitter.defaultMaxListeners = 200;
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const express = require("express");
const db = require("quick.db");
const app = express();
client.cmds = new Discord.Collection();
const cmds = client.cmds;

app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});

const prefix = "!"; // البرفيكس
client.prefix = prefix;
//STATUS CODE

// Bot By Givara.
client.on("ready", () => {
  console.log(`Logged As ${client.user.tag}`);
  client.user.setActivity(`${client.user.username} | ${prefix}help `, {
    type: "PLAYING"
  }); // حاله البوت
});


client.on("message", msg => onMessage(msg));

function onMessage(message) {

let args = message.content.split(" ")
let cmd = cmds.find(x => x.config.name == args[0].slice(prefix.length) || x.config.alis.includes(args[0].slice(prefix.length)) || x.config.alis.includes(args[0]));

cmd ? !message.content.startsWith(prefix) && !cmd.config.noprefixali ? null : cmd.run(client, message, args.slice(1), db) : null;

  return checkForEventCmds(message, args);
}

(function lod(dirs) {
  for (let dir of dirs) {
    for (let filename of fs
      .readdirSync("./commands/" + dir)
      .filter(d => d.includes(".js"))) {
      let fileprep = require("./commands/" + dir + "/" + filename);
      cmds.set(filename, fileprep);
    }
  }
})(["General", "Admin"]);

function checkForEventCmds(message, args) {
  let Ecmd = cmds.find(cmd => cmd.config.type == "messageEvent");
  if (Ecmd) Ecmd.run(client, message, args, db);
}



client.on('message', message => {
        if(message.content.startsWith(prefix+'tax')){
                var args = message.content.split(' ').slice(1);
                let tax = Math.round(Number(args[0])*5/100);
                let total = Math.round(Number(args[0])+tax);
                var embed = new Discord.MessageEmbed()
                .setTitle('الضريبة')
                .addField('الي راح يخصمه البوت:', `${tax}`, false)
                .addField('المطلوب تحويله:', `${total}`, false)
                message.channel.send(embed)
        }
})


///وارن
client.on('message', message => {
 
     if(message.content.startsWith(prefix + "warn")) {
      if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(`>>> \`\`\`You Don't have the permission `);
 let args = message.content.split(" ").slice(1);
 
    var user = message.mentions.users.first();
    var reason = args.slice(1).join(' ');
    const embed = new Discord.MessageEmbed()
        .setColor('#0083ff')
        .setTimestamp();
 
    if (!user) {
        embed.addField("**منشن الشخص** ", ` ${message.author.tag}?`)
            .setTimestamp();
        return message.channel.send(embed);
    } if (!reason) {
        embed.addField("**لماذا تريد اعطاء الشخص أنذار** ? ", ` ${user.tag}?`)
        return message.channel.send(embed);
    }
    embed.addField("**تم ارسال الانذار** ", ` ${user.tag}!`)
        .setTimestamp();
    message.channel.send(embed);
    const embed1 = new Discord.MessageEmbed()
        .setColor('#0083ff')
        .setTimestamp()
        .addField("لقد اخذت انذار", `
 
          السبب : **${reason}**`)
        .setFooter(`
        انذار بواسطة ${message.author.tag}.`);
    user.send(embed1);
    message.delete();
}
});



client.login(process.env.token);
