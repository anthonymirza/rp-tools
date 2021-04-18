const Astra = require(`discord.js`);
const fs = require(`fs`);
const config = require('../config.json');

exports.run = async (client, message, args, config) => {
    message.delete()
    const webem = new Astra.MessageEmbed()
        .setDescription(`**You can find our website [here](${config['main_config'].website_link})**`)
        .setColor(config['main_config'].color)
    message.channel.send(webem)
}, exports.info = { name: "website" }