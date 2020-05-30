import React, {useEffect, useState} from "react";
import AdvertisementItem from "./AdvertisementItem";
import PropTypes from "prop-types";
import {updateAdvertisement, removeAdvertisement} from "../../api";

function AdvertisementsList(props) {
    const [advertisements, setAdvertisements] = useState(props.advertisements)
    useEffect(() => (setAdvertisements(props.advertisements)), [props.advertisements])

    const handleEdit = (id) => {
        console.log(`edit ${id}`)
    }

    const handleDelete = (id) => {
        console.log(`delete ${id}`)
    }
    const handleToggleVisibility = (id) => {
        console.log(`show/hide ${id}`)
    }


    return (
        <div className="container">
            {
                advertisements.map((advertisement) => <AdvertisementItem
                    key={advertisement.id}
                    advertisement={advertisement}
                    isLoggedIn={!!props.token}
                    handleEdit={handleEdit}
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
    })).isRequired
}
export default AdvertisementsList