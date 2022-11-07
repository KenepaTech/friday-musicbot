module.exports = {
  name: 'ban',
  description: 'Send gif',
  options: [
    {
      name: 'user',
      type: 6, //USER Type
      description: 'The user you want to ban',
      required: false,
    },
  ],
  execute(interaction, client) {
    const member = interaction.options.get('user').value;

    if (!member) {
      return message.reply('You need to mention the member you want to ban him');
    }

    if (!interaction.member.permissions.has('BAN_MEMBERS')) {
      return message.reply("I can't ban this user.");
    }

    const userinfo = client.users.cache.get(member);
  // client.channels.cache.get("579799154449186868").send("https://media.giphy.com/media/26tP7Lltx6BaMhKfK/giphy.gif")
    
    client.channels.cache.get("579799154449186868").send("https://i.pinimg.com/564x/d3/d5/33/d3d5331bc5b86caa0d2d6cf48f3e3a37.jpg")
  //   let ballembed = new Discord.MessageEmbed()
  // .attachFiles("https://media.giphy.com/media/JrkbVRQA5adwle1ykt/giphy.gif")
  //         message.channel.send(ballembed);



    // return interaction.guild.members
    //   .ban(member)
    //   .then(() => {
    //     interaction.reply({
    //       content: `${userinfo.username} was banned.`,
    //       ephemeral: true,
    //     });
    //   })
    //   .catch(error =>
    //     interaction.reply({
    //       content: `Sorry, an error occured.`,
    //       ephemeral: true,
    //     }),
    //   );

      



  },
};
