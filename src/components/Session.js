import "../css/session.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "./Footer";

const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes";

function footerUpdate({movie, name, day}) {
    return {
        title: movie.title,
        src: movie.posterURL,
        day: `${day.weekday} - ${name}`
    };
}

function Seat({seat}) {
    let seatStyle = (seat.isAvailable) ? "available" : "unavailable";
    const [selected, SetSelected] = useState(false);

    if(selected) seatStyle = "selected";

    if(Number(seat.name) % 10 === 0 && Number(seat.name) < 50) {
        return (
            <>
                <li className={seatStyle} onClick={() => seat.isAvailable ? SetSelected(!selected) : ""}>{seat.name}</li>
                <li className="dummy" />
            </>
        );
    }
    return (
        <li className={seatStyle} onClick={() => seat.isAvailable ? SetSelected(!selected) : ""}>{seat.name}</li>
    );
}

export function Session() {
    const params = useParams();
    const sessionURL = `${URL}/${params.idSession}/seats`;
    const [session, SetSession] = useState();
    let footer;

    useEffect(() => {axios(sessionURL).then((resp) => SetSession(resp.data));}, []);

    if(session) footer = footerUpdate(session);

    return (
        <>
            <div className="top-bar">Selecione o(s) assento(s)</div>
            <ul className="seats">
                {session ? session.seats.map((seat) => 
                    <Seat 
                        seat={seat} 
                        key={seat.id}
                    />) : ""}
            </ul>



            {session ? <Footer src={footer.src} title={footer.title} day={footer.day}/> : ""}
        </>
    );
}