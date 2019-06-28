import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.134:3001/api'
    // baseURL: 'https://rocketseat-node.herokuapp.com/api'
});

export default api;