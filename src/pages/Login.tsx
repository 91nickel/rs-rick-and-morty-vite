import React, { FormEvent, FunctionComponent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Container, Group, Center } from '@mantine/core'

import { useAuth } from 'hooks/useAuth'
import ErrorBoundary from 'components/hoc/ErrorBoundary'
import SignInForm, { IFormValues } from 'components/SignInForm'

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
        <Container>
            <Center>
                <h1>Auth</h1>
            </Center>
            <Center>
                <ErrorBoundary>
                    <SignInForm onSubmit={handleSubmit}/>
                </ErrorBoundary>
            </Center>
        </Container>
    )
}

export default Login
