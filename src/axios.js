import axios from 'axios'

const instance = axios.create({
    baseURL: "https://tiktok-back-test.herokuapp.com/"
});

export default instance