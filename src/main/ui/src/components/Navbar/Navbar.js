import React, { useContext } from 'react';
import './Navbar.scss';
import SocialNetwork from '../SocialNetwork/SocialNetwork';
import logo from '../../assets/img/logo.svg';
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Navbar = () => {
    const { user, logout } = useContext(UserContext);

    const menuLogin = (
        user.auth ? 
        <ul className='menu-login'>
            <li>
                <span className="login-letter"><p>BR</p></span>
                <div>
                    <span className="login-close" onClick={logout}></span>
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
            <Link to="/"><img src={logo} className="logo" alt="logo" /></Link>
            <input type="checkbox" id="btn-nav"/>
            <label className="menu-icon" htmlFor="btn-nav"><span className="nav-icon"></span></label>
            <nav>
                {menuLogin}
                <div className='menu-sidebar'>
                    { user.auth ? <p>¿Desea <span onClick={logout}>cerrar sesión</span>?</p> : <></>}
                    <SocialNetwork/>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;