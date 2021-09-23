const { postVideo, getVideo, updateVideo, deleteVideo } = require('../controllers/video')

const express = require('express');
const router = express.Router();

router.post('/', postVideo);

router.get('/:videoId', getVideo);

router.put('/:videoId', updateVideo);

router.delete('/:videoId', deleteVideo);

module.exports = router