module.exports = {
    name: 'gif',
    description: 'Send gif',
    
    execute(interaction, client) {
      client.client.channels.cache.get("579799154449186868").send("https://i.pinimg.com/originals/fe/2c/0f/fe2c0fda696f358d651a7a120367fbf8.jpg")
     
    },
  };