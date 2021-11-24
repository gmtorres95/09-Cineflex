import { useEffect, useState } from "react";

import "../../css/success.css";

import { Information } from "./components/Information";
import { HomeButton } from "./components/HomeButton";
import postOrder from "../../services/postOrder";

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

    useEffect(() => postOrder({ ids: seats, name, cpf}, SetIsOrderDone), [seats, name, cpf]);

    return (
        <>
            <div className="top-bar success">Pedido feito com sucesso!</div>
            {isOrderDone ? orderInfo.map((info, i) => <Information key={i} info={info} />) : "carregando..."}
            <HomeButton path="/" text="Voltar pra Home" />
        </>
    );
}