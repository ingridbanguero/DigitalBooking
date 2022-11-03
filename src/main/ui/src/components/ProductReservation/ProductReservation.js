import "./ProductReservation.scss";
import Calendar from "../Calendar/Calendar";

const ProductReservation = () => {
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
                        <button className="button1">Iniciar reserva</button>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default ProductReservation;