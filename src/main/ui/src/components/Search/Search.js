import './Search.scss';
import React, { useEffect, useState } from 'react';
import Ciudades from '../../helpers/ciudades.json';

const Search = () => {
    const [openCity, setOpenCity] = useState(false);
    const [cityId, setCityId] = useState("");

    useEffect(() => {
        console.log(cityId); // Id ciudad seleccionada
    })

    return(
        <div className="search">
            <h1>Busca ofertas en hoteles, casas y mucho más</h1>
            <form>
                <div className="location">
                    <select onClick={() => setOpenCity(!openCity)}>
                        <option selected disabled>¿A dónde vamos?</option>
                    </select>
                    {
                        openCity
                        ? 
                        <div className='select-city'>
                            { Ciudades.map((ciudad, index) => {
                                return(
                                <div className='option-city' key={index} onClick={() => setCityId(ciudad.id)}>
                                    <i class="fa-solid fa-location-dot"></i>
                                    <p>{ciudad.ciudad}</p>
                                    <p>{ciudad.pais}</p>
                                </div>)
                            })}
                        </div>
                        : <></>
                    }
                    
                </div>
                <div className="calendar">
                    <input type="text" placeholder="Check-in - Check out"/>
                </div>
                <button className="button1">Buscar</button>
            </form>
        </div>
    )
}

export default Search;