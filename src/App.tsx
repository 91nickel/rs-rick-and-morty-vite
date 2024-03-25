import AuthProvider from 'context/AuthProvider'
import AppRouter from 'routes/AppRouter'
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'style/index.scss'

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <AppRouter/>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default App
