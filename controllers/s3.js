const fs = require('fs');
const AWS = require('aws-sdk');

require('dotenv').config();

const s3 = new AWS.S3({
  region: 'us-east-1',
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET
})

const uploadPhoto = (photoName) => {
  console.log(photoName);
  const fileContent = fs.readFileSync(photoName);
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: `${photoName}.jpg`,
    Body: fileContent
  };

  s3.upload(params, function(err, data) {
    if (err) {
      throw err;
    }
    console.log(`Success. ${data.Location}`);
  })
  return Appt.findById(id, (err, photo) => {
    if (err) return;
    appt.photos.push(req.body)
    appt.save((err) => {
      return res.json(appt);
    })
  })
}


module.exports = {
  uploadPhoto
}