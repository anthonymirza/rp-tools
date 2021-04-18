const Astra = require(`discord.js`);
const fs = require(`fs`);
const config = require('../config.json');

exports.run = async(client, message, args, config) => {
    message.delete()
    message.channel.send(`Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
}, exports.info = { name: "ping" }