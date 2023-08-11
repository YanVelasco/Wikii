import axios from "axios";
// chamando a url:
export const api = axios.create({
    baseURL: 'https://api.github.com'
})