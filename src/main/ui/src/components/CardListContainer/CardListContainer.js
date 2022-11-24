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
                .then(elements => {
                    if(!user.auth){
                        elements = elements.sort(() => Math.random() - 0.5); // Aleatorio
                    }
                    fetch(`${baseUrl}/reservas`)
                    .then(response => response.json())
                    .then(reservas => {
                        reservas.forEach(reserva => {
                            elements.forEach(product => {
                                if(reserva.producto.id === product.id){
                                    let datesToDisabled = []
                                    let startDate = reserva.fechaInicio.split('-');
                                    startDate = new Date(startDate[0], startDate[1] - 1, startDate[2]);
                                    let endDate = reserva.fechaFinal.split('-');
                                    endDate = new Date(endDate[0], endDate[1] - 1, endDate[2]);
                                    while(endDate.getTime() >= startDate.getTime()){
                                        startDate.setDate(startDate.getDate() + 1);
                                        console.log(Date.parse(startDate));
                                        datesToDisabled.push(Date.parse(startDate));
                                    }
                                    product.disabledFechas = [...datesToDisabled];
                                }
                            })
                        })
                        setProducts(elements);
                        setFilterProducts(elements); 
                    })    
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

            const filterDates = () => {
                let productsFilterDates = products.filter((product) => {
                    if(product.disabledFechas){
                        return !product.disabledFechas.includes(Date.parse(props.filterDates[0])) && !product.disabledFechas.includes(Date.parse(props.filterDates[1]))
                    }else {
                        return true;
                    }
                })
                setFilterProducts(productsFilterDates);
            }
            
            // Si solo se selecciona categoria
            if(props.filterCategory > 0 && props.filterCity === 0 && props.filterDates.length === 0){
                filterCategory(products);
            }

            // Al seleccionar ciudad
            if(props.filterCity > 0){
                filterCity();
            }

            // Al seleccionar fecha
            if(props.filterDates.length > 0){
                filterDates();
            }
            

        }, [props.filterCity, props.filterCategory, props.filterDates, products]
    )

    return(
        <div className="card-list-container">
            <div className='content'>
                <h2>Recomendaciones</h2>
                {filterProducts.length > 0 ? 
                <div>
                { filterProducts.map((product, index) => <CardList details={product} key={index}/>) }
                </div>
                : <></>}
            </div>
        </div>
    )
}

export default CardListContainer;