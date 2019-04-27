const { Event } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class ChannelCreateEvent extends Event {
    constructor(...args) {
        super(...args, {enabled: true});
    }

	async run(oldChannel, newChannel) {
        await this.editLog(oldChannel, newChannel);
    }
    
    async editLog(oldChannel, newChannel) {
        if(!oldChannel.guild.settings.logs.enabled) return;
        if(!oldChannel.guild.settings.logs.logChannelUpdate) return;

        /* New Topic */
        if(oldChannel.topic !== newChannel.topic && oldChannel.name == newChannel.name) {
            const embed = new MessageEmbed()
                .setColor("#ffcc00")
                .setTitle("Channel topic updated")
                .setDescription(`A channel topic has been updated.\n\n**• Channel Name:** #${oldChannel.name} \n**• Old Topic:** ${oldChannel.topic} \n **• New Topic:** ${newChannel.topic}`)
        
            const logchannel = await this.client.channels.get(oldChannel.guild.settings.logs.channel);
            return logchannel.send(embed);
        }
        
        /* New Channel Name */
        if(oldChannel.name !== newChannel.name) {
            const embed = new MessageEmbed()
                .setColor("#ffcc00")
                .setTitle("Channel name updated")
                .setDescription(`A channel name has been updated.\n\n**• Old Channel Name:** #${oldChannel.name} \n**• New Channel Name:** #${newChannel.name} \n **• ID:** ${newChannel.id}`)
            
            const logchannel = await this.client.channels.get(oldChannel.guild.settings.logs.channel);
            return logchannel.send(embed);
         }
    }
}