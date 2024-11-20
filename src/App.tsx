import { BrowserRouter } from 'react-router-dom'

import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications';

import AuthProvider from '@/context/AuthProvider'
import AppRouter from '@/routes/AppRouter'

import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css';
import '@/style/index.scss'

function App() {
    return (
        <MantineProvider>
            <Notifications/>
            <BrowserRouter>
                <AuthProvider>
                    <AppRouter/>
                </AuthProvider>
            </BrowserRouter>
        </MantineProvider>
    )
}

export default App
