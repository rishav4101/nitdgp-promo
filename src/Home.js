import React from "react";
import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Team from "./Team";
import DirectorMsg from "./components/DirectorMsg";

export default function Home() {
    return (
        <>
            <Router history={createBrowserHistory()}>
                {/* <Router> */}
                <Switch>

                    <Route exact path="/">
                        <Navbar />
                        <div style={{ maxWidth: 1400, margin: "0px auto" }}>
                            <Slider />
                            <DirectorMsg />
                            <Tabs />
                        </div>
                        <Footer />
                    </Route>

                    <Route exact path="/team">
                        <Navbar />
                        <div style={{ maxWidth: 1400, margin: "0px auto" }}>
                            <Team />
                        </div>
                        <Footer />
                    </Route>

                </Switch>
            </Router>
        </>
    );
}
