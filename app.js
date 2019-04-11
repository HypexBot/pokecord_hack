const fs = require("fs");
const sharp = require("sharp");
const Discord = require("discord.js");
const hash = require('murmurhash-native').murmurHash;
const request = require("request").defaults({ encoding: null });
const pokemon = require("./pokemon")
const client = new Discord.Client();

client.on("message", function(msg) {
    if (msg.author.id.toString() === "365975655608745985" && msg.embeds.length !== 0 && msg.embeds[0].image) {
        request(msg.embeds[0].image.url, async function(err, res, body) {
            if (err !== null) return;
            msg.reply("**Nama Pokemon Sudah DiTRACK!! `:`** " + pokemon[hash(await (sharp(Buffer.from(body)).jpeg().toBuffer()))])	
        });
    }
});

client.on("ready", function() {
    console.log("Connected to discord API");
});

client.login(fs.readFileSync("token.txt", "utf-8"));
