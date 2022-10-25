import './CardListContainer.scss';
import CardList from '../CardList/CardList';

const CardListContainer = () => { 
    return(
        <>
        <div className="conteiner">
            <h1>Recomendaciones</h1>
            <CardList/>

        </div>
        </>
    )
}

export default CardListContainer;