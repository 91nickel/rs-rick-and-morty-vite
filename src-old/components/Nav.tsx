import React, { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { Grid, NavLink } from '@mantine/core'
import AuthStatus from './AuthStatus'

const navItems = [
    {name: 'Rick & Morty', href: '/'},
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

    function isActive(item) {
        return item.href === location.pathname
    }

    console.log(location)

    return (
        <Grid grow={true}>
            {
                navItems.map((item, i) => {
                    return (
                        <Grid.Col key={i} span={{base: 12, md: 6, lg: 2}}>
                            <NavLink href={item.href} label={item.name} active={isActive(item)}/>
                        </Grid.Col>
                    )
                })
            }
            <Grid.Col span={{base: 12, md: 6, lg: 2}}>
                <AuthStatus/>
            </Grid.Col>
        </Grid>
    )
}