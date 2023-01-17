import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '30333972-0d78ef232504ac5f2ddfcaf13';
const PHOTO_PER_PAGE = 12;

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: PHOTO_PER_PAGE,
};

export const fetchData = async (q, page) => {
  const searchParams = new URLSearchParams({
    q,
    page,
  });
  return await axios.get(`/?${searchParams}`);
};
