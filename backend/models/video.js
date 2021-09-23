const mongoose = require('mongoose')
const Schema = mongoose.Schema

const videoSchema = new Schema({
    location : {
        type : String,
        required : true
    },
    videoURL : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('Video', videoSchema)