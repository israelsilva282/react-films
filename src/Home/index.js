import React, { useEffect, useState } from 'react';
import api from '../services/api';

function Home() {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "85b4aa43936f2e42349897e7d5a612be",
                    language: "pt-BR",
                    page: 1,
                }
            })

            console.log(response.data)
        }

        loadFilmes();
    }, [])


    return (
        <div>Home</div>
    )
}

export default Home