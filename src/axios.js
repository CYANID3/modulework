import axios from 'axios';

const instance = axios.create({
  baseURL: "https://pls982019.firebaseio.com/"
});

export default instance;