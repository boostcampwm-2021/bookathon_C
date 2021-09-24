const multer = require('multer');
const path = require('path')

const Video = require('../models/video');
const uploadVideo  = require('../utils/upload');

let nameDate;
let nameExt;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `${__dirname}/../videos`)
    },
    filename: function (req, file, cb) {
        nameDate = Date.now();
        nameExt = path.extname(file.originalname);
      cb(null, `${nameDate}${nameExt}`)
    }
  })
  
const fileUpload = multer({ storage : storage }).single('video');

const postVideo = async (req, res, next) => {
    try {
        const location = req.body['location'].length > 0 ? req.body['location'] : 'Somewhere in the earth...';
        const filename = `${nameDate}${nameExt}`;
        const videoURL = `${process.env.HOST_URL}/videos/${filename}`;
        const videoPath = `${__dirname}/../videos/${filename}`;
        const storageURL = await uploadVideo(videoPath)

        const payload = {
            location,
            videoURL,
            storageURL
        };

        await Video.create(payload);
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

module.exports = { fileUpload, postVideo, getVideo, updateVideo, deleteVideo };
