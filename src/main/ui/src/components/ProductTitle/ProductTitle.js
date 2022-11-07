import "./ProductTitle.scss";
import {Link} from 'react-router-dom';

const ProductTitle = () => {
    
    return(
        <div className="product-title">
            <div className="product-content">
                <div>
                    <h4>HOTEL</h4>
                    <h1>Hermitage Hotel</h1>
                </div>
                <Link to="/"><i class="fa-solid fa-chevron-left"></i></Link>
            </div>
        </div> 
    )
}

export default ProductTitle;