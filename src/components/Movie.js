import "../css/movie.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies";

export function Movie() {
    const params = useParams();
    const movieURL = `${URL}/${params.idMovie}/showtimes`;
    const [movie, SetMovie] = useState()

    useEffect(() => axios(movieURL).then((resp) => SetMovie(resp.data.days)), []);

    console.log(movie)



    return (
        <div className="top-bar">Selecione o horário</div>
    );
}