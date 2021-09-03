function addSeat(selected, SetSelected, name) {
    if(!selected.includes(name)) {
        SetSelected([...selected, Number(name)]);
    }
    else {
        SetSelected(selected.filter((seat) => seat !== name));
    }
}

export function Seat({seat, selected, SetSelected}) {
    let seatStyle = (seat.isAvailable) ? " available" : " unavailable";
    
    if(selected.includes(Number(seat.name))) seatStyle = " selected";

    if(Number(seat.name) % 10 === 0 && Number(seat.name) < 50) {
        return (
            <>
                <li className={seatStyle} 
                    onClick={() => seat.isAvailable ? addSeat(selected, SetSelected, Number(seat.name)) : ""}
                >{seat.name}</li>
                <li className="dummy" />
            </>
        );
    }
    return (
        <li className={seatStyle} 
            onClick={() => seat.isAvailable ? addSeat(selected, SetSelected, Number(seat.name)) : ""}
        >{("0" + seat.name).slice(-2)}</li>
    );
}