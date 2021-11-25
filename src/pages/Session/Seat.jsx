import React from "react";

import showAlert from "../../helpers/showAlert";
import Wrapper from "./SeatWrapper";

export default function Seat({ seat, selected, setSelected }) {
  const isSelected = !!selected.includes(Number(seat.id));
  const id = Number(seat.id)

  function addSeat() {
    if (!selected.includes(seat.id)) {
      setSelected([...selected, id]);
    } else {
      setSelected(selected.filter((seat) => seat !== id));
    }
  }

  return (
    <Wrapper
      isAvailable={seat.isAvailable}
      isSelected={isSelected}
      onClick={() =>
        seat.isAvailable
          ? addSeat()
          : showAlert({ title: "Esse assento não está disponível" })
      }
    >
      {seat.name.padStart(2, "0")}
    </Wrapper>
  );
}
