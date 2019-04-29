const { Command }            = require('klasa');

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
			aliases: ['rr'],
            description: language => language.get("RUSSIANROULETTE_DESCRIPTION"),
            extendedHelp: language => language.get("RUSSIANROULETTE_EXTENDEDHELP"),
            name: 'russianroulette',
            runIn: ['text'],
            usage: '[enable|disable] [args:string]',
            subcommands: true,
            usageDelim: " ",
            requiredPermissions: ["KICK_MEMBERS"]
        });
    }

    async run(msg) {
        if(!msg.guild.settings.russianRouletteEnable) throw msg.language.get("RUSSIANROULETTE_DISABLED");

        const guild = this.client.guilds.get(msg.guild.id);
        const member = guild.members.get(msg.author.id);
        
        var randomNumber = Math.random();
        
        if (randomNumber < .167) {
            if(!member.kickable) {
                msg.send(`You point the gun to your head...\nYou pull the trigger...\n**BLAM!** 10000 Counterfit NibiruBucks shoot out!`);
                return;
            }
            msg.send(`You point the gun to your head...\nYou pull the trigger...\n**BLAM!** 5000 NibiruBucks shoot out!`);
            await msg.author.settings.update("money", parseInt(msg.author.settings.money) + 5000);
            return;
        }
        if (randomNumber < .333) {
            if(!member.kickable) {
                msg.send(`You point the gun to your head...\nYou pull the trigger...\n**BLAM!** 100 goats shoot out and beat you up!`);
                return;
            }
            msg.send(`You point the gun to your head...\nYou pull the trigger...\n**BLAM!** 2500 NibiruBucks shoot out!`);
            await msg.author.settings.update("money", parseInt(msg.author.settings.money) + 2500);
            return;
        }
        if (randomNumber < .5) {
            msg.send(`You point the gun to your head...\nYou pull the trigger...\n**BLAM!** 1 NibiruBuck shoots out!`);
            await msg.author.settings.update("money", parseInt(msg.author.settings.money) + 1);
            return;
        }
        if (randomNumber < .667) {
            return msg.send(`You point the gun to your head...\nYou pull the trigger...\n**BLAM!** A blank shoots out!`);
        }
        else {
            if(!member.kickable) {
                msg.send(`You point the gun to your head...\nYou pull the trigger...\n**BLAM!** The banhammer shoots out and you would have gotten kicked if you didn't cheat by being a moderator, you sneaky one!`);
                return;
            }
            member.send(`You point the gun to your head...\nYou pull the trigger...\n**BLAM!** The banhammer shoots out and you got kicked!`).catch(console.error);
            msg.send(`You point the gun to your head...\nYou pull the trigger...\n**BLAM!** The banhammer shoots out and you got kicked!`);
            member.kick("Kicked for losing Russian Roulette game").catch(console.error);
            return;
        }
    }
    
    async enable(msg) {
        const guild = this.client.guilds.get(msg.guild.id);
        const member = guild.members.get(msg.author.id);

        if(!member.hasPermission("ADMINISTRATOR")) throw msg.language.get("NO_PERMISSION_ADMINISTRATOR");
        if(msg.guild.settings.russianRouletteEnable) throw msg.language.get("RUSSIANROULETTE_ENABLED_ERROR")

        await msg.guild.settings.update("russianRouletteEnable", true);
        
        return msg.send(`${msg.language.get("RUSSIANROULETTE_ENABLED_SUCCESS")}`);
    }

    async disable(msg) {
        const guild = this.client.guilds.get(msg.guild.id);
        const member = guild.members.get(msg.author.id);

        if(!member.hasPermission("ADMINISTRATOR")) throw msg.language.get("NO_PERMISSION_ADMINISTRATOR");
        if(!msg.guild.settings.russianRouletteEnable) throw msg.language.get("RUSSIANROULETTE_DISABLED_ERROR")

        await msg.guild.settings.update("russianRouletteEnable", false);
        
        return msg.send(`${msg.language.get("RUSSIANROULETTE_DISABLED_SUCCESS")}`);
    }
}