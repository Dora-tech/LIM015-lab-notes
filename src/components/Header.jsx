import React from 'react'
import logo from './../../src/img/logo_notes2.png';
import logout from './../../src/img/cerrar-sesion.png';
import firebaseApp from "../credenciales";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(firebaseApp);
const Header = ({nameUsuario}) => {
    //const imagen = '../img/cerrar-sesion.png'
    return (
        <header id="header-bar-nav">
        <nav className="headerNav">
            <img className="logo-nav" src={logo}></img>
            <h1>{nameUsuario.toUpperCase()}</h1>
            <ul className="ul-nav" id="navList">
                <li className="li-nav">
                <a href="#">
                    <img src={logout} id ='btnExit' className='logo_home' onClick={() => signOut(auth)}></img>Logout
                  </a>
                </li>
            </ul>
        </nav>
      </header>
    )
}

export default Header
