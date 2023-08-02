import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
// Chave da API: 85b4aa43936f2e42349897e7d5a612be
//URL DA API: /movie/now_playing?api_key=85b4aa43936f2e42349897e7d5a612be&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;