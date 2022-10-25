import './CardCategoryContainer.scss';
import CardCategory from "../CardCategory/CardCategory"
import Categorias from "../../helpers/categorias.json";

const CardCategoryContainer = () => { 
    return(
        <div className="card-category-container">
            <h2>Buscar por tipo de alojamiento</h2>
            <div>
            { Categorias.map((item, index) => <CardCategory details={item} key={index}/>)}
            </div>
            
        </div>
    )
}

export default CardCategoryContainer;