import React, {useState} from "react";
import LoginForm from "../../components/LoginForm";
import {getUserToken} from "../../api";
import {useHistory} from "react-router-dom";

const Login = (props) => {
    const history = useHistory()
    const [error, setError] = useState()
    const login = (username, password) => {
        getUserToken(username, password).then(result => {
                props.addToken(result.token)
                setError(null)
                history.push("/")
            }
        ).catch(() => setError("invalid username or password"))
    }


    return (
        <div className={`container`}>
            <div className={`columns is-centered`}>
                <div className={`column is-5-tablet is-4-desktop is-3-widescreen`}>
                    <LoginForm error={error} onSubmit={login}/>
                </div>
            </div>
        </div>
    )
}


export default Login