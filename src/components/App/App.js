import React from 'react';
import Navbar from "../Navbar";
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "../../pages/Home";
import Advertisement from "../../pages/Advertisement";
import Login from "../../pages/Login";
import NewAdvertisement from "../../pages/NewAdvertisement";
import EditAdvertisement from "../../pages/EditAdvertisement";

function App() {
    return (
        <>
            <Router>
                <Navbar title={"Simple-Job-Board"}/>
                <Switch>
                    <Route excat path={"/advertisements/new"}>
                        <NewAdvertisement/>
                    </Route>
                    <Route excat path={"/advertisements/:id/edit"}>
                        <EditAdvertisement/>
                    </Route>
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
