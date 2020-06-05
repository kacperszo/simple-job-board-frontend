import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

function Navbar(props) {
    return (
        <nav className={`navbar`} role="navigation" aria-label="main navigation">
            <div className={`navbar-brand`}>
                    <Link to={`/`} className={`navbar-item`}>{props.title}</Link>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string
};
export default Navbar;