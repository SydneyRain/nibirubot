/*-------------- Modules --------------*/
const { Command }            = require('klasa');
const slots                  = ['🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍑', '🍅', '🍓', '💩', ':seven:'];  
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: language => language.get("SLOTS_DESCRIPTION"),
            extendedHelp: language => language.get("SLOTS_EXTENDEDHELP"),
            name: 'slots',
            runIn: ['text'],
            usage: '[money:integer]',
            usageDelim: " "
        });
    }

    async run(msg, [money = 1]) {
        await msg.author.settings.sync(true);
        if (money < 1) return msg.send(msg.language.get("SLOTS_ERROR"));
        if (msg.author.settings.money < money) return msg.send(msg.language.get("SLOTS_ERROR_NO_MONEY"));
        
        let slot1 = slots[Math.floor(Math.random() * slots.length)];
        let slot2 = slots[Math.floor(Math.random() * slots.length)];
        let slot3 = slots[Math.floor(Math.random() * slots.length)];

        let checkIfWon = `${msg.author.username} bet  ${msg.guild.settings.currencySymbol}**${parseInt(money)}**, and lost all of it...`;

        if (slot1 == "🍇" && slot2 == "🍇" && slot3 == "🍇") {
            checkIfWon = `${msg.author.username} bet  ${msg.guild.settings.currencySymbol}**${parseInt(money)}**, and won ${msg.guild.settings.currencySymbol}**${parseInt(money) * 35}**!`;
            await msg.author.settings.update("money", parseInt(msg.author.settings.money) + parseInt(money) * 35 + parseInt(money));
        }
        
        if (slot1 == "🍈" && slot2 == "🍈" && slot3 == "🍈") {
            checkIfWon = `${msg.author.username} bet ${msg.guild.settings.currencySymbol}**${parseInt(money)}**, and won ${msg.guild.settings.currencySymbol}**${parseInt(money) * 35}**!`;
            await msg.author.settings.update("money", parseInt(msg.author.settings.money) + parseInt(money) * 35 + parseInt(money));
        }
        
        if (slot1 == "🍉" && slot2 == "🍉" && slot3 == "🍉") {
            checkIfWon = `${msg.author.username} bet ${msg.guild.settings.currencySymbol}**${parseInt(money)}**, and won ${msg.guild.settings.currencySymbol}**${parseInt(money) * 35}**!`;
            await msg.author.settings.update("money", parseInt(msg.author.settings.money) + parseInt(money) * 35 + parseInt(money));
        }
        
        if (slot1 == "🍊" && slot2 == "🍊" && slot3 == "🍊") {
            checkIfWon = `${msg.author.username} bet ${msg.guild.settings.currencySymbol}**${parseInt(money)}**, and won ${msg.guild.settings.currencySymbol}**${parseInt(money) * 60}**!`;
            await msg.author.settings.update("money", parseInt(msg.author.settings.money) + parseInt(money) * 60 + parseInt(money));
        }
                
        if (slot1 == "🍋" && slot2 == "🍋" && slot3 == "🍋") {
            checkIfWon = `${msg.author.username} bet ${msg.guild.settings.currencySymbol}**${parseInt(money)}**, and won ${msg.guild.settings.currencySymbol}**${parseInt(money) * 60}**!`;
            await msg.author.settings.update("money", parseInt(msg.author.settings.money) + parseInt(money) * 60 + parseInt(money));
        }
                        
        if (slot1 == "🍌" && slot2 == "🍌" && slot3 == "🍌") {
            checkIfWon = `${msg.author.username} bet ${msg.guild.settings.currencySymbol}**${parseInt(money)}**, and won ${msg.guild.settings.currencySymbol}**${parseInt(money) * 40}**!`;
            await msg.author.settings.update("money", parseInt(msg.author.settings.money) + parseInt(money) * 40 + parseInt(money));
        }
           
        if (slot1 == "🍑" && slot2 == "🍑" && slot3 == "🍑") {
            checkIfWon = `${msg.author.username} bet ${msg.guild.settings.currencySymbol}**${parseInt(money)}**, and won ${msg.guild.settings.currencySymbol}**${parseInt(money) * 37}**!`;
            await msg.author.settings.update("money", parseInt(msg.author.settings.money) + parseInt(money) * 37 + parseInt(money));
        }
                   
        if (slot1 == "🍅" && slot2 == "🍅" && slot3 == "🍅") {
            checkIfWon = `${msg.author.username} bet ${msg.guild.settings.currencySymbol}**${parseInt(money)}**, and won ${msg.guild.settings.currencySymbol}**${parseInt(money) * 45}**!`;
            await msg.author.settings.update("money", parseInt(msg.author.settings.money) + parseInt(money) * 45 + parseInt(money));
        }
                           
        if (slot1 == "🍓" && slot2 == "🍓" && slot3 == "🍓") {
            checkIfWon = `${msg.author.username} bet ${msg.guild.settings.currencySymbol}**${parseInt(money)}**, and won ${msg.guild.settings.currencySymbol}**${parseInt(money) * 55}**!`;
            await msg.author.settings.update("money", parseInt(msg.author.settings.money) + parseInt(money) * 55 + parseInt(money));
        }
                                   
        if (slot1 == "💩" && slot2 == "💩" && slot3 == "💩") {
            checkIfWon = `${msg.author.username} bet ${msg.guild.settings.currencySymbol}**${parseInt(money)}**, and won ${msg.guild.settings.currencySymbol}**${parseInt(money) + 5}**!`;
            await msg.author.settings.update("money", parseInt(msg.author.settings.money) + parseInt(money) + 5 + parseInt(money));
        }
                                   
        if (slot1 == ":seven:" && slot2 == ":seven:" && slot3 == ":seven:") {
            checkIfWon = `${msg.author.username} bet ${msg.guild.settings.currencySymbol}**${parseInt(money)}**, and won ${msg.guild.settings.currencySymbol}**${parseInt(money) * 300}**!`;
            await msg.author.settings.update("money", parseInt(msg.author.settings.money) + parseInt(money) * 300 + parseInt(money));
        }
        
        await msg.author.settings.update("money", parseInt(msg.author.settings.money) - money).then(() => {
            return msg.sendMessage(`------------------\n${slots[Math.floor(Math.random() * slots.length)]} : ${slots[Math.floor(Math.random() * slots.length)]} : ${slots[Math.floor(Math.random() * slots.length)]}\n${slot1} : ${slot2} : ${slot3}\n${slots[Math.floor(Math.random() * slots.length)]} : ${slots[Math.floor(Math.random() * slots.length)]} : ${slots[Math.floor(Math.random() * slots.length)]}\n------------------\n${checkIfWon}`); 
        });
    }
}