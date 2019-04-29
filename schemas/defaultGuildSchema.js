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
        .add("logEmojiCreate", "boolean", { default: false })
        .add("logEmojiDelete", "boolean", { default: false })
        .add("logChannelCreate", "boolean", { default: false })
        .add("logChannelDelete", "boolean", { default: false })
        .add("logChannelUpdate", "boolean", { default: false })
        .add("logGuildMemberAdd", "boolean", { default: true })
        .add("logGuildMemberRemove", "boolean", { default: true })
        .add("logMessageUpdate", "boolean", { default: true })
        .add("logMessageDelete", "boolean", { default: true })
        .add("logMessageReactionAdd", "boolean", { default: false })
        .add("logMessageReactionRemove", "boolean", { default: false })
        .add("logUserUpdate", "boolean", { default: false })
    )
        
    //Misc
    .add("currencySymbol", "string", { default: "N$"});