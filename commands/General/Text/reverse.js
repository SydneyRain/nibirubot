/*-------------- Modules --------------*/
const { Command }            = require('klasa');
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: 'Reverses whatever text you input.',
            extendedHelp: '+reverse hello world :: reverses the text "hello world".',
            name: 'reverse',
            runIn: ['text', 'dm'],
            usage: '[textToRevert:string]'
        });
    }

    async run(msg, [textToRevert]) {
        function reverseString(str){
            return str.split("").reduce(function(revString, char){
                return char + revString;
            }, "");
        }

        if (!textToRevert) { return msg.send('Usage: ``revert [text]`` - Reverts any text you input.\nExample: ``revert Hello world`` - Prints "dlrow olleH", or "Hello world" backwards.') }

        return msg.sendMessage(reverseString(`${textToRevert}`));
    }
}