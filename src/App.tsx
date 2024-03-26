import React from 'react'
import { MantineProvider } from '@mantine/core'
import { BrowserRouter } from 'react-router-dom'

import AuthProvider from './context/AuthProvider'
import AppRouter from './route/AppRouter'

import '@mantine/core/styles.css'
import 'style/index.scss'


function App() {
    return (
        <MantineProvider>
            <BrowserRouter>
                <AuthProvider>
                    <AppRouter/>
                </AuthProvider>
            </BrowserRouter>
        </MantineProvider>
    )
}

export default App
