import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Team from "./Team";
import Home from "./Home";

export default function RouterLayout() {
  return (
    <>
      <Router history={createBrowserHistory()}>
        {/* <Router> */}
        <Switch>
          <Route exact path="/">
            <Navbar />

            <Home />

            <Footer />
          </Route>

          <Route exact path="/team">
            <Navbar />

            <Team />

            <Footer />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
