const Astra = require(`discord.js`);
const fs = require(`fs`);
const config = require('../config.json');

exports.run = async (client, message, args, config) => {
    message.delete()
    const cadem = new Astra.MessageEmbed()
        .setDescription(`**You can find our CAD/MDT [here](${config['main_config'].cad_link})**`)
        .setColor(config['main_config'].color)
    message.channel.send(cadem)
}, exports.info = { name: "cad" }