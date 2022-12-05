import { useEffect, useState } from 'react';
import baseUrl from "../../helpers/api";
import './AdminAttributes.scss';

const AdminAttributes = () => {
    const [features, setFeatures] = useState([]);
    const [checkFeatures, setCheckFeatures] = useState([]);

    // Obtener caracteristicas
    useEffect(
        () => {
            try{
                fetch(`${baseUrl}/caracteristicas`)
                .then(response => response.json())
                .then(data => setFeatures(data))
            }catch(e){
                console.log(e);
            }
        }, []
    )

    useEffect(() => {
        console.log("checkedItems: ", checkFeatures);
    }, [checkFeatures]);  

    const handleChange = (e) => {
        if(e.target.checked){
            setCheckFeatures([...checkFeatures, Number(e.target.name) ]);
        }else{
            setCheckFeatures(checkFeatures.filter(item => item !== Number(e.target.name)))
        }
    }

    return(
        <div className="admin-attributes">
            <h2>Agregar atributos</h2>
            <div className='attributes'>
                {
                    features.map((feature, index) => {
                        return(
                        <div>
                            <input type="checkbox" name={feature.id} className='custom-checkbox' onChange={handleChange}></input>
                            <span><i className={feature.icono}></i></span>
                            <label>{feature.nombre}</label>
                        </div>
                        )
                    })
                }
               
                
            </div>
        </div>
    )
}

export default AdminAttributes;