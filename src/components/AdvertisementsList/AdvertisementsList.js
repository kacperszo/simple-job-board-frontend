import React, {useEffect, useState} from "react";
import AdvertisementItem from "./AdvertisementItem";
import PropTypes from "prop-types";
import {updateAdvertisement, removeAdvertisement} from "../../api";
import {useHistory} from "react-router-dom";
import RoundButton from "../RoundButton";

function AdvertisementsList(props) {
    const [advertisements, setAdvertisements] = useState(props.advertisements)
    const history = useHistory()
    useEffect(() => (setAdvertisements(props.advertisements)), [props.advertisements])

    const handleDelete = (advertisment) => {
        removeAdvertisement(advertisment.id, props.token).then(() =>
            setAdvertisements(advertisements.filter(currentAdvertisement => currentAdvertisement.id !== advertisment.id)))
    }
    const handleToggleVisibility = (advertisement) => {
        updateAdvertisement({...advertisement, hidden: !advertisement.hidden}, props.token).then(() => {
            setAdvertisements(advertisements.map(currentAdvertisement => {
                if (currentAdvertisement.id === advertisement.id) {
                    currentAdvertisement.hidden = !currentAdvertisement.hidden
                }
                return currentAdvertisement
            }))
        })
    }


    return (
        <div className="container">
            {
                advertisements.map((advertisement) => <AdvertisementItem
                    key={advertisement.id}
                    advertisement={advertisement}
                    isLoggedIn={!!props.token}
                    handleDelete={handleDelete}
                    handleToggleVisibility={handleToggleVisibility}
                />)
            }

        </div>
    );
}

AdvertisementsList.propeTypes = {
    advertisements: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        creationDate: PropTypes.string.isRequired,
        expirationDate: PropTypes.string.isRequired,
        hidden: PropTypes.bool.isRequired
    })).isRequired,
    token: PropTypes.string
}
export default AdvertisementsList