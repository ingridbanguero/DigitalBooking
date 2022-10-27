import { Link } from "react-router-dom";
import './FormRegister.scss';

const FormRegister = () => { 
    return(
        <div className='formRegister'> 
            <div className="container">
             <h1>Crear Cuenta</h1>  
                <form>
                    <div>
                        <div>
                            <label>Nombre</label>   
                            <input type="text" name="name" required autocomplete="off"/>
                        </div>
                        <div>
                            <label>Apellido</label>   
                            <input type="text" name="lastName" required autocomplete="off"/>  
                        </div>
                    </div>
                    <label>Correo electrónico</label>   
                    <input type="email" name="email" required autocomplete="off"/>  
                    <label>Contraseña</label> 
                    <input type="password" name="password" required autocomplete="off"/>
                    <label>Confirmar contraseña</label>   
                    <input type="password" name="password" required autocomplete="off"/>  
                    <button type="submit">Crear cuenta</button>   
                    <p>¿Ya tienes cuenta? <Link to="/login"><span>Iniciar sesión</span></Link></p>
                </form>
            </div>
        </div> 
    )
}

export default FormRegister;