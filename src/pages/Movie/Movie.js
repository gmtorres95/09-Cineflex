import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Footer } from "../../commonComponents/Footer/Footer";
import getShowtimes from "../../services/getShowtimes";
import TopBar from "../../commonStyles/TopBar";
import Wrapper from "./styles/Wrapper";
import Day from "./components/Day/Day";

export function Movie() {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();

  useEffect(() => getShowtimes(movieId, setMovie), [movieId]);

  return (
    <Wrapper>
      <TopBar>Selecione o horário</TopBar>
      { movie
        ? movie.days.map((day) => <Day day={ day } key={ day.id } />)
        : "carregando..." }
      { movie ? <Footer src={ movie.posterURL } title={ movie.title } /> : "" }
    </Wrapper>
  );
}
