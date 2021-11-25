import React from "react";

import Wrapper from "./DetailsFieldsWrapper";
import StyledInput from "./StyledInput";

export default function DetailsFields({ name, setName, cpf, setCpf }) {
  return (
    <Wrapper>
      <p>Nome do comprador:</p>
      <StyledInput
        type="text"
        placeholder="Digite seu nome..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        minLength="3"
        required
      />
      
      <p>CPF do comprador:</p>
      <StyledInput
        type="text"
        placeholder="Digite seu CPF..."
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        maxLength="14"
        pattern="^((\d{3}\.){2}\d{3}-\d{2}|(\d{11}))$"
        required
      />
    </Wrapper>
  );
}
