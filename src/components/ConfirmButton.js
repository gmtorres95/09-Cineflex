import "../css/confirm-button.css";
import axios from "axios";
import { useEffect } from "react";

function validateName(name) {
    name = name.replace(/[a-zãõáéíóúàèìòùç'-]/gi, "").replace(/ /g, "");
    if(name === "") return true;
    else return false;
}

function validateCpf(cpf) {
    if(cpf[3] === "." && cpf[7] && cpf[11] == "-") {
        cpf = cpf.replace(".", "").replace(".", "").replace("-","");
    }
    if(cpf % 1 !== 0 || cpf < 10000000000 || cpf > 99999999999) return false;
    return cpf;
}

function validateOrder({name, cpf, ids}) {
    const isNameValid = validateName(name);
    const isCpfValid = validateCpf(cpf);

    if(ids.length === 0) {
        alert("Selecione o(s) assento(s)");
        return false;
    }
    
    if(!isNameValid || !name) {
        alert("Insira um nome válido");
        return false;
    }

    if(name.length > 30) {
        alert("Nome não pode contar mais do que 30 caracteres");
        return false;
    }

    if(!isCpfValid) {
        alert("CPF inválido");
        return false;
    }

    return true;
}

function order({clientName, clientCpf, selected}) {
    const postURL = "https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many";
    const postOrder = {
        ids: selected,
        name: clientName,
        cpf: clientCpf
    };

    const isOrderValid = validateOrder(postOrder);

    if(isOrderValid) {
        const promise = axios.post(postURL, postOrder)
        promise.then(() => console.log("Sucesso!"));
        promise.catch(() => alert(`Erro no servidor\nTente novamente`));
    }
}

export function ConfirmButton(props) {
    return (
        <div className="button" onClick={() => order(props)}>Reservar assento(s)</div>
    );
}