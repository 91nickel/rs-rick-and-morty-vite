import React from 'react'
import { ToastContainer } from "react-toastify"

import AuthProvider from './context/AuthProvider'
import AppRouter from './route/AppRouter'

import 'App.css'
import 'react-toastify/dist/ReactToastify.css'

function App() {
    return (
        <div className="container">
            <AuthProvider>
                <AppRouter/>
            </AuthProvider>
            <ToastContainer/>
        </div>
    )
}

export default App
