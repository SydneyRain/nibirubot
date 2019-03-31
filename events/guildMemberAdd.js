const { Event } = require('klasa');

module.exports = class MessageReactionAddEvent extends Event {
    constructor(...args) {
        super(...args, {enabled: true});
    }

	async run(member) {
        await this.autoroleadd(member);
    }

    autoroleadd(member) {
        if (!member.guild.settings.autorole.enabled) return;
        if (!member.guild.me.permissions.has("MANAGE_ROLES")) return;
        return member.roles.add(member.guild.settings.autorole.rolename, "Adding user to role (Autorole)").catch(() => null);
    }
}