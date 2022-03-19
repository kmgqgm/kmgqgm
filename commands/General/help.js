const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const express = require("express");
const db = require("quick.db"); 
const app = express(); 
module.exports = {
run(client,message,args) {

const prefix = client.prefix;

if(message.author.bot || !message.guild)return;
let embed = new Discord.MessageEmbed()
.setTitle(`Help Menu`) // Bot By Givara.
.setAuthor(`${message.author.tag}`,message.author.avatarURL())
.setColor(`RANDOM`)
.setThumbnail(client.user.avatarURL())
.setTimestamp()
.addField(`**● | ${prefix}help - ${prefix}h**`,`**\` قائمة الهيلب \`**`)

.addField(`**● | ${prefix}line - خط**`, `**\` لوضع الخط \`**`)
.addField(`**● | ${prefix}add-room - ${prefix}ar**`, `**\` لاضافة روم الي الخط التلقائي \`**`)
.addField(`**● | ${prefix}clear-db - ${prefix}cd**`,`**\` لمسح جميع البيانات الخاصة بالسيرفر \`**`)
.addField(`**● | ${prefix}set-line - ${prefix}sl**`,`**\` لتحديد الخط \`**`)
.addField(`**● | ${prefix}set-reaction - ${prefix}sr**`,`**\` لتحديد الريأكشن \`**`)

.addField(`**● | ${prefix}support- ${prefix}sup**`, `**\` الدعم الفني للبوت \`**`)
.setFooter(`This Bot Made By Givara.`);
message.channel.send(embed)


    },
    config : {
        name: "help",
        alis : ["h"]
    }
}
