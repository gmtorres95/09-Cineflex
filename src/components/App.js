import "../css/reset.css";
import "../css/styles.css";
import { Header } from "./Header";
import { Home } from "./Home";
import { Movie } from "./Movie";

export default function App() {
    return (
        <>
            <Header />
            <Home />
            {/* <Movie /> */}
        </>
    );
}