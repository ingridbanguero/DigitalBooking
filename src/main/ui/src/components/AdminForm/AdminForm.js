import './AdminForm.scss';
import React, { useState, useEffect} from 'react';
import baseUrl from "../../helpers/api";

const AdminForm = () => {
    const [categories, setCategories] = useState([]);
    const [ciudades, setCiudades] = useState([]);
    const [selectCity, setSelectCity] = useState({});
    const [selectCategory, setSelectCategory] = useState({});
    const [openCity, setOpenCity] = useState(false);
    const [openCategory, setOpenCategory] = useState(false);


    // Obtener categorias
    useEffect(
        () => {
            try{
                fetch(`${baseUrl}/categorias`)
                .then(response => response.json())
                .then(data => setCategories(data))
            }catch(e){
                console.log(e);
            }
        }, []
    )
    // Obtener ciudades
    useEffect(
        () => {
            try{
                fetch(`${baseUrl}/ciudades`)
                .then(response => response.json())
                .then(data => setCiudades(data))
            }catch(e){
                console.log(e);
            }
        }, []
    )

    return(
        <div className='admin-form'>
            <div className="info">
                <div>
                    <label>Nombre de la propiedad</label>
                    <input type="text" placeholder="Nombre"/>
                </div>
                <div>
                    <label>Categoría</label>
                    <select onClick={() => setOpenCategory(!openCategory)}>
                        {
                            Object.keys(selectCategory).length === 0 ? 
                            <option selected disabled>Categoría</option> :
                            <option selected disabled>{selectCategory.titulo}</option>  
                            
                        }
                    </select>
                    {
                        openCategory && 
                        <div className='custom-select'>
                        { categories.map((categoria, index) => {
                            return(
                            <div className='custom-option' key={index} onClick={() => {setSelectCategory(categoria); setOpenCategory(false)}}>
                                <p>{categoria.titulo}</p>
                            </div>)
                        })}
                    </div>

                    }
                    
                </div>
                <div>
                    <label>Dirección</label>
                    <input type="text" placeholder="Dirección"/>
                </div>
                    
                <div>
                    <label>Ciudad</label>
                    <select onClick={() => setOpenCity(!openCity)}>
                        {
                            Object.keys(selectCity).length === 0 ? 
                            <option selected disabled>Ciudad</option> : 
                            <option selected disabled>{selectCity.nombre}, {selectCity.pais}</option>
                        }
                    </select>
                    {
                        openCity && 
                        <div className='custom-select'>
                        { ciudades.map((ciudad, index) => {
                            return(
                            <div className='custom-option' key={index} onClick={() => {setSelectCity(ciudad); console.log(ciudad);setOpenCity(false)}}>
                                <p>{ciudad.nombre}, {ciudad.pais}</p>
                            </div>)
                        })}
                    </div>
                    }
                    
                </div>
                <div>
                    <label>Descripción</label>
                    <textarea placeholder="Escribe aquí"></textarea>
                </div>
            </div>
        </div>
    )
}

export default AdminForm;