import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";

import { Footer } from "../../commonComponents/Footer/Footer";
import { Seat } from "./components/Seat/Seat";
import { Legend } from "./components/Legend/Legend";
import getSeats from "../../services/getSeats";

import TopBar from "../../commonStyles/TopBar";
import Wrapper from "./styles/Wrapper";
import BookForm from "./components/BookForm/BookForm";
import StyledButton from "../../commonStyles/StyledButton";

function footerUpdate({ movie, name, day }) {
  return {
    title: movie.title,
    src: movie.posterURL,
    day: `${day.weekday} - ${name}`,
  };
}

export function Session({ updateOrder }) {
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

  return (
    <Wrapper>
      <TopBar>Selecione o(s) assento(s)</TopBar>

      <ul>
        {session
          ? session.seats.map((seat) => (
              <Seat
                seat={seat}
                key={seat.id}
                selected={selected}
                SetSelected={SetSelected}
              />
            ))
          : ""}
      </ul>

      <Legend />

      <form onSubmit={submitHelper}>
        <BookForm
          name={clientName}
          setName={setClientName}
          cpf={clientCpf}
          setCpf={setClientCpf}
        />

        {session ? (
          <StyledButton>Reservar assento(s)</StyledButton>
        ) : (
          "carregando..."
        )}
      </form>

      {session ? (
        <Footer src={footer.src} title={footer.title} day={footer.day} />
      ) : (
        ""
      )}
    </Wrapper>
  );
}
