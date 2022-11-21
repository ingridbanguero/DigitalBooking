import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { UserContext } from "../../context/UserContext";
import baseUrl from '../../helpers/api';
import './FormLogin.scss';


const FormLogin = () => { 
    const [errorForm, setErrorForm] = useState("");
    const { login } = useContext(UserContext);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { register, formState: { errors }, handleSubmit } = useForm();

    useEffect(
        () => {
            if(searchParams.get('reserva')){
                setErrorForm("Para realizar una reserva necesitas estar logueado.")
            }
        }, [searchParams]
    )
   
    const onSubmit = evento => {
        console.log(evento);
        // Obtener token y datos del usuario
        fetch(`${baseUrl}/usuarios/auth`, {
            method: "POST",
            body: JSON.stringify(evento),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => {
            if (!response.ok) {
                setErrorForm("Lamentablemente no ha podido iniciar sesión. Por favor intente más tarde");
                throw new Error("HTTP status " + response.status);
            }
            return response.json();
        })
        .then(data => {
            data = {
                id: 1,
                nombre: "Bruno",
                apellido: "Rodriguez",
                email: "prueba@gmail.com",
                token: data.jwt
            }
            console.log(data);
            // Loguear usuario
            login(data);

            // Guardar user en local storage
            window.localStorage.setItem(
                'loggedDigitalAppUser', JSON.stringify(data)
            )

            // Redireccionar
            if(searchParams.get('reserva')){
                navigate(`/product/${searchParams.get('reserva')}/reserva`);
            } else {
                navigate("/");
            }
        })
        .catch(err => console.log(err));
    }      

    return(
        <div onSubmit={handleSubmit(onSubmit)} className='formlogin'> 
            <div className='container'>
                {
                    errorForm !== "" ?
                    <div className='reserva-alert'>
                        <i class="fa-solid fa-circle-exclamation"></i>
                        <p>{errorForm}</p>
                    </div> :
                    <></>
                }
                <h1>Iniciar Sesión</h1>  
                <form noValidate>
                    <label>Correo electrónico</label>   
                    <input type="email" name="email" {...register("email", { 
                        required: "Este campo es requerido.", 
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: "Formato de email inválido."
                        }
                        })}/>   

                    <ErrorMessage errors={errors} name="email" render={({ message }) => <p className="error-message">{message}</p>}/>

                    <label>Contraseña</label>   
                    <input type="password" name="contrasenna" {...register("contrasenna", { 
                        required: "Este campo es requerido.", 
                        minLength: {
                            value: 7,
                            message: "La contraseña debe tener más de 6 caracteres"
                        }
                        })}/>   

                    <ErrorMessage errors={errors} name="contrasenna" render={({ message }) => <p className="error-message">{message}</p>}/>                    

                    <button type="submit">Ingresar</button>   
                    <p>¿Aún no tienes cuenta? <Link to="/register"><span>Registrate aquí</span></Link></p>     
                </form>
            </div>
        </div>
    )
}

export default FormLogin;