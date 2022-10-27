import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { UserContext } from "../../context/UserContext";
import './FormLogin.scss';

const FormLogin = () => { 
    const { login } = useContext(UserContext);

    const usuario = {
        "email" : "grupo4@gmail.com",
        "password" : "Grupo4DH"
    }
   
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = evento => {
        console.log(evento) 
        if(evento.email === usuario.email && evento.password === usuario.password){
            login("");
        } else{
            alert("Por favor vuelva a intentarlo, sus credenciales son inválidas")
        }
               
    }      

    return(
        <div onSubmit={handleSubmit(onSubmit)} className='formlogin'> 
            <div className='container'>
                <h1>Iniciar Sesión</h1>  
                <form>
                    <label>Correo electrónico</label>   
                    <input type="email" name="email" {...register("email", { 
                        required: "Este campo es requerido.", 
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: "Formato de email inválido."
                        }
                        })}/>   

                    <ErrorMessage errors={errors} name="email" render={({ message }) => <p className="error-message">{message}</p>}>
                        {({ messages }) => {
                        console.log(messages);
                        return (
                            messages &&
                            Object.entries(messages).map(([type, message]) => (
                            <p key={type}>{message}</p>
                            ))
                        );
                        }}
                    </ErrorMessage>

                    <label>Contraseña</label>   
                    <input type="password" name="password" {...register("password", { 
                        required: "Este campo es requerido.", 
                        pattern: {
                            minLength: 7,
                            message: "La contraseña debe tener más de 6 caracteres"
                        }
                        })}/>   

                    <ErrorMessage errors={errors} name="password" render={({ message }) => <p className="error-message">{message}</p>}>
                        {({ messages }) => {
                        console.log(messages);
                        return (
                            messages &&
                            Object.entries(messages).map(([type, message]) => (
                            <p key={type}>{message}</p>
                            ))
                        );
                        }}
                    </ErrorMessage> 

                    <button type="submit">Ingresar</button>   
                    <p>¿Aún no tienes cuenta? <Link to="/register"><span>Registrate aquí</span></Link></p>     
                </form>
            </div>
        </div>
    )
}

export default FormLogin;