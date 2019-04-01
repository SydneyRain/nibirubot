const { Client } = require("klasa");

Client.use(require("klasa-member-gateway"));

module.exports.defaultUserSchema = Client.defaultUserSchema
    // Economy
    .add("bankmoney", "bigint", { default: 0, configurable: false })
    .add("daily", "bigint", { default: 0, configurable: false })
    .add("level", "integer", { default: 0, configurable: false })
    .add("money", "bigint", { default: 0, configurable: false })
    .add("reputation", "integer", { default: 0, configurable: false })
    .add("xp", "integer", { default: 0, configurable: false });