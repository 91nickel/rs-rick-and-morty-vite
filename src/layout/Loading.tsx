import React from 'react'
import Preloader from 'component/Preloader'

function Loading () {
    return (
        <div className="container d-flex justify-content-center align-items-center preloader" style={{height: '100vh'}}>
            <Preloader />
        </div>
    )
}

export default Loading
