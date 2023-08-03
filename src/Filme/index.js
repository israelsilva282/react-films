import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../services/api';
import './filme-info.css';

function Filme() {

    const { id } = useParams();
    const navigation = useNavigate();

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
                navigation("/", { replace: true })
                return
            })
        }
        loadFilme();

        return () => console.log("componente foi desmontado")
    }, [navigation, id]);

    function salvarFilme() {
        const minhaLista = localStorage.getItem("@reactfilms");

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id);

        if (hasFilme) {
            toast.warn("Filme já está na sua lista")
            return
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@reactfilms", JSON.stringify(filmesSalvos));
        toast.success("Filme adicionado com sucesso")
    }

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
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a href={`https://youtube.com/results?search_query=${filme.title} Trailer`} target='_blank' rel="external noreferrer">Trailer</a>
                </button>
            </div>
        </div>
    )
}

export default Filme