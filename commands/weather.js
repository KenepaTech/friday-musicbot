const Discord = require('discord.js');
const {
    QueryType
} = require('discord-player');

const axios = require('axios')
module.exports = {
    name: 'weather',
    description: 'Send weather info',
    options: [
        {
          name: 'query',
          type: 3, // 'STRING' Type
          description: 'the name of the city',
          required: true,
        },
      ],

    async execute(interaction, client) {
        client = client.client;

        const exampleEmbed = (
                temp,
                maxTemp,
                minTemp,
                pressure,
                humidity,
                wind,
                cloudness,
                icon,
                cityName,
                country
            ) =>
            new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`It is ${temp}\u00B0 C in ${cityName}, ${country}`)
            .addField(`Maximum Temperature:`, `${maxTemp}\u00B0 C`, true)
            .addField(`Minimum Temperature:`, `${minTemp}\u00B0 C`, true)
            .addField(`Humidity:`, `${humidity} %`, true)
            .addField(`Wind Speed:`, `${wind} m/s`, true)
            .addField(`Pressure:`, `${pressure} hpa`, true)
            .addField(`Cloudiness:`, `${cloudness}`, true)
            .setFooter('Made With 💖 by @kenepatech');


        // await interaction.deferReply();    
        const query = interaction.options.get('query').value;
        console.log(query);


        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=c98d18d8c000d04c9f5030234c802480`).then(response => {
            let apiData = response;
            let currentTemp = Math.ceil(apiData.data.main.temp)
            let maxTemp = apiData.data.main.temp_max;
            let minTemp = apiData.data.main.temp_min;
            let humidity = apiData.data.main.humidity;
            let wind = apiData.data.wind.speed;
            let icon = apiData.data.weather[0].icon
            let cityName = query.toUpperCase();
            let country = apiData.data.sys.country
            let pressure = apiData.data.main.pressure;
            let cloudness = apiData.data.weather[0].description;
            let weatherinfo = exampleEmbed(currentTemp, maxTemp, minTemp, pressure, humidity, wind, cloudness, icon, cityName, country);
            client.channels.cache.get("579799154449186868").send({
                embeds: [weatherinfo]
            });

        }).catch(err => {
            console.log(err)
        })

    }
};
