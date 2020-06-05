import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import style from "./advertisementItem.module.scss"
import {getLocal} from "../../../config/local";

function millisecondsToDays(milliseconds) {
    return milliseconds / 1000 / 60 / 60 / 24;
}

const AdvertisementItem = (props) => {
    const local = getLocal();
    function renderAdminBlock() {

        if (props.isLoggedIn) {
            return (
                <>
                    <button onClick={() => props.handleToggleVisibility(props.advertisement)}
                            className={props.advertisement.hidden ? `button is-dark` : `button is-light`}>{
                        props.advertisement.hidden ? local.show : local.hide
                    }</button>
                    <button className={`button is-warning`}
                            onClick={() => props.handleDelete(props.advertisement)}>{
                        local.remove
                    }
                    </button>
                    <Link to={`advertisements/${props.advertisement.id}/edit`}>
                        <button className={`button is-info`}>
                            {
                                local.edit
                            }
                        </button>
                    </Link>

                </>
            )
        }
    }

    const getTimeToExpirationInDays = (expirationTime) => {
        expirationTime = new Date(expirationTime);
        const today = new Date();
        const timeToExpiration = expirationTime.getTime() - today.getTime();
        return Math.floor(millisecondsToDays(timeToExpiration));
    }

    return (
        <div className={`card ${style.advertisement}`}>
            <div className={`card-content`}>
                <div className={`media-content`}>
                    <p className={`title`}>{props.advertisement.title}</p>
                </div>

                <div className={`content`}>
                    <p>
                        {
                            props.advertisement.content.length < 150 ? props.advertisement.content : props.advertisement.content.substring(0, 150) + "..."
                        }
                    </p>
                </div>
                <p className="subtitle is-6">
                    {

                        `${local.expireIn} ${getTimeToExpirationInDays(props.advertisement.expirationDate)} ${local.days}`
                    }
                </p>
                <div className={`buttons`}>
                    <Link className={`button is-primary`} to={`advertisements/${props.advertisement.id}`}>{
                        local.readMore
                    }
                    </Link>
                    {renderAdminBlock()}
                </div>
            </div>
        </div>
    )
}
AdvertisementItem.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    advertisement: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        creationDate: PropTypes.string.isRequired,
        expirationDate: PropTypes.string.isRequired,
        hidden: PropTypes.bool.isRequired
    }).isRequired,
    handleToggleVisibility: PropTypes.func,
    handleDelete: PropTypes.func,

}
export default AdvertisementItem;