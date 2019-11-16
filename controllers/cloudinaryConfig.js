const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');

dotenv.config();

// set your env variable CLOUDINARY_URL or set the following configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

exports.uploads = filename => {
  cloudinary.uploader.upload(filename, (error, result) => {
    if (error) {
      throw error;
    }
    // eslint-disable-next-line no-undef
    response.send({ url: result.url, id: result.public_id });
  });
};
