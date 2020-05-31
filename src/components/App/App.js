import React from 'react';
import Navbar from "../Navbar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "../../pages/Home";
import Advertisement from "../../pages/Advertisement";
import Login from "../../pages/Login";

function App() {
    return (
        <>
            <Router>
                <Navbar title={"Simple-Job-Board"}/>
                <Switch>
                    <Route excat path={"/advertisements/:id"}>
                        <Advertisement/>
                    </Route>
                    <Route excat path={"/login"}>
                        <Login/>
                    </Route>
                    <Route excat path={"/"}>
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
