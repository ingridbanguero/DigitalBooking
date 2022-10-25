import './CardList.scss';

const CardList = (props) => { 
    return(                  
        <div className="card-list">
            <div className="card-image">
                <img  src={props.details.img} alt="recomendation"/>
            </div>
            <div className="card-details">
                <div>
                    <div className="card-title">
                        <p>{props.details.category}<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
                        <h3>{props.details.title}</h3>
                    </div>
                    <div className="card-rank">
                        <span>8</span>
                        <p>Muy bueno</p>
                    </div>
                </div>
                <p className="card-distance"><i class="fa-solid fa-location-dot"></i> A 940 m del centro - <span>MOSTRAR EN EL MAPA</span></p>
                <p className="card-description">{props.details.description}</p> 
                <button>Ver más</button>
            </div>
        </div>
    )
}

export default CardList;