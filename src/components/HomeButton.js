import "../css/button.css";
import { Link } from "react-router-dom";

export function HomeButton() {
    return (
        <Link className="button" to="/">Voltar pra Home</Link>
    );
}