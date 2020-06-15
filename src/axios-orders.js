import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-b846e.firebaseio.com/'
});

export default instance;