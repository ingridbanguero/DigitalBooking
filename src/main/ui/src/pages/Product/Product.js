import { useParams } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Product.scss";


const Product = () => {
    const { id } = useParams();
    console.log(id);
    
    return(
        <>
            <Navbar/>
            <Footer/>
        </> 
    )
}

export default Product;