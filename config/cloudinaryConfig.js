const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'viicioouous',
    api_key: '916525649235799',
    api_secret: 'HZQ8-nMxR_CWn6H02GpYW4g_z8I'
  });

  exports.uploads = (file) =>{
      return new Promise(resolve => {
          cloudinary.uploader.upload(file, (result) =>{
              resolve({url: result.url, id: result.public_id})
            }, 
              {resource_type: "auto"}
              )
            }
        )
  }