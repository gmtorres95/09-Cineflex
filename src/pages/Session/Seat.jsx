import React from "react";

import Wrapper from "./SeatWrapper";

export default function Seat({ seat, selected, SetSelected }) {
  const isSelected = !!selected.includes(Number(seat.id));

  function addSeat() {
    if (!selected.includes(seat.id)) {
      SetSelected([...selected, Number(seat.id)]);
    } else {
      SetSelected(selected.filter((seat) => seat !== Number(seat.id)));
    }
  }

  return (
    <Wrapper
      isAvailable={seat.isAvailable}
      isSelected={isSelected}
      onClick={() =>
        seat.isAvailable
          ? addSeat(selected, SetSelected, Number(seat.id))
          : alert("Esse assento não está disponível")
      }
    >
      {seat.name.padStart(2, "0")}
    </Wrapper>
  );
}
