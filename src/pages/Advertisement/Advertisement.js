import React, {useEffect, useState} from "react";
import {findAdvertisementById} from "../../api";
import AdvertisementView from "../../components/AdvertismentView";
import {useParams} from "react-router-dom";
import {useHistory} from "react-router-dom";

export default function Home(props) {
    const [advertisement, setAdvertisement] = useState({
        id: null, title: "", content: "", creationDate: "", expirationDate: "", hidden: null
    })
    const {id} = useParams()
    let history = useHistory();
    useEffect(() => {
        findAdvertisementById(id).then(data => {
            setAdvertisement(data)
        }).catch(err => history.push("/"));
    }, [])

    return (
        <>
            <AdvertisementView advertisement={advertisement}/>
        </>
    )
}