import "./ProductTitle.scss";
import {Link} from 'react-router-dom';

const ProductTitle = ({nombre, categoria}) => {
    return(
        <div className="product-title">
            <div className="product-content">
                <div>
                    <h4>{categoria.titulo}</h4>
                    <h1>{nombre}</h1>
                </div>
                <Link to="/"><i class="fa-solid fa-chevron-left"></i></Link>
            </div>
        </div> 
    )
}

export default ProductTitle;