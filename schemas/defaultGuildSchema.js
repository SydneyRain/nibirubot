const { Client } = require("klasa");

Client.use(require("klasa-member-gateway"));

module.exports.defaultGuildSchema = Client.defaultGuildSchema
    //Auto Role
    .add("autorole", (folder) => folder
        .add("enabled", "boolean", { default: false })
        .add("rolename", "role")
    )

    //Starboard
    .add("starboard", (folder) => folder 
        .add("channel", "channel")
        .add("limit", "integer", { default: 3})
        .add("enabled", "boolean", { default: false })
    )
        
    //Misc
    .add("currencysymbol", "string", { default: "N$"});