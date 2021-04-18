const Astra = require(`discord.js`);
const fs = require(`fs`);
let PlayerCount = require('../players');
const config = require('../config.json');

exports.run = async (client, message, args, config) => {
    message.delete()

    PlayerCount.getPlayerCount().then((results) => {
        let list = results.data;
        var id = "";
        var players = "";
        var ping = "";
        for (var i = 0; i < list.length; i++) {
            id += list[i].id + '\n';
            players += list[i].name + '\n';
            ping += list[i].ping + '\n';
        }
        const listEmbed = new Astra.MessageEmbed()
            .setColor(config['main_config'].color)
            .setTitle('Online Players')
            .setDescription(`Total Players: ${list.length}`)
            .setThumbnail(config['main_config'].server_logo)
            .addFields(
                { name: 'Player ID', value: id, inline: true },
                { name: 'Player Name', value: players, inline: true },
                { name: '📶', value: `${ping}`, inline: true },
            )
            .setTimestamp(new Date())
            .setFooter(`Requested by: ${message.author.tag} | Made by Astra#2100`, `${config['main_config'].server_logo}`);
        message.channel.send(listEmbed);
    })
        .catch(function () {
            const errpListEmbed = new Astra.MessageEmbed()
                .setColor(config['main_config'].color)
                .setTitle('Online Players')
                .setDescription(`Total players: none`)
                .setThumbnail(config['main_config'].server_logo)
                .addFields(
                    { name: 'Player ID', value: '0', inline: true },
                    { name: 'Player Name', value: 'None', inline: true },
                    { name: 'Ping', value: 'None', inline: true },

                )
                .setTimestamp(new Date())
                .setFooter(`Requested by: ${message.author.tag} | Made by Astra#2100`, `${config['main_config'].server_logo}`);
            message.channel.send(errpListEmbed);
        })


}, exports.info = { name: "players" }