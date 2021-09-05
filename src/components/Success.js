import "../css/success.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Information } from "./Information";
import { HomeButton } from "./HomeButton";

function order(name, cpf, seats, SetIsOrderDone) {
    const postURL = "https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many";
    const postOrder = {
        ids: seats,
        name,
        cpf
    };

    const promise = axios.post(postURL, postOrder)
    promise.then(() => SetIsOrderDone(true));
    promise.catch(() => {alert(`Erro no servidor\nTente novamente`)});
}

export function Success(props) {
    const {
        title,
        session,
        seats,
        name,
        cpf
    } = props.order;
    const orderInfo = [
        {
            head: "Filme e sessão",
            description: [
                title,
                session
        ]
        },
        {
            head: "Ingressos",
            description: seats.map((seat) => `Assento ${seat % 50}`)
        },
        {
            head: "Comprador",
            description: [
                `Nome: ${name}`,
                `CPF: ${cpf}`
            ]
        }
    ];
    const [isOrderDone, SetIsOrderDone] = useState(false);

    useEffect(() => order(name, cpf, seats, SetIsOrderDone), []);

    return (
        <>
            <div className="top-bar success">Pedido feito com sucesso!</div>
            {isOrderDone ? orderInfo.map((info, i) => <Information key={i} info={info} />) : "carregando..."}
            <HomeButton path="/" text="Voltar pra Home" />
        </>
    );
}