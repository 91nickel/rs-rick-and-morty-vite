import React from 'react'
import { Outlet } from "react-router-dom";

interface IProps {
    h1: string
}

export default function List({h1}: IProps) {
    return (
        <>
            <div>
                <h1>{h1}</h1>
            </div>
            <div>
                <Outlet />
            </div>
        </>
    )
}
