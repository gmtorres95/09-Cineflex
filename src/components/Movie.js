import "../css/movie.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Footer } from "./Footer";

const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies";

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
    const params = useParams();
    const movieURL = `${URL}/${params.idMovie}/showtimes`;
    const [movie, SetMovie] = useState()

    useEffect(() => axios(movieURL).then((resp) => SetMovie(resp.data)), []);
    
    return (
        <>
            <div className="top-bar">Selecione o horário</div>
            {movie ? movie.days.map((day) => <Day day={day} key={day.id} />) : "carregando..."}
            {movie ? <Footer src={movie.posterURL} title={movie.title} /> : ""}
        </>
    );
}