import './CardListContainer.scss';
import React, { useState, useEffect, useContext } from 'react';
import baseUrl from "../../helpers/api";
import CardList from '../CardList/CardList';
// import Alojamientos from "../../helpers/alojamientos.json";
import { UserContext } from "../../context/UserContext";


const CardListContainer = (props) => { 
    const [products, setProducts] = useState([]);
    const { user } = useContext(UserContext);
    
    const filterProduct = () => {
        let productFilter = products;
        // Organizar aleatoriamente productos si el usuario no esta log
        if(!user.auth){
            productFilter = productFilter.sort(() => Math.random() - 0.5);
        }
        if(props.filterCity > 0){
            productFilter = productFilter.filter(product => product.ciudad.id === props.filterCity);
        }
        if(props.filterCategory > 0){
            productFilter = productFilter.filter(product => product.categoria.id === props.filterCategory);
        }
        return (
            productFilter.map((product, index) => <CardList details={product} key={index}/>)
        )
    }

    // Traer productos
    useEffect(
        () => {
            try{
                fetch(`${baseUrl}/productos`)
                .then(response => response.json())
                .then(data => setProducts(data))
            } catch(e){
                console.log(e);
            }
        }, []
    )

    return(
        <div className="card-list-container">
            <h2>Recomendaciones</h2>
            {products ? 
            <div>
            { filterProduct()}
            </div>
            : <></>}
        </div>
    )
}

export default CardListContainer;