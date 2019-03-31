/*-------------- Modules --------------*/
const { Client }            = require('klasa');
/*-------------------------------------*/
const { config, token }     = require('./config')
const defaultGuildSchema    = require('./schemas/defaultGuildSchema')
/*-------------------------------------*/

class KlasaClient extends Client {
    constructor(args) {
        super({...args, defaultGuildSchema});

        this.config = config;
    }
}

new KlasaClient(config).login(token);