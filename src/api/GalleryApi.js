import axios from 'axios';

export const fetchImages = async (query, page) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '17067261-d096522309c4f7c33a0f4f98e';

  const response = await axios.get(
    `${BASE_URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  console.log('response', response);
  console.log('response.data', response.data);
  return response.data;
};
