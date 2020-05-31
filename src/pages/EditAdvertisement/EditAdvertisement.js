import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {findAdvertisementById, updateAdvertisement} from "../../api";
import AdvertisementEditor from "../../components/AdvertisementEditor";

export default function EditAdvertisement(props) {
    const {id} = useParams()
    const history = useHistory()
    const [advertisement, setAdvertisement] = useState({
        id: null, title: "", content: "", creationDate: "", expirationDate: "", hidden: null
    })
    useEffect(() => {
        findAdvertisementById(id, props.user.token).then(data => {
            setAdvertisement(data)
        }).catch(err => history.push(`/advertisements/`));
    }, [])
    const handleSubmit = (title, content, expirationDate, hidden) => {
        updateAdvertisement({
            id, title, content, expirationDate, hidden
        }, props.user.token).then(r=> history.push(`/advertisements/${r.id}`))
    }
    return (
        <div className={"container"}>
            <AdvertisementEditor id={advertisement.id}
                                 title={advertisement.title}
                                 content={advertisement.content}
                                 expirationDate={advertisement.expirationDate}
                                 hidden={advertisement.hidden}
                                 onSubmit={handleSubmit}
            />
        </div>
    )
}