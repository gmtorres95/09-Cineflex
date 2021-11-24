import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyle from "./commonStyles/GlobalStyle";

import { Header } from "./commonComponents/Header/Header";
import { Home } from "./pages/Home/Home";
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
      cpf,
    });
  };

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie/:movieId" component={Movie} />
        <Route exact path="/sessao/:sessionId">
          <Session updateOrder={updateOrder} />
        </Route>
        <Route exact path="/success">
          <Success order={order} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
