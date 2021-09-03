function addSeat(selected, SetSelected, id) {
    if(!selected.includes(id)) {
        SetSelected([...selected, Number(id)]);
    }
    else {
        SetSelected(selected.filter((seat) => seat !== id));
    }
}

export function Seat({seat, selected, SetSelected}) {
    let seatStyle = (seat.isAvailable) ? "available" : "unavailable";
    const text = "Esse assento não está disponível";
    
    if(selected.includes(Number(seat.id))) seatStyle = "selected";

    if(Number(seat.name) % 10 === 0 && Number(seat.name) < 50) {
        return (
            <>
                <li className={seatStyle} 
                    onClick={() => seat.isAvailable ? addSeat(selected, SetSelected, Number(seat.id)) : alert(text)}
                >{seat.name}</li>
                <li className="dummy" />
            </>
        );
    }
    return (
        <li className={seatStyle} 
            onClick={() => seat.isAvailable ? addSeat(selected, SetSelected, Number(seat.id)) : alert(text)}
        >{("0" + seat.name).slice(-2)}</li>
    );
}