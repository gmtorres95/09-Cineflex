import React from "react";

import Wrapper from "./BookFormWrapper";
import StyledInput from "./StyledInput";

export default function BookForm({ name, setName, cpf, setCpf }) {
  return (
    <Wrapper>
      <p>Nome do comprador:</p>
      <StyledInput
        type="text"
        placeholder="Digite seu nome..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      
      <p>CPF do comprador:</p>
      <StyledInput
        type="text"
        placeholder="Digite seu CPF..."
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        maxLength="14"
        required
      />
    </Wrapper>
  );
}
