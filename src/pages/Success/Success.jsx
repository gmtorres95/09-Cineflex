import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import postOrder from "../../services/postOrder";
import TopBar from "../../commonStyles/TopBar";
import StyledButton from "../../commonStyles/StyledButton";
import Wrapper from "./SuccessWrapper";
import Information from "./Information";

export default function Success(props) {
  const { title, session, seats, name, cpf } = props.order;
  const [isOrderDone, SetIsOrderDone] = useState(false);

  useEffect(
    () => postOrder({ ids: seats, name, cpf }, SetIsOrderDone),
    [seats, name, cpf]
  );

  if (isOrderDone)
    return (
      <Wrapper>
        <TopBar success>Pedido feito com sucesso!</TopBar>

        <Information head={"Filme e sessão"} description={[title, session]} />
        <Information head={"Ingressos"} description={seats.map((seat) => `Assento ${seat % 50}`)} />
        <Information head={"Comprador"} description={[`Nome: ${name}`, `CPF: ${cpf}`]} />

        <Link to="/">
          <StyledButton>Voltar para tela incial</StyledButton>
        </Link>
      </Wrapper>
    );

  return "carregando...";
}
