import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import OrderContext from "../../contexts/OrderContext";
import postOrder from "../../services/postOrder";
import Wrapper from "./SuccessWrapper";
import TopBar from "../../commonStyles/TopBar";
import Information from "./Information";
import StyledButton from "../../commonStyles/StyledButton";

export default function Success() {
  const { session, order } = useContext(OrderContext);
  const [isOrderDone, SetIsOrderDone] = useState(false);
  const showtime = `${session.day.date} ${session.name}`
  
  useEffect(() => postOrder(order, SetIsOrderDone), [order]);

  if (isOrderDone)
    return (
      <Wrapper>
        <TopBar success>Pedido feito com sucesso!</TopBar>

        <Information head={"Filme e sessão"} description={[session.movie.title, showtime]} />
        <Information head={"Ingressos"} description={order.ids.map((seat) => `Assento ${seat % 50}`)} />
        <Information head={"Comprador"} description={[`Nome: ${order.name}`, `CPF: ${order.cpf}`]} />

        <Link to="/">
          <StyledButton>Voltar para tela incial</StyledButton>
        </Link>
      </Wrapper>
    );

  return "carregando...";
}
