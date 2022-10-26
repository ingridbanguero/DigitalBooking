import './FormLogin.scss';

const FormLogin = () => { 
    return(
        <form className='formlogin'> 
            <h1>Iniciar Sesión</h1>  
            <div className="container">  
                <label>Correo electrónico</label>   
                <input type="email" placeholder="Ingresa tu correo electrónico" name="email" required/>  
                <label>Contraseña</label>   
                <input type="password" placeholder="Ingresa tu contraseña" name="password" required/> 
                <button type="submit">Ingresar</button>   
                <p>¿Aún no tienes cuenta? <a href='/register'>Registrate aquí</a></p>    
            </div>   
        </form> 
    )
}

export default FormLogin;