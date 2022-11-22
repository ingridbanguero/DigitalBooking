import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import baseUrl from '../../helpers/api';
import './FormRegister.scss';

const FormRegister = () => { 
    const [errorForm, setErrorForm] = useState("");
    const { register, formState: { errors }, handleSubmit, watch } = useForm();
    const contrasenna = useRef({});
    contrasenna.current = watch("contrasenna", "");

    const onSubmit = evento => {
        const {contrasenna_repeat, ...dataUser} = evento;
        dataUser.rol = {id: 2};

        // Enviar datos
        fetch(`${baseUrl}/usuarios`, {
            method: "POST",
            body: JSON.stringify(dataUser),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => {
            if (!response.ok) {
                setErrorForm("Lamentablemente no ha podido registrarse. Por favor intente más tarde");
                throw new Error("HTTP status " + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            // Obtener token y loguear usuario
            alert("Usuario creado")
        })
    } 

    return(
        <div onSubmit={handleSubmit(onSubmit)} className='formRegister'> 
            <div className="container">
            {
                errorForm !== "" ?
                <div className='reserva-alert'>
                    <i class="fa-solid fa-circle-exclamation"></i>
                    <p>{errorForm}</p>
                </div> :
                <></>
            }
             <h1>Crear Cuenta</h1>  
                <form noValidate>
                    <div>
                        <div>
                            <label>Nombre</label>   
                            <input type="text" name="nombre" autoComplete="off"{...register("nombre", { 
                            required: "Este campo es requerido."
                            })}/>
                            <ErrorMessage errors={errors} name="nombre" render={({ message }) => <p className="error-message">{message}</p>}/>
                        </div>
                        <div>
                            <label>Apellido</label>   
                            <input type="text" name="apellido" required formNoValidate autoComplete="off" {...register("apellido", { 
                        required: "Este campo es requerido."})}/>   
                            <ErrorMessage errors={errors} name="apellido" render={({ message }) => <p className="error-message">{message}</p>}/>
                        </div>
                    </div>

                    <label>Correo electrónico</label>   
                    <input type="email" name="email" required autoComplete="off"{...register("email", { 
                        required: "Este campo es requerido.", 
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: "Formato de email inválido."
                        }
                        })}/>   
                    <ErrorMessage errors={errors} name="email" render={({ message }) => <p className="error-message">{message}</p>}/>
                    
                    <label>Contraseña</label> 
                    <input type="password" name="contrasenna" required autoComplete="off"{...register("contrasenna", { 
                        required: "Este campo es requerido.", 
                        minLength: {
                            value: 7,
                            message: "La contraseña debe contener más de 6 caracteres"
                          }
                        })}
                        />   
                    <ErrorMessage errors={errors} name="contrasenna" render={({ message }) => <p className="error-message">{message}</p>}/>

                    <label>Confirmar contraseña</label>   
                    <input type="password" name="contrasenna_repeat" required autoComplete="off"{...register("contrasenna_repeat", { 
                        required: "Este campo es requerido.", 
                        validate: value =>
                            value === contrasenna.current || "Las contraseñas no coinciden"
                        })}
                    />   
                    <ErrorMessage errors={errors} name="contrasenna_repeat" render={({ message }) => <p className="error-message">{message}</p>}/> 

                    <button type="submit">Crear cuenta</button>   
                    <p>¿Ya tienes cuenta? <Link to="/login"><span>Iniciar sesión</span></Link></p>
                </form>
            </div>
        </div> 
    )
}

export default FormRegister;