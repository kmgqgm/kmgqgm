const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const express = require("express");
const db = require("quick.db");
const app = express();
module.exports = {
  run(client, message, args, db) {
        if (message.author.bot || !message.guild) return;
if (!message.member.hasPermission('ADMINISTRATOR'))return ;
    if (!db.get(`guild_${message.guild.id}`)) {// Bot By Givara.
      db.set(`guild_${message.guild.id}`, {
        lineurl: "",
        reaction: "",
        channels: []
      });
    }

    db.delete(`guild_${message.guild.id}`);

    message.channel.send(`**Done Cleard DataBase For This Server**`);
  },
  config: {// Bot By Givara.
    name: "clear-db",
    prems: "ADMINISTRATOR",
    alis: ["cd"]
  }
};
