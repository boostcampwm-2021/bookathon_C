const videoRouter = require('./video')

const express = require('express');
const router = express.Router();

router.use('/video', videoRouter);

module.exports = router