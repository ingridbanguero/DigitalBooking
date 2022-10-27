import './FormRegister.scss';

const FormRegister = () => { 
    return(
        <form className='formregister'> 
            <h1>Crear Cuenta</h1>  
            <div className="container">
                <label>Nombre</label>   
                <input type="text" placeholder="Ingresa tu nombre" name="email" required/>
                <label>Apellido</label>   
                <input type="text" placeholder="Ingresa tu apellido" name="email" required/>  
                <label>Correo electrónico</label>   
                <input type="email" placeholder="Ingresa tu correo electrónico" name="email" required/>  
                <label>Contraseña</label> 
                <input type="password" placeholder="Ingresa tu contraseña" name="password" required/>
                <label>Confirmar contraseña</label>   
                <input type="password" placeholder="Vuelve a ingresar tu contraseña" name="password" required/>  
                <button type="submit">Crear cuenta</button>   
                <p>¿Ya tienes cuenta? <a href='/login'>Iniciar sesión</a></p>
            </div>   
        </form> 
    )
}

export default FormRegister;