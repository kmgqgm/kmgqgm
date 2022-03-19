const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const express = require("express");
const db = require("quick.db");
const app = express();
module.exports = {
  run(client, message, args, db) {// Bot By Givara.
      if (message.author.bot || !message.guild) return;
if (!message.member.hasPermission('ADMINISTRATOR'))return ;
    let att = new Discord.MessageAttachment(
      db.get(`guild_${message.guild.id}.lineurl`),
      "Line.gif"
    );
    message.channel
      .send(att)
      .then(msg => {
        message.delete();
      })
      .catch(err => {// Bot By Givara.
        if (String(err).includes("The resource must be a string")) {
          return message.channel.send("**You Must Set The Line First**");
        } else {
          return message.reply(
            "**An Error Occurred | You Must Set The Line First**"
          );
        }
      });
  },
  config: {
    name: "line",
    prems: "ADMINISTRATOR",
    type: "",
    noprefixali:true,
    alis: ["خط"]
  }
};
