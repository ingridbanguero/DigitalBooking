import './CardListContainer.scss';
import React, { useState, useEffect, useContext } from 'react';
import CardList from '../CardList/CardList';
import Alojamientos from "../../helpers/alojamientos.json";
import { UserContext } from "../../context/UserContext";


const CardListContainer = (props) => { 
    const [product, setProduct] = useState([]);
    const { user } = useContext(UserContext);
    
    const filterProduct = () => {
        let productFilter = product;
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
            productFilter.map((item, index) => <CardList details={item} key={index}/>)
        )
    }

    // Traer productos
    useEffect(
        () => {
            try{
                fetch('http://localhost:8080/productos')
                .then(response => response.json())
                .then(data => console.log(data))
                setProduct(Alojamientos);
            } catch(e){
                console.log(e);
            }
        }, []
    )

    return(
        <div className="card-list-container">
            <h2>Recomendaciones</h2>
            <div>
            { filterProduct()}
            </div>
            
        </div>
    )
}

export default CardListContainer;