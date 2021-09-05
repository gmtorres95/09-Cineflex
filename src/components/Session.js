import "../css/session.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "./Footer";
import { Seat } from "./Seat";
import { Legend } from "./Legend";
import { Input } from "./Input";
import { ConfirmButton } from "./ConfirmButton";

const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes";

function footerUpdate({movie, name, day}) {
    return {
        title: movie.title,
        src: movie.posterURL,
        day: `${day.weekday} - ${name}`
    };
}

export function Session({updateOrder}) {
    const [session, SetSession] = useState();
    const [selected, SetSelected] = useState([]);
    const [clientName, SetClientName] = useState("");
    const [clientCpf, SetClientCpf] = useState("");
    const params = useParams();
    const sessionURL = `${URL}/${params.idSession}/seats`;
    let footer;
    const imputs = [
        {
            title: "Nome do comprador:",
            placeholder: "Digite seu nome...",
            SetInfo: SetClientName
        },
        {
            title: "CPF do comprador:",
            placeholder: "Digite seu CPF...",
            SetInfo: SetClientCpf
        }
    ];

    useEffect(() => {axios(sessionURL).then((resp) => SetSession(resp.data));}, []);

    if(session) footer = footerUpdate(session);
    
    return (
        <div className="session">
            <div className="top-bar">Selecione o(s) assento(s)</div>
            <ul className="seats">
                {session ? session.seats.map((seat) => 
                    <Seat seat={seat} key={seat.id} selected={selected} SetSelected={SetSelected}/>) : ""
                }
            </ul>
            <Legend />
            {imputs.map((imput, i) => <Input imput={imput} key={i} />)}
            {session ? 
            <ConfirmButton 
                title={session.movie.title}
                day={session.day.date}
                time={session.name}
                seats={selected}
                name={clientName}
                cpf={clientCpf}
                updateOrder={updateOrder}
            /> : "carregando..."}
            {session ? <Footer src={footer.src} title={footer.title} day={footer.day}/> : ""}
        </div>
    );
}