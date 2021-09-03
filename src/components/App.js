import "../css/reset.css";
import "../css/styles.css";
import { Header } from "./Header";
import { Home } from "./Home";
import { Movie } from "./Movie";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
			<Switch>
				<Route path="/" exact>
                    <Home />
				</Route>
				<Route path="/movie/:idMovie" exact>
					<Movie />
				</Route>
			</Switch>
		</BrowserRouter>
    );
}