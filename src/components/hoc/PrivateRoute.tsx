import { FunctionComponent } from 'react'
import { Navigate, useLocation, Outlet } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

const PrivateRoute: FunctionComponent = () => {
    const auth = useAuth()
    const location = useLocation()

    if (auth.user === null) {
        return <Navigate to="/login" state={{from: location.pathname}} replace/>
    }
    return <Outlet/>
}

export default PrivateRoute
