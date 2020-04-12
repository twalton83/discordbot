module.exports = {
    name: 'time',
    description: 'Current Time',
    execute(message, args){
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        const timeOptions = { hour : 'numeric', minute : 'numeric' }
        let today = new Date();
        let time = today.getHours() + ":" + today.getMinutes();
        message.channel.send(`Today is ${current} and it is ${time}.`) 
    }
};