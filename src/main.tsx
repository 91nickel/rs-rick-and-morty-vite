import ReactDOM from 'react-dom/client'
import App from '@/App'

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/sw.js')
//         .then(reg => console.log('SW registered', reg))
//         .catch(err => console.error('SW not registered', err))
// }

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(<App/>)
