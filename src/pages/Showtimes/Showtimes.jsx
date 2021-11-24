import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import getShowtimes from "../../services/getShowtimes";
import TopBar from "../../commonStyles/TopBar";
import Footer from "../../commonComponents/Footer/Footer";
import List from "./List";
import Day from "./Day";

export default function Showtimes() {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();

  useEffect(() => getShowtimes(movieId, setMovie), [movieId]);

  if (movie)
    return (
      <>
        <TopBar>Selecione o horário</TopBar>

        <List>
          {movie.days.map((day) => (
            <Day day={day} key={day.id} />
          ))}
        </List>

        <Footer src={movie.posterURL} title={movie.title} />
      </>
    );

  return "carregando...";
}
