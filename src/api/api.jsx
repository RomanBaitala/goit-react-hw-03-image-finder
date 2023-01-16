import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchData = async (q, page) => {
  const searchParams = new URLSearchParams({
    key: '30333972-0d78ef232504ac5f2ddfcaf13',
    image_type: 'photo',
    orientation: 'horizontal',
    q,
    page,
    per_page: 12,
  });
  return await axios.get(`/?${searchParams}`);
};
