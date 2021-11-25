import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";

import OrderContext from "../../contexts/OrderContext";
import getSeats from "../../services/getSeats";
import TopBar from "../../commonStyles/TopBar";
import Wrapper from "./SessionWrapper";
import Seat from "./Seat";
import Legend from "./Legend";
import DetailsFields from "./DetailsFields";
import StyledButton from "../../commonStyles/StyledButton";

export default function Session() {
  const [selected, setSelected] = useState([]);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const { session, setSession, setOrder } = useContext(OrderContext);
  const sessionId = useParams().sessionId;
  const history = useHistory();

  useEffect(() => getSeats(sessionId, setSession), [sessionId, setSession]);

  function submitHelper(e) {
    e.preventDefault();
    if (!selected.length) {
      alert("Selecione ao menos um assento");
      return;
    }
    setOrder({ ids: selected, name, cpf });
    history.push('/success');
  }

  if (session) {
    return (
      <Wrapper>
        <TopBar>Selecione o(s) assento(s)</TopBar>

        <ul>
          {session.seats.map((seat) => (
            <Seat
              seat={seat}
              key={seat.id}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </ul>
        <Legend />

        <form onSubmit={submitHelper}>
          <DetailsFields
            name={name}
            setName={setName}
            cpf={cpf}
            setCpf={setCpf}
          />
          {<StyledButton>Reservar assento(s)</StyledButton>}
        </form>
      </Wrapper>
    );
  }

  return "carregando...";
}
