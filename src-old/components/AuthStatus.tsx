import React, { FunctionComponent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@mantine/core'
import { useAuth } from 'hooks/useAuth'

const AuthStatus: FunctionComponent = (props) => {
    const auth = useAuth()
    const navigate = useNavigate()

    function handleSignOut() {
        return auth.signOut(() => {
            navigate('/')
        })
    }

    if (auth.user === null) {
        return <Link className="btn btn-primary" to="/login">Login</Link>
    }

    return <Button variant="filled" onClick={handleSignOut}>SignOut {auth.user}</Button>

}

export default AuthStatus
