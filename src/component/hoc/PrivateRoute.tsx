import React, { FunctionComponent } from 'react'
import { useAuth } from 'hook/useAuth'
import { Navigate, useLocation, Outlet } from 'react-router-dom'

const PrivateRoute: FunctionComponent = (props) => {
    const auth = useAuth()
    const location = useLocation()

    if (auth.user === null) {
        return <Navigate to="/login" state={{from: location.pathname}} replace/>
    }
    return <Outlet/>
}

export default PrivateRoute
