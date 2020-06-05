import React from "react";
import style from "./advertisementView.module.scss"
import PropTypes from "prop-types";
import AdvertisementsList from "../AdvertisementsList";
import ReactMarkdown from "react-markdown";
import {getLocal} from "../../config/local";

const AdvertisementView = (props) => {
    const local = getLocal();
    return (
        <div className={`container`}>
            <div className={`card ${style.advertisement}`}>
                <div className={`card-content`}>
                    <div className={`media-content`}>
                        <p className={`title is-4`}>{props.advertisement.title}</p>
                    </div>
                    <div className={`content`}>
                        <p>
                            {props.advertisement.content.split(`\n`).map((line, index) => {
                                return (
                                    <span key={index}>
                                        {line}<br/>
                                    </span>
                                )
                            })}
                        </p>
                    </div>
                    <p className="subtitle is-6">
                        {`${local.expirationDate} ${props.advertisement.expirationDate.substring(0, 10)}`}
                    </p>
                    <div className={`buttons`}>
                        <a className={`button is-primary`} href={`mailto:hr@TestCompany.test`}>
                            {
                                local.apply
                            }
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
AdvertisementsList.propeTypes = {
    advertisement: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        creationDate: PropTypes.string.isRequired,
        expirationDate: PropTypes.string.isRequired,
        hidden: PropTypes.bool.isRequired
    }).isRequired
}
export default AdvertisementView