import React from 'react'
import logo from './../../src/img/logo_notes2.png';
import logo1 from './../../src/img/cerrar-sesion.png';
const Header = () => {
    //const imagen = '../img/cerrar-sesion.png'
    return (
        <header id="header-bar-nav">
        <nav className="headerNav">
            <img className="logo-nav" src={logo}></img>
            <ul className="ul-nav" id="navList">
                <li className="li-nav">
                <a href="#">
                    <img src={logo1} id ='btnExit' className='logo_home'></img>Logout
                  </a>
                </li>
            </ul>
        </nav>
      </header>
    )
}

export default Header
