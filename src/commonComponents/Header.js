import "../css/header.css";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";

export function Header() {
    const history = useHistory();
    const location = useLocation();
    return (
        <header>
            {location.pathname !== "/" ? <ion-icon name="arrow-back-outline" onClick={history.goBack}/> : ""}
            CINEFLEX
        </header>
    );
}