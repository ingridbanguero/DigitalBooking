import React, { useState } from 'react';
import './Navbar.scss';
import SocialNetwork from '../SocialNetwork/SocialNetwork';
import logo from '../../assets/img/logo.svg';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [login, setLogin] = useState(true);
    const menuLogin = (
        login ? 
        <ul className='menu-login'>
            <li>
                <span className="login-letter"><p>BR</p></span>
                <div>
                    <span className="login-close" onClick={() => setLogin(false)}></span>
                    <p className='text1'>Hola,</p>
                    <p className='text1'>Bruno Rodriguez</p>
                </div>
            </li>
        </ul> : 
        <ul className='menu-logout'>
            <li><h2>MENÚ</h2></li>
            <li><Link to="/register"><h3>Crear cuenta</h3></Link></li>
            <li><Link to="/login"><h3>Iniciar Sesión</h3></Link></li>
        </ul>
    )
    return(
        <div className="navbar">
            <Link to="/"><img src= {logo} className="logo" alt="logo" /></Link>
            <input type="checkbox" id="btn-nav"/>
            <label className="menu-icon" htmlFor="btn-nav"><span className="nav-icon"></span></label>
            <nav>
                {menuLogin}
                <div className='menu-sidebar'>
                    { login ? <p>¿Desea <span onClick={() => setLogin(false)}>cerrar sesión</span>?</p> : <></>}
                    <SocialNetwork/>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;