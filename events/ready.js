const { success, info } = require('log-symbols');
const config = require('../config.json');
const fs = require(`fs`);
module.exports = async client => {
    setTimeout(() => {
        console.log(success, `Logged in as ${client.user.tag}`)
    }, 2000);

    console.log(`\x1b[96m ${String.raw`   ▄████████ `} \x1b[0m`);
    console.log(`\x1b[96m ${String.raw`  ███    ███ `} \x1b[0m`);
    console.log(`\x1b[96m ${String.raw`  ███    ███ `} \x1b[0m`);
    console.log(`\x1b[96m ${String.raw`  ███    ███ `} \x1b[0m`);
    console.log(`\x1b[96m ${String.raw`▀███████████ `} \x1b[0m`);
    console.log(`\x1b[96m ${String.raw`  ███    ███ `} \x1b[0m`);
    console.log(`\x1b[96m ${String.raw`  ███    ███ `} \x1b[0m`);
    console.log(`\x1b[96m ${String.raw`  ███    █▀  `} \x1b[0m`);
    console.log(`\x1b[36m ${String.raw`  RP Tools   `} \x1b[0m`);
    console.log(`\x1b[36m ${String.raw`   Astra#2100    `} \x1b[0m`);
    console.log(`\x1b[36m ${String.raw` `} \x1b[0m`);
    console.log(`\x1b[36m ${String.raw`https://discord.gg/WVjVDpP6YD`} \x1b[0m`);
    console.log(`\x1b[36m ${String.raw` `} \x1b[0m`);

    console.log(`Make sure you have filled out your config.json file!`);
    console.log(`Please allow me to start!`);
}