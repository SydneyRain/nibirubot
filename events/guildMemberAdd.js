const { Event } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class MessageReactionAddEvent extends Event {
    constructor(...args) {
        super(...args, {enabled: true});
    }

	async run(member) {
        await this.autoroleadd(member);
        await this.editLog(member);
    }

    autoroleadd(member) {
        if (!member.guild.settings.autorole.enabled) return;
        if (!member.guild.me.permissions.has("MANAGE_ROLES")) return;
        return member.roles.add(member.guild.settings.autorole.roles, "Adding user to role (Autorole)").catch(() => null);
    }
    
    async editLog(member) {
        let userCreatedDate = member.user.createdAt.toString().split(' ');

        if(!member.guild.settings.logs.enabled) return;
        if(!member.guild.settings.logs.logGuildMemberAdd) return;
        const embed = new MessageEmbed()
            .setAuthor(`${member.user.tag}`, member.user.avatarURL())
            .setColor("#ffcc00")
            .setTitle("New user join")
            .setDescription(`A new user joined the server.\n\n**• Name:** ${member.user.tag} \n**• Account Created:** ${userCreatedDate[1]} ${userCreatedDate[2]}, ${userCreatedDate[3]} \n**• ID:** ${member.user.id}`);
        
        const logchannel = await this.client.channels.get(member.guild.settings.logs.channel);
        return logchannel.send(embed);
    }
}