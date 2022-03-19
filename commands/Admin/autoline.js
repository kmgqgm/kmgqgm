const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const express = require("express");
const db = require("quick.db");
const app = express();
module.exports = {
  run(client, message, args, db) {
        if (message.author.bot || !message.guild) return;

    if (!db.get(`guild_${message.guild.id}`)) {
      db.set(`guild_${message.guild.id}`, {
        lineurl: "",
        reaction: "",
        channels: []
      });
    }
// Bot By Givara.
    let rooms = db.get(`guild_${message.guild.id}`).channels;

    if (rooms.includes(message.channel.id)) {
      if(message.author.bot)return;
      if (
        !db.get(`guild_${message.guild.id}.lineurl`) &&
        !db.get(`guild_${message.guild.id}.reaction`)
      )
        return message.channel.send(
          `**Please put the line or reaction at least**`
        );

      let att = new Discord.MessageAttachment(
        db.get(`guild_${message.guild.id}.lineurl`),
        "Line.gif"
      );

      message.channel.send(att).catch(x => x);
      if (db.get(`guild_${message.guild.id}.reaction`))
        message
          .react(db.get(`guild_${message.guild.id}.reaction`))
          .catch(x => message.channel.send("You Must Add A React"));

      return;
    }
  },
  config: {// Bot By Givara.
    name: "",
    type: "messageEvent",
    alis: []
  }
};
