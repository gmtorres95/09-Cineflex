import Wrapper from "./styles/Wrapper";

function addSeat(selected, SetSelected, id) {
  if (!selected.includes(id)) {
    SetSelected([...selected, Number(id)]);
  } else {
    SetSelected(selected.filter((seat) => seat !== id));
  }
}

export function Seat({ seat, selected, SetSelected }) {
  const isSelected = !!selected.includes(Number(seat.id));

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
