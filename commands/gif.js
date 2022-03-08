module.exports = {
    name: 'gif',
    description: 'Send gif',
    
    execute(interaction, client) {
      client.client.channels.cache.get("579799154449186868").send("https://crystalleansolutions.ie/wp-content/uploads/2020/03/international-womens-day.jpg")
     
    },
  };
