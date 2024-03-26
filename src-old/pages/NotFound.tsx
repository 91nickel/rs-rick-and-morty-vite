import React, { useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate()
    const location = useLocation()

    // useEffect(() => {
    //     setTimeout(() => {
    //         navigate('/', {
    //             state: {from: location.pathname}
    //         })
    //     }, 1000)
    // }, [])

    return (
        <h1>404</h1>
    )
}