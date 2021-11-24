import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopBar from "../../commonStyles/TopBar";

import getMovies from "../../services/getMovies";
import MoviesGrid from "./styles/MoviesGrid";
import Wrapper from "./styles/Wrapper";

export function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => getMovies(setMovies), []);

  return (
    <Wrapper>
      <TopBar>Selecione o filme</TopBar>
      <MoviesGrid>
        { movies.length > 0
          ? movies.map((movie) => (
              <Link to={ `/movie/${ movie.id }` } key={ movie.id }>
                <img src={ movie.posterURL } alt={ movie.title } />
              </Link>
            ))
          : "carregando..." }
      </MoviesGrid>
    </Wrapper>
  );
}
