import React, { ReactNode } from 'react'
import { Outlet } from "react-router-dom";

export default function List({h1}: IProps) {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <h1>{h1}</h1>
                </div>
            </div>
            <div className="row">
                <Outlet />
            </div>
        </>
    )
}

interface IProps {
    h1: string
}
