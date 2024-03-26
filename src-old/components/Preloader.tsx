import React from 'react'

function Preloader() {
    return (
        <div className="spinner-border" role="status" style={{width: '5rem', height: '5rem'}}>
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}

export default Preloader
