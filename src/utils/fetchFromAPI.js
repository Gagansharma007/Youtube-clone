import axios from 'axios';
const BASE_URL = `https://www.googleapis.com/youtube/v3`;
const key = process.env.REACT_APP_YOUTUBE_KEY;

const options = {
    params: {
        maxResults: '50',
        key: key,
    },
}
export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
}