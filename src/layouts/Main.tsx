import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from '@mantine/core'

import Nav from 'components/Nav'

import Layout from '.'

export default function Main() {
    return (
        <>
            <section className="nav">
                <Container>
                    <Nav/>
                </Container>
            </section>
            <section>
                <Container>
                    <Suspense fallback={<Layout.Loading/>}>
                        <Outlet/>
                    </Suspense>
                </Container>
            </section>
        </>
    )
}
