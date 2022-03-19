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
    if (!db.get(`guild_${message.guild.id}`)) {
      db.set(`guild_${message.guild.id}`, {
        lineurl: "",
        reaction: "",
        channels: []
      });
    }
// Bot By Givara.
    let id = String(args[0]);

    if (!id) return message.channel.send("**Write Id Of Channel**");

    if (message.guild.channels.cache.get(`${id}`)) {// Bot By Givara. 
      db.push(`guild_${message.guild.id}.channels`, id);
    } else {
      return message.channel.send("**There Is No Channel With This Id**");
    }

    message.channel.send(
      `**Done Added ${
        message.guild.channels.cache.get(`${id}`).name
      } to the auto line & react system**`
    );// Bot By Givara.
  },
  config: {
    name: "add-room",
    prems: "ADMINISTRATOR",
    alis: ["ar"]
  }
};
