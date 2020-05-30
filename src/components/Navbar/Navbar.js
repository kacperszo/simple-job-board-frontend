import React from "react";

export default function Navbar(props) {
    return (
        <nav className={`navbar`} role="navigation" aria-label="main navigation">
            <div className={`navbar-brand`}>
                    <a href={`/`} className={`navbar-item`}>{props.title}</a>
            </div>
        </nav>
    );
}