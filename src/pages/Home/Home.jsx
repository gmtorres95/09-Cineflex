import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import getMovies from "../../services/getMovies";
import TopBar from "../../commonStyles/TopBar";
import MoviesGrid from "./MoviesGrid";
import MovieCover from "../../commonStyles/MovieCover";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => getMovies(setMovies), []);

  if (movies.length) {
    return (
      <>
        <TopBar>Selecione o filme</TopBar>
        <MoviesGrid>
          {movies.map((movie) => (
            <Link to={`/showtimes/${movie.id}`} key={movie.id}>
              <MovieCover src={movie.posterURL} alt={movie.title} />
            </Link>
          ))}
        </MoviesGrid>
      </>
    );
  }

  return "carregando...";
}
