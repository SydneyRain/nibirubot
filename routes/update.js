const { Route } = require('klasa-dashboard-hooks');

module.exports = class extends Route {

	constructor(...args) {
		super(...args, { route: 'guilds/:guildID/update' });
	}

	async get(request, response) {
		const { guildID } = request.params;
		const guild = this.client.guilds.get(guildID);
		if (!guild) return response.end('Invalid ID');

        await guild.settings.sync(true);

		return response.end("Success!");
	}

};
