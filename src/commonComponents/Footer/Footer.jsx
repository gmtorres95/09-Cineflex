import React, { useContext } from "react";

import OrderContext from "../../contexts/OrderContext";
import MovieCover from "../../commonStyles/MovieCover";
import Wrapper from "./FooterWrapper";
import Cover from "./Cover";

export default function Footer() {
  const { movie, session } = useContext(OrderContext);
  let posterURL;
  let title;

  if (session) {
    posterURL = session.movie.posterURL;
    title = session.movie.title;
  }
  else if (movie) {
    posterURL = movie.posterURL;
    title = movie.title;
  }

  return (
    <Wrapper>
      <Cover>
        {movie || session ? <MovieCover footer src={posterURL} alt={title} /> : ''}
      </Cover>
      <div>
        {movie || session ? <p>{title}</p> : 'carregando...'}
        {session ? <p>{session.day.date} - {session.name}</p> : ''}
      </div>
    </Wrapper>
  );
}
