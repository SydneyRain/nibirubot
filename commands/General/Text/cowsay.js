/*-------------- Modules --------------*/
const { Command }            = require('klasa');
const Cowsay                 = require('cowsay');
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: 'Makes a cow say something.',
            extendedHelp: '+cowsay Have you moooed today? :: Makes an ASCII cow say "Have you moooed today?".',
            name: 'cowsay',
            runIn: ['text', 'dm'],
            usage: '[textToSay:string]'
        });
    }

    async run(msg, [textToSay]) {
        if (!textToSay) { return msg.send('Usage: ``cowsay [text]`` - Makes a cow say something.\nExample: ``cowsay Have you moooed today?`` - Makes the cow say "Have you moooed today?".') }
        return msg.sendMessage(`\`\`\`${Cowsay.say({text : textToSay}) }\`\`\``);
    }
}