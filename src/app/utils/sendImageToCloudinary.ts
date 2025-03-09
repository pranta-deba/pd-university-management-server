/* eslint-disable prettier/prettier */
import { v2 as cloudinary } from 'cloudinary';
const sendImageToCloudinary = async () => {
  // Configuration
  cloudinary.config({
    cloud_name: 'dfxzi4gis',
    api_key: '888746126451144',
    api_secret: 'Ez56z8hqyLAx0aMrer3yq5yepwg',
  });

  // Upload an image
  const uploadResult = await cloudinary.uploader.upload(
    'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg',
    {
      public_id: 'shoes',
    },
    function (error, result) {
      console.log(result);
    },
  );

  console.log(uploadResult);
};

export default sendImageToCloudinary;
