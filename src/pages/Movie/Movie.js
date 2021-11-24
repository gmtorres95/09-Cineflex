import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "../../css/movie.css";

import { Footer } from "../../commonComponents/Footer";
import getShowtimes from "../../services/getShowtimes";

function Day(props) {
    const {
        weekday,
        date,
        showtimes
    } = props.day;

    return (
        <div className="day">
            <span>{weekday} - {date}</span>
            <div className="showtimes">
                {showtimes.map(showtime => <Link className="showtime" key={showtime.id} to={`/sessao/${showtime.id}`}>{showtime.name}</Link>)}
            </div>
        </div>
    );

}

export function Movie() {
    const [movie, setMovie] = useState();
    const movieId = useParams().movieId;

    useEffect(() => getShowtimes(movieId, setMovie), [movieId]);
    
    return (
        <div className="movies">
            <div className="top-bar">Selecione o horário</div>
            {movie ? movie.days.map((day) => <Day day={day} key={day.id} />) : "carregando..."}
            {movie ? <Footer src={movie.posterURL} title={movie.title} /> : ""}
        </div>
    );
}