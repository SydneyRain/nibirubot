/*-------------- Modules --------------*/
const { Command } = require('klasa');
const Ping        = require('ping');
/*-------------------------------------*/

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
            description: language => language.get("PING_DESCRIPTION"),
            extendedHelp: language => language.get("PING_EXTENDEDHELP"),
            name: 'ping',
            runIn: ['text', 'dm'],
            usage: '[siteToPing:string]'
		});
	}

	async run(msg, [siteToPing]) {
		if (!siteToPing) { 
			const message = await msg.sendLocale('COMMAND_PING');
			return msg.sendLocale('COMMAND_PINGPONG', [(msg.editedTimestamp || msg.createdTimestamp) - (message.editedTimestamp || message.createdTimestamp), Math.round(this.client.ws.ping)]);
		}
		
		var hosts = [`${siteToPing}`];
		const pingmessage = await msg.sendMessage("Pinging, please wait...");

		hosts.forEach(function (host) {
			Ping.promise.probe(host).then(function (res) {
				return pingmessage.edit(`\`\`\`${res.output || "An unknown error has occurred"}\`\`\``);
			});
		});
	}

};
