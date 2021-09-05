import "../css/button.css";
import { Link } from "react-router-dom";

export function HomeButton() {
    return (
        <Link to="/" className="button">Voltar pra Home</Link>
    );
}