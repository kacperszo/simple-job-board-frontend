import React, {useEffect, useState} from "react";
import {findAllAdvertisements} from "../../api";
import AdvertisementsList from "../../components/AdvertisementsList";

export default function Home(props) {
    const [advertisements, setAdvertisements] = useState([])
    useEffect(() => {
        findAllAdvertisements(props.user.token).then(data => setAdvertisements(data.content));
    }, [])
    return (
        <>
            <AdvertisementsList advertisements={advertisements} token={props.user.token}/>
        </>
    )
}