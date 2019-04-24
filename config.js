/*-------------- Modules --------------*/
const FS                    = require('fs');
const YAML                  = require('js-yaml');
/*-------------------------------------*/
const config                = YAML.safeLoad(FS.readFileSync('./config.yml', 'utf8'));
/*-------------------------------------*/

exports.config = {
    /* General options */
    disableEveryone: true,
    language: 'en-US',
    prefix: config.botConfig.botPrefix,

    /* Set presence */
    presence: { activity: { name: `Type ${config.botConfig.botPrefix}help`, type: 'PLAYING' } },
    preserveConfigs: true,
    ownerID: config.botConfig.botOwnerID,
    readyMessage: (client) => `Logged in as ${client.user.username}. Currently serving in ${client.guilds.size} guilds to ${client.users.size} users!`,

    /* Command handler options */
    commandEditing: false,
    commandLogging: true,
    typing: true,

    /* Sharding options */
    shardId: 0,
    shardCount: 1,
    
    /* Custom Prompt Defaults */
    customPromptDefaults: {
        time: 30000,
        limit: Infinity,
        quotedStringSupport: false
    },

    /* Klasa Default Commands */
    pieceDefaults: {
        commands: {
            enabled: true,
        }
    },
    /* Providers */
    providers: {
        default: "postgresql"
    },
    /* Dashboard Hooks */
    dashboardHooks: {
        apiPrefix: "/", 
        port: "4000"
    }
}

exports.token = config.botConfig.botToken;