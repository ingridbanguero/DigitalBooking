import './CardListContainer.scss';
import CardList from '../CardList/CardList';
import Alojamientos from "../../helpers/alojamientos.json";

const CardListContainer = () => { 
    return(
        <div className="card-list-container">
            <h2>Recomendaciones</h2>
            <div>
            { Alojamientos.map((item, index) => <CardList details={item} key={index}/>)}
            </div>
            
        </div>
    )
}

export default CardListContainer;