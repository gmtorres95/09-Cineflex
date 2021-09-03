import "../css/reset.css";
import "../css/styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./Home";
import { Movie } from "./Movie";
import { Session } from "./Session";
import { Success } from "./Success";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
			<Switch>
                <Route exact path="/" component={Home} />
				<Route exact path="/movie/:idMovie" component={Movie} />
                <Route exact path="/sessao/:idSession" component={Session} />
                <Route exact path="/sucesso" component={Success} />
			</Switch>
		</BrowserRouter>
    );
}