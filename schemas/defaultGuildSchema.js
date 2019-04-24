const { Client } = require("klasa");

Client.use(require("klasa-member-gateway"));

module.exports.defaultGuildSchema = Client.defaultGuildSchema
    //Auto Role
    .add("autorole", (folder) => folder
        .add("enabled", "boolean", { default: false })
        .add("roles", "role", { array: true })
    )

    //Starboard
    .add("starboard", (folder) => folder 
        .add("channel", "channel")
        .add("limit", "integer", { default: 3 } )
        .add("enabled", "boolean", { default: false } )
    )
    
    //Logs
    .add("logs", (folder) => folder 
        .add("channel", "channel")
        .add("enabled", "boolean", { default: false })
        .add("logGuildMemberAdd", "boolean", { default: false })
        .add("logMessageUpdate", "boolean", { default: false })
        .add("logMessageReactionAdd", "boolean", { default: false })
    )
        
    //Misc
    .add("currencySymbol", "string", { default: "N$"});