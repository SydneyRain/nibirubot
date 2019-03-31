const { Client } = require("klasa");

Client.use(require("klasa-member-gateway"));

module.exports.defaultGuildSchema = Client.defaultGuildSchema
    .add("starboard", (folder) => folder 
        .add("channel", "channel")
        .add("limit", "integer", { default: 3})
        .add("enabled", "boolean", { default: false}))