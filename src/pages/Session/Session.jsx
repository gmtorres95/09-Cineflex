import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";

import getSeats from "../../services/getSeats";
import TopBar from "../../commonStyles/TopBar";
import Footer from "../../commonComponents/Footer/Footer";
import StyledButton from "../../commonStyles/StyledButton";
import Wrapper from "./SessionWrapper";
import Seat from "./Seat";
import Legend from "./Legend";
import BookForm from "./BookForm";

function footerUpdate({ movie, name, day }) {
  return {
    title: movie.title,
    src: movie.posterURL,
    day: `${day.weekday} - ${name}`,
  };
}

export default function Session({ updateOrder }) {
  const [session, setSession] = useState();
  const [selected, SetSelected] = useState([]);
  const [clientName, setClientName] = useState("");
  const [clientCpf, setClientCpf] = useState("");
  const sessionId = useParams().sessionId;
  const history = useHistory();
  let footer;

  useEffect(() => getSeats(sessionId, setSession), [sessionId]);

  if (session) footer = footerUpdate(session);

  function submitHelper(e) {
    e.preventDefault();
    updateOrder(
      session.movie.title,
      session.day.date,
      session.name,
      selected,
      clientName,
      clientCpf
    );
    history.push("/success");
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
              SetSelected={SetSelected}
            />
          ))}
        </ul>

        <Legend />

        <form onSubmit={submitHelper}>
          <BookForm
            name={clientName}
            setName={setClientName}
            cpf={clientCpf}
            setCpf={setClientCpf}
          />

          {<StyledButton>Reservar assento(s)</StyledButton>}
        </form>

        <Footer src={footer.src} title={footer.title} day={footer.day} />
      </Wrapper>
    );
  }

  return "carregando...";
}
