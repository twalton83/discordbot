const request = require('request')
const {weatherKey} = require('../config.json');

module.exports = {
    name: 'temp',
    description: 'Current temperature',
    execute(message, args){
      request(`https://api.openweathermap.org/data/2.5/weather?q=Irvine,California&appid=${weatherKey}&units=imperial`, {json: true}, (err, res, body) => {
  
        if (err) { return console.log(err); }
        currentTemp = Math.round(body.main.temp)
        console.log(`It is ${currentTemp}`)
        message.channel.send(`It is currently ${currentTemp} degrees Farenheit.`)
    });
  }
}



