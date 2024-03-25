import React, { FunctionComponent } from 'react'
import { Route, Routes } from 'react-router-dom'

import Page from 'pages'

import MainLayout from 'layouts/MainLayout'
import ListLayout from 'layouts/ListLayout'

import PrivateRoute from 'components/PrivateRoute'

import { EntityType } from 'service/types/mock'

const AppRouter: FunctionComponent = () => {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route index element={<Page.Home/>}/>
            </Route>
            <Route element={<PrivateRoute/>}>
                <Route element={<MainLayout/>}>
                    <Route path="characters" element={<ListLayout h1="Characters"/>}>
                        <Route index element={<Page.List type={EntityType.character}/>}/>
                        <Route path=":id" element={<Page.Item type={EntityType.character}/>}/>
                    </Route>
                    <Route path="locations" element={<ListLayout h1="Locations"/>}>
                        <Route index element={<Page.List type={EntityType.location}/>}/>
                        <Route path=":id" element={<Page.Item type={EntityType.location}/>}/>
                    </Route>
                    <Route path="episodes" element={<ListLayout h1="Characters"/>}>
                        <Route index element={<Page.List type={EntityType.episode}/>}/>
                        <Route path=":id" element={<Page.Item type={EntityType.episode}/>}/>
                    </Route>
                    <Route path="*" element={<Page.NotFound/>}/>
                </Route>
            </Route>
            <Route path="login" element={<Page.Login/>}/>
        </Routes>
    )
}

export default AppRouter
