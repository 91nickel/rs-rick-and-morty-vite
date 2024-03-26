import React, { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from '@mantine/core'
import Nav from 'components/Nav'

export default function MainLayout() {
    return (
        <>
            <section className="nav">
                <Container>
                    <Nav/>
                </Container>
            </section>
            <section>
                <Container>
                    <Outlet/>
                </Container>
            </section>
        </>
    )
}

interface IProps {
    h1: string
}
