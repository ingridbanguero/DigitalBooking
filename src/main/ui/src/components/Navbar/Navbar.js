import './Navbar.css';
import SocialNetwork from '../SocialNetwork/SocialNetwork';
import logo from '../../assets/img/logo.svg';

const Navbar = () => {
    return(
        <div className="navbar">
            <img src={logo} className="logo" alt="Logo" />
            <input type="checkbox" id="btn-nav"/>
            <label className="menu-icon" htmlFor="btn-nav"><span className="nav-icon"></span></label>
            <nav>
                <ul>
                    <li><h2>MENÚ</h2></li>
                    <li><h3>Crear cuenta</h3></li>
                    <li><h3>Iniciar Sesión</h3></li>
                </ul>
                <SocialNetwork className="social-network"/>
            </nav>
            
        </div>
    )
}

export default Navbar;