import React from "react";
import {Link} from "react-router-dom";
import style from "./navbar.module.scss"
export default function Navbar(props) {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    {props.title}
                </Link>
            </div>
        </nav>
    );
}