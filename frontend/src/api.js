import axios from 'axios';

const API_URL = 'http://localhost:9090/api'; // Ajustez cette URL en fonction de votre backend

export const login = (email, password) => {
    return axios.post(`${API_URL}/login`, { email, password });
};

export const signup = (email, password) => {
    return axios.post(`${API_URL}/signup`, { email, password });
};
