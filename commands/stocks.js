const request = require('request')
const {stockKey} = require('../config.json');


module.exports = {
    name: 'stock',
    description: 'Current stock price',
    execute(message, args){
    let ticker = args
    request(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=5min&apikey=${stockKey}`, {json:true}, (err,res, body) =>{
        if (err) { 
            return console.log(err); 
        }
        if (body['Meta Data'] === undefined){
            message.channel.send('That is not a valid ticker.')
        } else {
            let lastRefreshed = body['Meta Data']['3. Last Refreshed'];
            currentPrice = body['Time Series (5min)'][lastRefreshed]['4. close']
            console.log(currentPrice)
            message.channel.send(`${ticker} is currently ${currentPrice}.`)
        };
    })
    }
   
}