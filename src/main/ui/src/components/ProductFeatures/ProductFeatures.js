import "./ProductFeatures.scss";


const ProductFeatures = () => {
    const features = [
        {
            nombre: "Cocina",
            icono: "fa-solid fa-sink",
        },
        {
            nombre: "Estacionamiento gratuido",
            icono: "fa-solid fa-car",   
        },
        {
            nombre: "Televisor",
            icono: "fa-solid fa-tv",   
        },
        {
            nombre: "Pileta",
            icono: "fa-solid fa-person-swimming",   
        },
        {
            nombre: "Aire acondicionado",
            icono: "fa-solid fa-snowflake",   
        },
        {
            nombre: "Wifi",
            icono: "fa-solid fa-wifi",   
        },
        {
            nombre: "Apto mascotas",
            icono: "fa-solid fa-paw",   
        }
    ]
    return(
        <div className="product-features">
            <div className="product-content">
                <h1>¿Qué ofrece este lugar?</h1>
                <div>
                    { features.map((feature, index) => <div className="feature" key={index}><i className={feature.icono}></i><p>{feature.nombre}</p></div>)}
                </div>
            </div>
        </div> 
    )
}

export default ProductFeatures;