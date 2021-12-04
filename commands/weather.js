const axios = require('axios')
module.exports = {
    name: 'weather',
    description: 'Send weather info',
  
    execute(interaction, client) {
        const member = interaction.options.get('user').value;

        if (! member) {
            return message.reply('You need to mention the member you want to ban him');
        }

        if (!interaction.member.permissions.has('BAN_MEMBERS')) {
            return message.reply("I can't ban this user.");
        }

        const exampleEmbed = (temp, maxTemp, minTemp, pressure, humidity, wind, cloudness, icon, author, profile, cityName, country) => new Discord.RichEmbed().setColor('#0099ff').setAuthor(`Hello, ${author}`, profile).setTitle(`There is ${temp}\u00B0 C in ${cityName}, ${country}`).addField(`Maximum Temperature:`, `${maxTemp}\u00B0 C`, true).addField(`Minimum Temperature:`, `${minTemp}\u00B0 C`, true).addField(`Humidity:`, `${humidity} %`, true).addField(`Wind Speed:`, `${wind} m/s`, true).addField(`Pressure:`, `${pressure} hpa`, true).addField(`Cloudiness:`, `${cloudness}`, true).setThumbnail(`http://openweathermap.org/img/w/${icon}.png`).setFooter('Made With 💖 by @Uddesh');
        const helpEmbed = () => new Discord.RichEmbed().setColor('#0099ff').addField("Use '#w (City Name)' to get weather information", "For Example '#w london'", true).addBlankField().addField("Use '#ping' or '#beep'", 'Try it.', true).addBlankField().addField("Use '#server-info' to get informatin about server", "For Example '#server-info'", true).addBlankField().addField("Use '#user-info' to get informatin about your profile", "For Example '#user-info'", true).addBlankField().setFooter('Made with 💖 by @Uddesh');

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=c98d18d8c000d04c9f5030234c802480
        `).then(response => {
        let apiData = response;
        let currentTemp = Math.ceil(apiData.data.main.temp)
        let maxTemp = apiData.data.main.temp_max;
        let minTemp = apiData.data.main.temp_min;
        let humidity = apiData.data.main.humidity;
        let wind = apiData.data.wind.speed;
        let author = message.author.username
        let profile = message.author.displayAvatarURL
        let icon = apiData.data.weather[0].icon
        let cityName = args
        let country = apiData.data.sys.country
        let pressure = apiData.data.main.pressure;
        let cloudness = apiData.data.weather[0].description;
        // client.channels.cache.get("579799154449186868").send()
        // message.channel.send(exampleEmbed(currentTemp, maxTemp, minTemp, pressure, humidity, wind, cloudness, icon, author, profile, cityName, country));
        client.channels.cache.get("579799154449186868").send(exampleEmbed(currentTemp, maxTemp, minTemp, pressure, humidity, wind, cloudness, icon, author, profile, cityName, country));
}).catch(err => {
    message.reply(`Enter a vailid city name`)
})

    }
};




