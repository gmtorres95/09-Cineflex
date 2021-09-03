import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/home.css";

const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies";

function MovieButton({src, title, id}) {
    return (
        <Link className="poster" to={`/movie/${id}`}>
            <img src={src} alt={title} />
        </Link>
    );
}

export function Home() {
    const [movies, SetMovies] = useState([]);
    useEffect(() => {axios(URL).then((resp) => SetMovies(resp.data))}, []);
    return (
        <>
            <div className="top-bar">Selecione o filme</div>
            <div className="posters">
                {movies.length > 0 ? movies.map((movie) => <MovieButton src={movie.posterURL} title={movie.title} id={movie.id} key={movie.id}/>) : "carregando..."}
            </div>
        </>
    );
}