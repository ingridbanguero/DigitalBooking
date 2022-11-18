import "./ReservaDetails.scss";

const ReservaDetails = ({details, startDate, endDate}) => {

    return(
        <div className="reserva-details">
            <div className="reserva-content">
                <div className="reserva-card">
                    <h2>Detalle de la reserva</h2>
                    <div>
                        <img src={details.imagenes[0].url} alt={details.imagenes[0].titulo}/>
                        <div className="content">
                            <p className="category">{details.categoria.titulo}</p>
                            <h3>{details.nombre}</h3>
                            <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
                            <p className="location"><i class="fa-solid fa-location-dot"></i>{details.ciudad.nombre}, {details.ciudad.pais}</p>
                            <div className="check-in">
                                <p>Check in</p>
                                <span>{startDate}</span>
                            </div>
                            <div>
                                <p>Check out</p>
                                <span>{endDate}</span>
                            </div>
                            <button className="button2">Confirmar reserva</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default ReservaDetails;