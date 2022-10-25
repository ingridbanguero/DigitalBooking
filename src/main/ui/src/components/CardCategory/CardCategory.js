import './CardCategory.scss';

const CardCategory = (props) => { 
    return(
        <div className='card-category'>
            <img src={props.details.Imagen} alt="category"/>
            <div>
                <h3>{props.details.Categoria}</h3>
                <h4>807.105 {props.details.Categoria}</h4>
            </div>
        </div>
    )
}

export default CardCategory;