import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import OrderContext from "../../contexts/OrderContext";
import getShowtimes from "../../services/getShowtimes";
import TopBar from "../../commonStyles/TopBar";
import List from "./List";
import Day from "./Day";

export default function Showtimes() {
  const { movie, setMovie, setSession } = useContext(OrderContext);
  const { movieId } = useParams();

  useEffect(() => {
    setSession();
    getShowtimes(movieId, setMovie);
  }, [movieId, setMovie, setSession]);

  if (movie) {
    return (
      <>
        <TopBar>Selecione o horário</TopBar>
        <List>
          {movie.days.map((day) => (
            <Day day={day} key={day.id} />
          ))}
        </List>
      </>
    );
  }

  return "carregando...";
}
