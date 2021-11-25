import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import OrderContext from "./contexts/OrderContext";
import GlobalStyle from "./commonStyles/GlobalStyle";
import Header from "./commonComponents/Header/Header";
import Home from "./pages/Home/Home";
import Showtimes from "./pages/Showtimes/Showtimes";
import Session from "./pages/Session/Session";
import Success from "./pages/Success/Success";
import Footer from "./commonComponents/Footer/Footer";

export default function App() {
  const [movie, setMovie] = useState();
  const [session, setSession] = useState();
  const [order, setOrder] = useState();

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <OrderContext.Provider value={{ movie, setMovie, session, setSession, order, setOrder }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/success" component={Success} />
          <>
            <Footer />
            <Route exact path="/showtimes/:movieId" component={Showtimes} />
            <Route exact path="/sessao/:sessionId" component={Session} />
          </>
        </Switch>
      </OrderContext.Provider>
    </BrowserRouter>
  );
}
