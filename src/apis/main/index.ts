import axios from "axios";


const fetchPosts = async () => {
    const accessToken = localStorage.getItem('accessToken');
    const response = await axios.get('/api/posts', {
        headers: {
            Authorization: `Bearer as ${accessToken}`,
        }
    });
    return response.data;
};

export default fetchPosts;