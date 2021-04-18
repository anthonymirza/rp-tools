const config = require('../config.json');
const Astra = require('discord.js');

module.exports = async function(client, member) {
    if (Date.now() - member.user.createdAt < 1000*60*60*24*config['alt_config'].alt_age_day) {
  if(config['alt_config'].dm_user) {
     try {   
        member.send(`You where kick from ${member.guild.name}\n Join back once your account is over ${config['alt_config'].alt_age_day} days old\n${config['main_config'].server_invite}`)
       } catch(e) {
         console.log(`[ALERT] Could not DM user (${member.user.tag})`)
        }
     }
    
    const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec));
    await delay(100); 
    member.kick(`Account under ${config['alt_config'].alt_age_day} days old.`);

        const channel = member.guild.channels.cache.get(config['alt_config'].noti_channel)
        const embed = new Astra.MessageEmbed()
        .setAuthor('Alt Detected')
        .setDescription(`**User Tag**: ${member.user.tag}\n**ID**: ${member.id}\n**Account Made**: ${member.user.createdAt}`)
        .setColor(config['main_config'].color)
        .setFooter(`${member.guild.name} | Made by: Astra#2100`)
        channel.send(embed)
    } else {
        return;
    };
}