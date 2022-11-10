import './CardListContainer.scss';
import React, { useState, useEffect, useContext } from 'react';
import baseUrl from "../../helpers/api";
import CardList from '../CardList/CardList';
import { UserContext } from "../../context/UserContext";


const CardListContainer = (props) => { 
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    const { user } = useContext(UserContext);


    // Traer todos los productos 
    useEffect(
        () => {
            try{
                fetch(`${baseUrl}/productos`)
                .then(response => response.json())
                .then(data => {
                    if(!user.auth){
                        data = data.sort(() => Math.random() - 0.5); // Aleatorio
                    }
                    setProducts(data);
                    setFilterProducts(data);
                })
            } catch(e){
                console.log(e);
            }
        }, [user.auth]
    )

    useEffect(
        () => {
            const filterCategory = (filterProd) => {
                let filter = filterProd.filter(product => product.categoria.id === props.filterCategory)
                setFilterProducts(filter);
            }

            const filterCity = () => {
                try{
                    fetch(`${baseUrl}/productos/ciudad?&id=${props.filterCity}`)
                    .then(response => response.json())
                    .then(data => {
                        if(props.filterCategory > 0){
                            filterCategory(data);
                        } else {
                            setFilterProducts(data);
                        }
                    })
                } catch(e){
                    console.log(e);
                }
            }

            if(props.filterCategory > 0 && props.filterCity === 0){
                filterCategory(products);
            }

            if(props.filterCity > 0){
                filterCity();
            }

        }, [props.filterCity, props.filterCategory, products]
    )

    return(
        <div className="card-list-container">
            <h2>Recomendaciones</h2>
            {filterProducts.length > 0 ? 
            <div>
            { filterProducts.map((product, index) => <CardList details={product} key={index}/>) }
            </div>
            : <></>}
        </div>
    )
}

export default CardListContainer;