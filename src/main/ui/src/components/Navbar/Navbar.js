import React, { useState } from 'react';
import './Navbar.scss';
import SocialNetwork from '../SocialNetwork/SocialNetwork';
import logo from '../../assets/img/logo.svg';

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
            <li><h3>Crear cuenta</h3></li>
            <li><h3>Iniciar Sesión</h3></li>
        </ul>
    )
    return(
        <div className="navbar">
            <img src={logo} className="logo" alt="Logo" />
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