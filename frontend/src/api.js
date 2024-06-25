import axios from 'axios';

const API_URL = 'http://localhost:9090/auth'; 

export const login = (username, password) => {
    return axios.post(`${API_URL}/login`, { username, password }, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
};

export const signup = (username, password) => {
    return axios.post(`${API_URL}/signup`, { username, password }, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
};
