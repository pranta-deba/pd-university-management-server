/* eslint-disable prettier/prettier */
import { v2 as cloudinary } from 'cloudinary';
import config from '../config';
const sendImageToCloudinary = async () => {
  // Configuration
  cloudinary.config({
    cloud_name: config.cloudinary_cloud_name,
    api_key: config.cloudinary_api_key,
    api_secret: config.cloudinary_api_secret,
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
