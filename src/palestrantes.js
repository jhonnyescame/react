import axios from 'axios';

const palestrantes = axios.create({
    baseURL: 'https://api.padraoeditorial.com.br/whow/api/palestrantes'
});

export default palestrantes;