module.exports = {
    name: 'gif',
    description: 'Send gif',
    
    execute(interaction, client) {
      client.client.channels.cache.get("579799154449186868").send("https://www.azrivierenland.be/sites/default/files/inline-images/A6%20kaart_complimentendag_RECTO_meloen.jpg")
     
    },
  };
