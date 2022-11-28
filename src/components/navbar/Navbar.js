import React from 'react'
import './Nav.css'

const Navbar = () => {
    return (
        <nav class="navbar navone">
            <div class="container-fluid navone_principal">
                <h1 class="navbar-brand navone_title">FLORA FRAGANCES</h1>
                <form class="d-flex navone_search" role="search">
                    <input class="form-control me-2 search_input" id="searchInput" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn search_btn" type="submit"><img class="nav_icon" src="../resources/search.png" alt=""/></button>
                </form>
                <div class="nav_logos">
                    <a class="nav-link nav-color navone_link" href="pages/cart.html" target=""><img class="nav-logo nav_icon" src="../resources/cart.png"/></a>
                    <a class="nav-link nav-color navone_link" href="pages/info.html" target=""><img class="nav-logo nav_icon" src="../resources/info.png"/></a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar