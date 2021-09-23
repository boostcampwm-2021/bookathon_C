const { postVideo, getVideo, updateVideo, deleteVideo } = require('../controllers/video')
const randomChoice = require('../controllers/randomChoice');
const express = require('express');
const router = express.Router();

router.post('/', postVideo);

router.get('/random',randomChoice);
router.get('/:videoId', getVideo);

router.put('/:videoId', updateVideo);

router.delete('/:videoId', deleteVideo);




module.exports = router