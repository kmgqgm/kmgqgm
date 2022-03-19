const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const express = require("express");
const db = require("quick.db");
const app = express(); 
module.exports = {
run(client,message,args) {    
// Bot By Givara.
if (!message.guild.member(client.user).hasPermission("EMBED_LINKS"))
      return message.channel.send(
        `** > I Don't Have Permission \`__EMBED_LINKS__\`**`
      );
    if (message.author.bot || !message.guild) return;
    message.channel.send(
      `**> Support Server \n[ https://discord.gg/ak8Gf7Mguh ] **`
    );
// Bot By Givara.
},
    config : {
        name: "support",
        alis : ["sup"]
    }
}
