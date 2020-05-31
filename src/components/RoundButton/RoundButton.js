import React from "react";
import styles from "./roundButton.module.scss"
import {Link} from "react-router-dom";

export default function RoundButton(props) {
    return (
        <Link to={props.href}>
            <div className={styles.roundButton}><p>{props.content}</p></div>
        </Link>
    )
}