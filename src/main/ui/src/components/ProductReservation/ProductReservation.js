import React, { useState, useEffect, useContext } from 'react';
import "./ProductReservation.scss";
import Calendar from "../Calendar/Calendar";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import baseUrl from "../../helpers/api";
import { UserContext } from "../../context/UserContext";

const ProductReservation = () => {
    const { user } = useContext(UserContext);
    let { id } = useParams();
    const [disabledDates, setDisabledDates] = useState([]);

    useEffect(
        () => {
            try{
                fetch(`${baseUrl}/reservas/producto?id=${id}`)
                .then(response => response.json())
                .then(data => {
                    let datesToDisabled = [];
                    data.forEach(reserva => {
                        let fechaInicio = createDate(reserva.fechaInicio);
                        let fechaFin = createDate(reserva.fechaFinal);
                        // Agregar fechas intermedias
                        while(fechaFin.getTime() >= fechaInicio.getTime()){
                            debugger;
                            fechaInicio.setDate(fechaInicio.getDate() + 1);
                            datesToDisabled.push(Date.parse(fechaInicio));
                        }
                    })
                    console.log(datesToDisabled);
                    setDisabledDates(datesToDisabled);
                })
            } catch(e){
                console.log(e);
            }
        }, [id]
    )

    const createDate = (strDate) => {
        let date = strDate.split('-');
        return new Date(date[0], date[1] - 1, date[2]);
    }
    
    return(
        <div className="product-reservation">
            <div className="product-content">
                <h1>Fechas disponibles</h1>
                <div>
                    <div className="reservation-calendar">
                        <Calendar disabledDates={disabledDates}/>
                    </div>
                    <div className="reservation">
                        <h3>Agregá tus fechas de viaje para obtener precios exactos</h3>
                        { user.auth ? 
                        <Link to={`/product/${id}/reserva`}><button className="button1" >Iniciar reserva</button></Link> : 
                        <Link to={`/login?reserva=${id}`}><button className="button1" >Iniciar reserva</button></Link>
                        }
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default ProductReservation;