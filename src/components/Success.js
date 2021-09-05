import "../css/success.css";
import { Information } from "./Information";
import { HomeButton } from "./HomeButton";

export function Success() {
    const data = [
        {
            title: "Filme e sessão",
            info: [
                "Enola Holmes",
                "24/06/2021 15:00"
        ]
        },
        {
            title: "Ingressos",
            info: [
                "Assento 15",
                "Assento 16"
            ]
        },
        {
            title: "Comprador",
            info: [
                "Nome: João da Silva Sauro",
                "CPF: 123.456.789-10"
            ]
        }
    ];
    
    return (
        <>
            <div className="top-bar success">Pedido feito com sucesso!</div>
            {data.map((e, i) => <Information data={e} key={i}/>)}
            <HomeButton />
        </>
    );
}