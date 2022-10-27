import { Link } from "react-router-dom";
import './FormLogin.scss';

const FormLogin = () => { 
    return(
        <div className='formlogin'> 
            <div className='container'>
                <h1>Iniciar Sesión</h1>  
                <form>
                    <label>Correo electrónico</label>   
                    <input type="email" name="email" required/>  
                    <label>Contraseña</label>   
                    <input type="password" name="password" required/> 
                    <button type="submit">Ingresar</button>   
                    <p>¿Aún no tienes cuenta? <Link to="/register"><span>Registrate aquí</span></Link></p>     
                </form>
            </div>
        </div>
    )
}

export default FormLogin;