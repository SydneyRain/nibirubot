/*-------------- Modules --------------*/
const { Command }            = require('klasa');
/*-------------------------------------*/

function EightBallAnswerGen() {
    var rand = ['It is certain.', 'As I see it, yes.', 'It is decidely so.', 'Without a doubt.',
                'Yes - definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.',
                'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy, try again.', 
                'Ask again later.', 'Better not tell you now.', 'Cannot predict now.',
                'Concentrate and ask again.', 'Don\'t count on it.', 'My reply is no.',
                'My sources say no.', 'Outlook not so good.', 'Very doubtful.'];
    return rand[Math.floor(Math.random()*rand.length)];
}

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            aliases: ['8b', '8-ball', 'eightball', 'eight-ball'],
            description: language => language.get("EIGHTBALL_DESCRIPTION"),
            extendedHelp: language => language.get("EIGHTBALL_EXTENDEDHELP"),
            name: '8ball',
            runIn: ['text', 'dm'],
            usage: '[question:string]'
        });
    }

    async run(msg, [question]) {
        if (!question) throw msg.language.get("EIGHTBALL_ERROR");
        return msg.send(`**Question**: ${question}\n**Answer**: ${EightBallAnswerGen()}`);
    }
}