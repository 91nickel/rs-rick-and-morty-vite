import React, { ReactNode } from 'react'
import { Outlet } from "react-router-dom"
import Nav from "components/nav"

export default function MainLayout() {
    return (
        <>
            <section className="nav">
                <div className="container">
                    <Nav/>
                </div>
            </section>
            <section>
                <div className="container">
                    <Outlet/>
                </div>
            </section>
        </>
    )
}

interface IProps {
    h1: string
}
