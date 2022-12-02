module.exports = {
    name: 'gif',
    description: 'Send gif',
    
    execute(interaction, client) {
      client.client.channels.cache.get("579799154449186868").send("https://i.pinimg.com/originals/f1/ea/82/f1ea82decb44a8fb291fecbd6bba04f1.png")
     
    },
  };
