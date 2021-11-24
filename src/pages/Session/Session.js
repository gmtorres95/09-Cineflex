import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "../../css/session.css";

import { ConfirmButton } from "./components/ConfirmButton";

import { Footer } from "../../commonComponents/Footer";
import { Seat } from "./components/Seat";
import { Legend } from "./components/Legend";
import { Input } from "./components/Input";
import getSeats from "../../services/getSeats";

function footerUpdate({movie, name, day}) {
    return {
        title: movie.title,
        src: movie.posterURL,
        day: `${day.weekday} - ${name}`
    };
}

export function Session({updateOrder}) {
    const [session, setSession] = useState();
    const [selected, SetSelected] = useState([]);
    const [clientName, SetClientName] = useState("");
    const [clientCpf, SetClientCpf] = useState("");
    const sessionId = useParams().sessionId;
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

    useEffect(() => getSeats(sessionId, setSession), [sessionId]);

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