const axios = require('axios');
let config = require('./config.json');



const getPlayerCount = async () => {
    try {
        const resp = await axios.get('http://' + config['main_config'].server_ip + '/players.json');


        let total = resp;
        return total;


    } catch (err) {
        console.error(err);

    }
};

module.exports.getPlayerCount = getPlayerCount;

