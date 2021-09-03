import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/home.css";

const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies";

function MovieButton({src, title, id}) {
    const path = `/movie/${id}`;
    return (
        <Link className="poster" to={path}>
            <img src={src} alt={title} />
        </Link>
    );
}

export function Home() {
    const [movies, SetMovies] = useState([]);
    useEffect(() => {axios(URL).then((resp) => SetMovies(resp.data))}, []);
    return (
        <>
            <div className="top-bar" onClick={() => console.log(movies)} >Selecione o filme</div>
            <div className="posters">
                {movies.length > 0 ? movies.map((movie) => <MovieButton src={movie.posterURL} title={movie.title} id={movie.id}/>) : "carregando..."}
            </div>
        </>
    );
}