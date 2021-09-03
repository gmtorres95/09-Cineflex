import "../css/session.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "./Footer";
import { Seat } from "./Seat";

const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes";

function footerUpdate({movie, name, day}) {
    return {
        title: movie.title,
        src: movie.posterURL,
        day: `${day.weekday} - ${name}`
    };
}

function Legend() {
    return (
        <div className="legend">
            <div>
                <li className="seat selected" />
                <span>Selecionado</span>
            </div>
            <div>
                <li className="seat available" />
                <span>Disponível</span>
            </div>
            <div>
                <li className="seat unavailable" />
                <span>Indisponível</span>
            </div>
        </div>
    );
}

export function Session() {
    const params = useParams();
    const sessionURL = `${URL}/${params.idSession}/seats`;
    const [session, SetSession] = useState();
    const [selected, SetSelected] = useState([]);
    let footer;

    useEffect(() => {axios(sessionURL).then((resp) => SetSession(resp.data));}, []);

    if(session) footer = footerUpdate(session);

    return (
        <>
            <div className="top-bar">Selecione o(s) assento(s)</div>
            <ul className="seats">
                {session ? session.seats.map((seat) => 
                    <Seat seat={seat} key={seat.id}selected={selected}SetSelected={SetSelected}/>) : ""
                }
            </ul>
            <Legend />


            {session ? <Footer src={footer.src} title={footer.title} day={footer.day}/> : ""}
        </>
    );
}