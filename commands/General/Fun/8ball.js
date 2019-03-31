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
            description: 'Ask the magic 8-Ball about your future.',
            extendedHelp: '+8ball Will I find love? :: Asks the 8-ball "Will I find love?"',
            name: '8ball',
            runIn: ['text', 'dm'],
            usage: '[question:string]'
        });
    }

    async run(msg, [question]) {
        if (!question) { return msg.send('Usage: ``8ball [question]`` - Ask the 8-Ball a question.\nExample: ``8ball Will I ever find love?`` - Asks the magic 8-ball if you will ever find love.') }
        return msg.send(`**Question**: ${question}\n**Answer**: ${EightBallAnswerGen()}`)
    }
}