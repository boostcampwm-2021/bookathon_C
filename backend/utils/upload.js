require('dotenv').config();
const AWS = require('aws-sdk');
const fs = require('fs');
const endpoint = new AWS.Endpoint(process.env.STORAGE_URL);
const region = 'kr-standard';
const access_key = process.env.ACCESS_KEY;
const secret_key = process.env.SECRET_KEY;

const S3 = new AWS.S3({
    endpoint: endpoint,
    region: region,
    credentials: {
        accessKeyId : access_key,
        secretAccessKey: secret_key
    }
});

const uploadVideo = async function(videoPath) {
    const path = require('path');
    const bucket_name = process.env.BUCKET_NAME;
    const local_file_path = videoPath;
    const file_ext = path.extname(local_file_path)
    
    const folder_name = `${bucket_name}-video/`;
    
    await S3.putObject({
        Bucket: bucket_name,
        Key: folder_name
    }).promise();

    const video_file_name = `${Date.now()}${file_ext}`
    const upload_path = `everywhere-video/${video_file_name}`;

    await S3.putObject({
        Bucket: bucket_name,
        Key: upload_path,
        ACL: 'public-read',
        Body: fs.createReadStream(local_file_path)
    }).promise();

    const storageURL = path.join(process.env.STORAGE_URL, bucket_name, folder_name, video_file_name);

    return storageURL;
}

module.exports = uploadVideo;