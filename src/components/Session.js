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

export function Session() {
    const params = useParams();
    const sessionURL = `${URL}/${params.idSession}/seats`;
    const [session, SetSession] = useState();
    let footer;

    useEffect(() => {axios(sessionURL).then((resp) => SetSession(resp.data));}, []);

    if(session) footer = footerUpdate(session);

    // console.log(session);

    return (
        <>
            <div className="top-bar">Selecione o(s) assento(s)</div>
            {session ? <Footer src={footer.src} title={footer.title} day={footer.day}/> : ""}
        </>
    );
}