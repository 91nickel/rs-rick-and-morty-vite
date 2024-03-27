import { lazy } from 'react'
import Main from './Main'
import Loading from './Loading'
import Error from './Error'

export default {
    Main,
    Loading,
    Error,
    List: lazy(() => import('./List')),
}

