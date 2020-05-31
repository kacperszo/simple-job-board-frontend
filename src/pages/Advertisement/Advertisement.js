import React, {useEffect, useState} from "react";
import {findAdvertisementById} from "../../api";
import AdvertisementView from "../../components/AdvertismentView";
import {useParams} from "react-router-dom";
import {useHistory} from "react-router-dom";

export default function Advertisement(props) {
    const [advertisement, setAdvertisement] = useState({
        id: null, title: "", content: "", creationDate: "", expirationDate: "", hidden: null
    })
    const {id} = useParams()
    const history = useHistory();
    useEffect(() => {
        findAdvertisementById(id, props.user.token).then(data => {
            setAdvertisement(data)
        }).catch(err => history.push("/"));
    }, [])

    return (
        <>
            <AdvertisementView advertisement={advertisement}/>
        </>
    )
}