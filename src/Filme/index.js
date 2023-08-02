import React, { useEffect, useState } from 'react';
import { redirect, useParams } from 'react-router-dom';
import api from '../services/api';
import './filme-info.css';

function Filme() {

    const { id } = useParams();
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "85b4aa43936f2e42349897e7d5a612be",
                    language: "pt-BR",
                }
            }).then((response) => {
                setFilme(response.data);
                setLoading(false);
            }).catch(() => {
                redirect("/")
            })
        }
        loadFilme();

        return () => console.log("componente foi desmontado")
    }, [id]);

    if (loading) {
        return (
            <div className='filme-info'>
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    return (
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            <h3>Sinopse</h3>
            <p>{filme.overview}</p>

            <strong>Avaliação: {filme.vote_average.toFixed(2)}/10</strong>

            <div className='area-buttons'>
                <button>Salvar</button>
                <button>
                    <a href="#">Trailer</a>
                </button>
            </div>
        </div>
    )
}

export default Filme