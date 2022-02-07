module.exports = {
    name: 'gif',
    description: 'Send gif',
    
    execute(interaction, client) {
      client.client.channels.cache.get("579799154449186868").send("https://pbs.twimg.com/media/CAx9L8TWcAA6zlU.png")
     
    },
  };
