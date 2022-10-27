import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import './FormRegister.scss';

const FormRegister = () => { 

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = evento => {
        
        console.log(evento) 
                       
    } 

    return(
        <div onSubmit={handleSubmit(onSubmit)} className='formRegister'> 
            <div className="container">
             <h1>Crear Cuenta</h1>  
                <form>
                    <div>
                        <div>
                            <label>Nombre</label>   
                            <input type="text" name="name" autocomplete="off"{...register("name", { 
                            required: "Este campo es requerido."
                            })}/>
                            <ErrorMessage errors={errors} name="name" render={({ message }) => <p className="error-message">{message}</p>}>
                               
                            </ErrorMessage>
                            
                        </div>
                        <div>
                            <label>Apellido</label>   
                            <input type="text" name="lastName" required autocomplete="off" {...register("lastName", { 
                        required: "Este campo es requerido."})}/>   
                            <ErrorMessage errors={errors} name="lastName" render={({ message }) => <p className="error-message">{message}</p>}>
                          
                            </ErrorMessage>
                        </div>
                    </div>
                    <label>Correo electrónico</label>   
                    <input type="email" name="email" required autocomplete="off"{...register("email", { 
                        required: "Este campo es requerido.", 
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: "Formato de email inválido."
                        }
                        })}/>   

                    <ErrorMessage errors={errors} name="email" render={({ message }) => <p className="error-message">{message}</p>}>
                 
                    </ErrorMessage> 
                    
                    <label>Contraseña</label> 
                    <input type="password" name="password" required autocomplete="off"{...register("password", { 
                        required: "Este campo es requerido.", 
                        minLength: {
                            value: 7,
                            message: "La contraseña debe contener más de 6 caracteres"
                          }
                        })}
                        />   

                    <ErrorMessage errors={errors} name="password" render={({ message }) => <p className="error-message">{message}</p>}>
                    
                    </ErrorMessage>  

                    <label>Confirmar contraseña</label>   
                    <input type="password" name="password" required autocomplete="off"{...register("password", { 
                        required: "Este campo es requerido.", 
                        minLength: {
                            value: 7,
                            message: "La contraseña debe contener más de 6 caracteres"
                          }
                        })}
                    />   

                    <ErrorMessage errors={errors} name="password" render={({ message }) => <p className="error-message">{message}</p>}>
                
                    </ErrorMessage>   

                    <button type="submit">Crear cuenta</button>   
                    <p>¿Ya tienes cuenta? <Link to="/login"><span>Iniciar sesión</span></Link></p>
                </form>
            </div>
        </div> 
    )
}

export default FormRegister;