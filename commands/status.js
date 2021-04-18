const Astra = require(`discord.js`);
const fs = require(`fs`);
let PlayerCount = require('../players');
const config = require('../config.json');

exports.run = async (client, message, args, config) => {
    message.delete()

    PlayerCount.getPlayerCount().then((result) => {

        if (result.status === 200) {
            const onlineEmbed = new Astra.MessageEmbed()
                .setColor(config['main_config'].color)
                .setTitle('Status')
                .setDescription(`**IP:** ${config['main_config'].server_ip}`)
                .setThumbnail(config['main_config'].server_logo)
                .addFields(
                    { name: 'Connected players', value: result.data.length, inline: true },
                    { name: 'Server Status', value: '✅ ONLINE', inline: true },

                )
                .setTimestamp(new Date())
                .setFooter(`Requested by: ${message.author.tag} | Made by Astra#2100`, `${config['main_config'].server_logo}`);
            message.channel.send(onlineEmbed);
        }


    })
        .catch(function () {
            const offlineEmbed = new Astra.MessageEmbed()
                .setColor('RED')
                .setTitle('Status')
                .setDescription('IP: `unavailable`')
                .setThumbnail(config['main_config'].server_logo)
                .addFields(
                    { name: 'Connected players', value: 'NONE', inline: true },
                    { name: 'Server Status', value: '❌ OFFLINE', inline: true },

                )
                .setTimestamp(new Date())
                .setFooter(`Requested by: ${message.author.tag} | Made by Astra#2100`, `${config['main_config'].server_logo}`);
            message.channel.send(offlineEmbed);
        })

}, exports.info = { name: "status" }