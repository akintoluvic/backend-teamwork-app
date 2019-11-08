const cloudinary = require('cloudinary').v2;

// set your env variable CLOUDINARY_URL or set the following configuration
cloudinary.config({
  cloud_name: 'viicioouous',
  api_key: '916525649235799',
  api_secret: 'HZQ8-nMxR_CWn6H02GpYW4g_z8I'
});


exports.uploads = (filename) => {
  cloudinary.uploader.upload(filename, (error, result) =>{
    if (error) {
      console.log(error)
      throw error}
    response.send({url: result.url, id: result.public_id})
  }
  )
}