const { error } = require('log-symbols');
module.exports = async function(client, message) {
    const config = require('../config.json');
    if (message.author.bot) return;
    if (!message.guild) return;
    let prefix = config["main_config"].prefix;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase()
    const cmd = client.commands.get(command);
    if (message.content.startsWith(prefix)) {
        if (cmd) {
            try {
                cmd.run(client, message, args, config)
            } catch (e) {
                return console.log(error, `[NON-FATAL]: ${e}`)
            }
        } else {
            return;
        }
    }

    // You are allowed to remove this but it is appreciated if you don't
    const responses = ['who made this alt detection bot', 'whos astra']
    if (responses.includes(message.content))
        message.reply(`The creator of this Alt Detection is Astra Development\nCheck him out here! https://discord.gg/AYSSF4Uuv9`)
}