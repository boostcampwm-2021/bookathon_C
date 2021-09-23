const Video = require('../models/video');

const randomChoice = (min,max)=>{
    return Math.floor(Math.random()*(max-min)+min);
}

// Get the count of all users
const randomIndex = (req,res)=>{
    
    Video.count().exec(function (err, count) {

        // Get a random entry
        let random = randomChoice(0,count);
        console.log(random)
        // Again query all users but only fetch one offset by our random #
        Video.findOne().skip(random).exec(async (err, result) =>{
            // Tada! random user
            await res.json(result);
        });
    });
}

module.exports = randomIndex;
