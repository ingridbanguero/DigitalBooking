import "./Product.scss";

import { useParams } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import ProductTitle from "../../components/ProductTitle/ProductTitle";
import ProductLocation from "../../components/ProductLocation/ProductLocation";
import ProductGallery from "../../components/ProductGallery/ProductGallery";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import ProductFeatures from "../../components/ProductFeatures/ProductFeatures";
import ProductReservation from "../../components/ProductReservation/ProductReservation";
import ProductMap from "../../components/ProductMap/ProductMap";
import ProductPolicies from "../../components/ProductPolicies/ProductPolicies";

const Product = () => {
    const { id } = useParams();
    console.log(id);
    
    return(
        <section className="product">
            <Navbar/>
            <ProductTitle/>
            <ProductLocation/>
            <ProductGallery/>
            <ProductDescription/>
            <ProductFeatures/>
            <ProductReservation/>
            <ProductMap/>
            <ProductPolicies/>
        </section> 
    )
}

export default Product;