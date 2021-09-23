const Video = require('../models/video')

const postVideo = async (req, res, next) => {
    try {
        await Video.create({...req.body});
        await res.status(201).json({
            'message' : 'success'
        });
    }

    catch(err) {
        await res.status(500).json({
            'error' : err
        });
    }
};

const getVideo = async (req, res, next) => {
    try {
        const videoId = req.params['videoId'];
        const video = await Video.findById(videoId);
        await res.status(200).json({
            'message' : 'success',
            'Video': video
        });
    }

    catch(err) {
        await res.status(500).json({
            'error' : err
        });
    }

};

const updateVideo = async (req, res, next) => {
    try {
        const videoId = req.params['videoId'];
        await Video.findByIdAndUpdate(videoId, {...req.body, 'updatedAt' : Date.now()});
        await res.status(200).json({
            'message' : 'success'
        });
    }

    catch(err) {
        await res.status(500).json({
            'error' : err
        });
    }
};

const deleteVideo = async (req, res, next) => {
    try {
        const videoId = req.params['videoId'];
        await Video.findByIdAndDelete(videoId);
        await res.status(200).json({
            'message' : 'success'
        });
    }

    catch(err) {
        await res.status(500).json({
            'error' : err
        });
    }
};

module.exports = { postVideo, getVideo, updateVideo, deleteVideo };