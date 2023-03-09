import axios from "axios";

export const api = axios.create({ 
    baseURL: 'https://tasks-yyo7.onrender.com/'
})