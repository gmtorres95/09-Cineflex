import React from "react";

import { Link } from "react-router-dom";
import Showtime from "./Showtime";

export default function Day(props) {
  const { weekday, date, showtimes } = props.day;

  return (
    <>
      <span>
        {weekday} - {date}
      </span>

      <Showtime>
        {showtimes.map((showtime) => (
          <Link key={showtime.id} to={`/sessao/${showtime.id}`}>
            {showtime.name}
          </Link>
        ))}
      </Showtime>
    </>
  );
}
