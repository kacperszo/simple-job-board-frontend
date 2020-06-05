import React, {useState} from "react";
import PropTypes from 'prop-types';

const LoginForm = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div>
            <form action="" className="box">
                <h2 className={"title has-text-centered"}>Login</h2>
                <div className="field">
                    <label htmlFor="" className="label">Username</label>
                    <div className="control">
                        <input onChange={(event) => setUsername(event.target.value)} value={username}
                               type="text" placeholder="e.g. johnDoo12"
                               className="input" required/>
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="" className="label">Password</label>
                    <div className="control">
                        <input onChange={(event) => setPassword(event.target.value)} value={password}
                               type="password" placeholder="*********"
                               className="input" required/>
                    </div>
                </div>
                <div className="field has-text-centered">
                    <button onClick={(e) => {
                        e.preventDefault();
                        props.onSubmit(username, password)
                    }} type="submit" className="button is-primary">
                        Login
                    </button>
                </div>
                {props.error ? (<div className="notification is-danger has-text-centered">
                    {props.error}
                </div>) : null}
            </form>
        </div>
    )
}
LoginForm.propTypes = {
    error: PropTypes.string,
    onSubmit: PropTypes.func
}
export default LoginForm