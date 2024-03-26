import React, { FunctionComponent } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "hook/useAuth"

const AuthStatus: FunctionComponent = (props) => {
    const auth = useAuth()
    const navigate = useNavigate();

    function handleSignOut () {
        return auth.signOut(() => {
            navigate('/')
        })
    }

    if (auth.user === null){
        return <Link className="btn btn-primary" to="/login">Login</Link>
    }

    return <button className="btn btn-success" onClick={handleSignOut}>SignOut {auth.user}</button>

}

export default AuthStatus
