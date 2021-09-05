import "../css/reset.css";
import "../css/styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./Home";
import { Movie } from "./Movie";
import { Session } from "./Session";
import { Success } from "./Success";
import { useState } from "react";

export default function App() {
    const [order, SetOrder] = useState({});

    const updateOrder = (title, day, time, seats, name, cpf) => {
        SetOrder({
          title,
          day: `${day} ${time}`,
          seats,
          name,
          cpf
        });
    }

    console.log(order)

    return (
        <BrowserRouter>
            <Header />
			<Switch>
                <Route exact path="/" component={Home} />
				<Route exact path="/movie/:idMovie" component={Movie} />
                <Route exact path="/sessao/:idSession">
                    <Session updateOrder={updateOrder} />
                </Route>
                <Route exact path="/sucesso" component={Success} />
			</Switch>
		</BrowserRouter>
    );
}