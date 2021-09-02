import axios from 'axios';

export const uploadImage = async (imageData: any) => {
  const response = await axios.post(`https://api.imgbb.com/1/upload`, imageData);
  const {
    data: { display_url },
  } = response.data;

  return display_url;
};

export const makeImageFormData = (image: any) => {
  const newImageData = new FormData();
  newImageData.append('image', image);
  newImageData.append('key', process.env.REACT_APP_IMAGEBB_API_KEY);
  return newImageData;
};
