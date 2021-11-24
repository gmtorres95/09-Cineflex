import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./css/reset.css";
import "./css/styles.css";

import { Header } from "./commonComponents/Header";
import { Home } from './pages/Home/Home';
import { Movie } from "./pages/Movie/Movie";
import { Session } from "./pages/Session/Session";
import { Success } from "./pages/Success/Success";


export default function App() {
    const [order, SetOrder] = useState({});

    const updateOrder = (title, day, time, seats, name, cpf) => {
        SetOrder({
          title,
          session: `${day} ${time}`,
          seats,
          name,
          cpf
        });
    }

    return (
        <BrowserRouter>
            <Header />
			<Switch>
                <Route exact path="/" component={Home} />
				<Route exact path="/movie/:idMovie" component={Movie} />
                <Route exact path="/sessao/:idSession">
                    <Session updateOrder={updateOrder} />
                </Route>
                <Route exact path="/sucesso">
                    <Success order={order} />
                </Route>
			</Switch>
		</BrowserRouter>
    );
}