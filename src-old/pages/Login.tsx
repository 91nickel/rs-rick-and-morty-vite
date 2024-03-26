import React, { FormEvent, FunctionComponent } from 'react'
import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "hooks/useAuth"
import SignInForm, { IFormValues } from "components/SignInForm"

interface OwnProps {
}

type Props = OwnProps;

const Login: FunctionComponent<Props> = (props) => {
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    function handleSubmit(authData: IFormValues) {
        auth.signIn(authData, () => {
            navigate(location.state?.from || '/', {replace: true})
        })

    }

    return (
        <div className="row justify-content-center">
            <div className="col-12 col-md-6">
                <h1>Auth</h1>
                <SignInForm onSubmit={handleSubmit}/>
            </div>
        </div>
    )
}

export default Login
