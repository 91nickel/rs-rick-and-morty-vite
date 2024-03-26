import AuthProvider from 'context/AuthProvider'
import { BrowserRouter } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'

import AppRouter from 'routes/AppRouter'

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
