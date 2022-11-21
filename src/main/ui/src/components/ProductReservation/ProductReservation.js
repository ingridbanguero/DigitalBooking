import React, { useContext } from 'react';
import "./ProductReservation.scss";
import Calendar from "../Calendar/Calendar";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const ProductReservation = () => {
    const { user } = useContext(UserContext);
    let { id } = useParams();

    return(
        <div className="product-reservation">
            <div className="product-content">
                <h1>Fechas disponibles</h1>
                <div>
                    <div className="reservation-calendar">
                        <Calendar/>
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