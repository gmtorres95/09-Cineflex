import React from "react";

import { Link } from "react-router-dom";
import Wrapper from "./styles/Wrapper";

export default function Day(props) {
  const { weekday, date, showtimes } = props.day;

  return (
    <Wrapper>
      <span>
        { weekday } - { date }
      </span>

      <div className="showtimes">
        { showtimes.map((showtime) => (
          <Link key={ showtime.id } to={ `/sessao/${ showtime.id }` }>
            { showtime.name }
          </Link>
        ))}
      </div>
    </Wrapper>
  );
}
