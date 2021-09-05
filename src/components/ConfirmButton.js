import "../css/button.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export function ConfirmButton({title, day, time, seats, name, cpf, updateOrder}) {
    return (
        <Link 
            to="/sucesso"
            className="button"
            onClick={() => updateOrder(title, day, time, seats, name, cpf)}
        >Reservar assento(s)</Link>
    );
}