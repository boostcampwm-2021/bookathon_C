const Video = require('../models/video');

const randomChoice = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const getRandomIndex = async function(req, res) {
    try {
        const maxCount = await Video.count().exec();
        let randomNumber = randomChoice(0,maxCount);

        const randomData = await Video.findOne().skip(randomNumber)

        await res.status(200).json({
            'message' : 'success',
            video : randomData
        });
    }
    catch (err) {
        await res.status(500).json({
            'error' : err
        });
    }
}

module.exports = getRandomIndex;