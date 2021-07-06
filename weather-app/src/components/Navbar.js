import React from 'react'
import Style from './Style.js'


const Navbar = () => {
    return (

        <div>
            <head>
                <Style />
            </head>

            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    {/* <i className="material-icons">wb_cloudy</i>&nbsp;Nubel Ganso App</a> */}
                    <i className="bi bi-cloudy"></i>&nbsp;Weather App</a>
            </nav>
        </div>

    )
}

export default Navbar
