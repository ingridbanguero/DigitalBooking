import "./ProductPolicies.scss";

const ProductPolicies = () => {
    return(
        <div className="product-policies">
            <div className="product-content">
                <h1>Qué tenes que saber</h1>
                <div className="policies-options">
                    <div>
                        <h2>Normas de la casa</h2>
                        <p>Check-out: 10:00</p>
                        <p>No se permiten fiestas</p>
                        <p>No fumar</p>
                    </div>
                    <div>
                        <h2>Salud y seguridad</h2>
                        <p>Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.</p>
                        <p>Detector de humo</p>
                        <p>Depósito de seguridad</p>
                    </div>
                    <div>
                        <h2>Política de cancelación</h2>
                        <p>Agregá las fechas de tu viaje para obtener las detalles de cancelación de esta estadía.</p>
                    </div>
                </div>
                
            </div>
        </div> 
    )
}

export default ProductPolicies;