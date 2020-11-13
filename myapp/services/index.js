const axios = require("axios");
const https = require('https');

const serviceSiteMLB = async () => {
    try {
        const response = await axios.get('https://api.mercadolibre.com/sites/MLB');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

const serviceSiteMLA = ()=>{
    return new Promise((resolve) => {
        https.get('https://api.mercadolibre.com/sites/MLA', (response) => {
            let data = '';
            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', () => {
                return resolve(JSON.parse(data));
            });
        }).on('error',()=>{ console.log("algo salio sal")});
    });
};

module.exports = { serviceSiteMLA, serviceSiteMLB};
