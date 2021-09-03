import "../css/legend.css"

export function Legend() {
    return (
        <div className="legend">
            <div>
                <li className="seat selected" />
                <span>Selecionado</span>
            </div>
            <div>
                <li className="seat available" />
                <span>Disponível</span>
            </div>
            <div>
                <li className="seat unavailable" />
                <span>Indisponível</span>
            </div>
        </div>
    );
}