import { lazy } from 'react'

export default {
    Home: lazy(() => import('./Home')),
    NotFound: lazy(() => import('./NotFound')
        .then(module => ({default: module.NotFound}))),
    Login: lazy(() => import('./Login')),
    Item: lazy(() => import('./Item')),
    List: lazy(() => import('./List')),
}

