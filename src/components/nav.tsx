import React, { ReactNode } from 'react'
import { Link, NavLink, useLocation } from "react-router-dom"
import AuthStatus from "./AuthStatus"

const navItems = [
    {name: 'Characters', href: '/characters'},
    {name: 'Locations', href: '/locations'},
    {name: 'Episodes', href: '/episodes'},
]

export default function Nav() {

    const location = useLocation()

    function getStyle({isActive}: { isActive: boolean }) {
        // console.log(isActive)
        return {}
    }

    function getClassName({isActive}: { isActive: boolean }) {
        // console.log(isActive)
        return 'nav-link'
    }

    function getInnerText(isActive: boolean, name: string) {
        // console.log(isActive)
        return name
    }

    // console.log(location)

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Rick & Morty</a>
            <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {
                        navItems.map((item, i) => {
                            return (
                                <li key={i} className="nav-item">
                                    <NavLink
                                        to={item.href}
                                        style={getStyle}
                                        className={getClassName}
                                        state={{data: 'some data...'}}
                                    >
                                        {({isActive}) => getInnerText(isActive, item.name)}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                    <li className="nav-item">
                        <AuthStatus/>
                    </li>
                </ul>
            </div>
        </nav>
    )
}