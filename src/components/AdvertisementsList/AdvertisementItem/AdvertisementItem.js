import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import style from "./advertisementItem.module.scss"

function millisecondsToDays(milliseconds) {
    return milliseconds / 1000 / 60 / 60 / 24;
}

const AdvertisementItem = (props) => {
    function renderAdminBlock() {

        if (props.isLoggedIn) {
            return (
                <>
                    <button onClick={() => props.handleToggleVisibility(props.advertisement)}
                            className={props.advertisement.hidden ? `button is-dark` : `button is-light`}>{
                        props.advertisement.hidden ? `show` : `hide`
                    }</button>
                    <button className={`button is-warning`}
                            onClick={() => props.handleDelete(props.advertisement)}>remove
                    </button>
                    <button className={`button is-info`} onClick={() => props.handleEdit(props.advertisement)}>edit
                    </button>

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

                        `Expire in ${getTimeToExpirationInDays(props.advertisement.expirationDate)} days`
                    }
                </p>
                <div className={`buttons`}>
                    <Link className={`button is-primary`} to={`advertisements/${props.advertisement.id}`}>Read
                        more
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
    handleEdit: PropTypes.func,

}
export default AdvertisementItem;