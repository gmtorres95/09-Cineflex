import "../css/header.css";
import { useHistory } from "react-router";

export function Header() {
    const history = useHistory();
    return (
        <header>
            <ion-icon name="arrow-back-outline" onClick={history.goBack}/>
            CINEFLEX
        </header>
    );
}