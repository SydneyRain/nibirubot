const { Event } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class UserUpdateEvent extends Event {
    constructor(...args) {
        super(...args, {enabled: true});
    }
    
	async run(oldUser, newUser) {
        await this.editLog(oldUser, newUser);
    }


    async editLog(oldUser, newUser) {
        //if(!newUser.guild.settings.logs.logUserUpdates) return;

        console.log("Old User: \n");
        console.log(oldUser);
        console.log("New User: \n");
        console.log(newUser);
    }
}