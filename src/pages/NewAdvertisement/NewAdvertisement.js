import React, {useState} from "react";
import AdvertisementEditor from "../../components/AdvertisementEditor";
import {createAdvertisement} from "../../api";
import {useHistory} from "react-router-dom";

const NewAdvertisement = (props) => {
    const history = useHistory()
    const handleSubmit = (title, content, expirationDate, hidden) => {
        createAdvertisement({
                title,
                content,
                expirationDate,
                hidden
            }, props.user.token
        ).then(r=> history.push(`/advertisements/${r.id}`))
    };
    return (
        <div className={`container`}>
            <AdvertisementEditor onSubmit={handleSubmit} title={""} content={""} expirationDate={""} hidden={false}/>
        </div>
    )
}


export default NewAdvertisement