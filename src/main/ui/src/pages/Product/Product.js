import "./Product.scss";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import baseUrl from "../../helpers/api";
import Navbar from "../../components/Navbar/Navbar";
import ProductTitle from "../../components/ProductTitle/ProductTitle";
import ProductLocation from "../../components/ProductLocation/ProductLocation";
import ProductGallery from "../../components/ProductGallery/ProductGallery";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import ProductFeatures from "../../components/ProductFeatures/ProductFeatures";
import ProductReservation from "../../components/ProductReservation/ProductReservation";
import ProductMap from "../../components/ProductMap/ProductMap";
import ProductPolicies from "../../components/ProductPolicies/ProductPolicies";
import Footer from "../../components/Footer/Footer"
import Body from "../../components/Body/Body";

const Product = () => {
    console.log("Holi")
    let { id } = useParams();
    const [product, setProduct] = useState(null);
    
    // Traer producto por id
    useEffect(
        () => {
            console.log(id);
            try{
                fetch(`${baseUrl}/productos/${id}`)
                .then(response => response.json())
                .then(data => {
                    setProduct(data);
                    console.log(data)

                })
            }catch(e){
                console.log(e);
            }
        }, [id]
    )

    return(
        <section className="product">
            <Navbar/>
                {product ? 
                <Body>
                    <ProductTitle nombre={product.nombre} categoria={product.categoria}/>
                    <ProductLocation ciudad={product.ciudad} />
                    <ProductGallery imagenes={product.imagenes}/>
                    <ProductDescription descripcion={product.descripcion} ciudad={product.ciudad}/>
                    <ProductFeatures caracteristicas={product.caracteristicas}/>
                    <ProductReservation/>
                    <ProductMap/>
                    <ProductPolicies/>
                </Body> : <></>
                }
            <Footer/>
        </section> 
    )
}

export default Product;