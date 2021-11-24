import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../../css/home.css";

import getMovies from "../../services/getMovies";

function MovieButton({src, title, id}) {
    return (
        <Link className="poster" to={`/movie/${id}`}>
            <img src={src} alt={title} />
        </Link>
    );
}

export function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => getMovies(setMovies), []);

    return (
        <>
            <div className="top-bar">Selecione o filme</div>
            <div className="posters">
                {movies.length > 0 ? movies.map((movie) => <MovieButton src={movie.posterURL} title={movie.title} id={movie.id} key={movie.id}/>) : "carregando..."}
            </div>
        </>
    );
}