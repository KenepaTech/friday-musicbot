const fs = require('fs');
const Discord = require('discord.js');
const Client = require('./client/Client');
const config = require('./config.json');
const {Player} = require('discord-player');

const client = new Client();
client.commands = new Discord.Collection();
const cron = require('cron');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

console.log(client.commands);

const player = new Player(client);

player.on('error', (queue, error) => {
  console.log(`[${queue.guild.name}] Error emitted from the queue: ${error.message}`);
});

player.on('connectionError', (queue, error) => {
  console.log(`[${queue.guild.name}] Error emitted from the connection: ${error.message}`);
});

player.on('trackStart', (queue, track) => {
  queue.metadata.send(`▶ | Started playing: **${track.title}** in **${queue.connection.channel.name}**!`);
});

player.on('trackAdd', (queue, track) => {
  queue.metadata.send(`🎶 | Track **${track.title}** queued!`);
});

player.on('botDisconnect', queue => {
  queue.metadata.send('❌ | I was manually disconnected from the voice channel, clearing queue!');
});

player.on('channelEmpty', queue => {
  queue.metadata.send('❌ | Nobody is in the voice channel, leaving...');
});

player.on('queueEnd', queue => {
  setTimeout(() => { console.log("Short break before leaving queue!"); }, 5000);
  queue.metadata.send('✅ | Queue finished!');


});

client.once('ready', async () => {
  console.log('Ready!');
});

client.on('ready', function() {
  client.user.setActivity(config.activity, { type: config.activityType });
});

client.once('reconnecting', () => {
  console.log('Reconnecting!');
});

client.once('disconnect', () => {
  console.log('Disconnect!');
});

client.once("ready", () => {
  console.log(`Online as ${client.user.tag}`);
    
  let scheduledMessage = new cron.CronJob('00 17 * * 5 ', () => {
  // let scheduledMessage = new cron.CronJob('* * * * * ', () => {
                    
  // This runs friday at 15, you can do anything you want
  // Specifing your guild (server) and your channel
     const guild = client.guilds.cache.get('579799154449186865');
     const channel = guild.channels.cache.get('579799154449186868');
//      channel.send('Grab the Wines!!');
     channel.send("Enjoy your weekend!🕺");
     client.channels.cache.get("579799154449186868").send("https://media.giphy.com/media/CNAQdzLs5yjE4/giphy.gif")
    });
        
    // When you want to start it, use:
    scheduledMessage.start()
});

client.on('messageCreate', async message => {
  if (message.author.bot || !message.guild) return;
  if (!client.application?.owner) await client.application?.fetch();

  if (message.content === '!deploy' && message.author.id === client.application?.owner?.id) {
    await message.guild.commands
      .set(client.commands)
      .then(() => {
        message.reply('Deployed!');
      })
      .catch(err => {
        message.reply('Could not deploy commands! Make sure the bot has the application.commands permission!');
        console.error(err);
      });
  }
});

client.on('interactionCreate', async interaction => {
  const command = client.commands.get(interaction.commandName.toLowerCase());

  try {
    if (interaction.commandName == 'ban' || interaction.commandName == 'userinfo') {
      command.execute(interaction, client);
    } else {
      command.execute(interaction, player);
    }
  } catch (error) {
    console.error(error);
    interaction.followUp({
      content: 'There was an error trying to execute that command!',
    });
  }
});

client.login("ODg4NTIzOTIwODYzNTU1NjQ0.YUT8Yg.o3QMgkbpyBoyZW8Uk9BLbDWF9-c");

