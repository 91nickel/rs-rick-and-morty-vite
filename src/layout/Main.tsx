import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from 'component/Nav'

import Layout from '.'

export default function Main() {
    return (
        <>
            <Nav/>
            <Suspense fallback={<Layout.Loading/>}>
                <Outlet/>
            </Suspense>
        </>
    )
}
