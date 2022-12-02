module.exports = {
  name: 'gif',
  description: 'Send gif',
  
  execute(interaction, client) {
    client.client.channels.cache.get("579799154449186868").send("https://i.pinimg.com/originals/f1/ea/82/f1ea82decb44a8fb291fecbd6bba04f1.png")
   
  },
};



// module.exports = {
//   name: 'ban',
//   description: 'Send gif',

//   execute(interaction, client) {
//     // const member = interaction.options.get('user').value;

//     if (!member) {
//       return message.reply('You need to mention the member you want to ban him');
//     }

//     if (!interaction.member.permissions.has('BAN_MEMBERS')) {
//       return message.reply("I can't ban this user.");
//     }

//     const userinfo = client.users.cache.get(member);
//   // client.channels.cache.get("579799154449186868").send("https://media.giphy.com/media/26tP7Lltx6BaMhKfK/giphy.gif")
    
//     client.channels.cache.get("579799154449186868").send("https://i.pinimg.com/originals/f1/ea/82/f1ea82decb44a8fb291fecbd6bba04f1.png")




//   },
// };