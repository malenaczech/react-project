import React from 'react'
import './Nav.css'

const Subnav = () => {
    return (
        <nav class="navbar navbar-expand-lg nav-fondo navtwo">
                <div class="container-fluid navtwo_brand">
                    <button class="navbar-toggler navbar-toggler-border-color nav_collapse" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label=" Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse navtwo_items" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 navtwo_list">
                            <li class="nav-item navtwo_item">
                                <a class="nav-link nav-color navtwo_link" href="index.html">INICIO</a>
                            </li>
                            <li class="nav-item navtwo_item">
                                <a class="nav-link nav-color navtwo_link" href="pages/tienda.html">FRAGANCIAS</a>
                            </li>
                            <li class="nav-item navtwo_item">
                                <a class="nav-link nav-color navtwo_link" href="pages/carrtio.html">CARRITO</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Subnav