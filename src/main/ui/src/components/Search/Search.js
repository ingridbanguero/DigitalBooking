import './Search.scss';
import React, { useState } from 'react';
import Ciudades from '../../helpers/ciudades.json';
import Calendar from '../Calendar/Calendar';

const Search = () => {
    const [openCity, setOpenCity] = useState(false);
    const [openCalendar, setOpenCalendar] = useState(false);
    const [cityName, setCityName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("")

    const handleSelectDate = (dateRange) => {
        setOpenCalendar(false);
        setStartDate(`${dateRange[0].getDate()} de ${dateRange[0].toLocaleString('default', { month: 'short' })}.`);
        setEndDate(`${dateRange[1].getDate()} de ${dateRange[1].toLocaleString('default', { month: 'short' })}.`);
    }

    return(
        <div className="search">
            <h1>Busca ofertas en hoteles, casas y mucho más</h1>
            <form onSubmit={e => e.preventDefault()}>
                <div className="location">
                    <select onClick={() => setOpenCity(!openCity)}>
                        { cityName ?  
                        <option selected disabled>{cityName}</option> :
                        <option selected disabled>¿A dónde vamos?</option>
                        }
                    </select>
                    {
                        openCity
                        ? 
                        <div className='select-city'>
                            { Ciudades.map((item, index) => {
                                return(
                                <div className='option-city' key={index} onClick={() => {setCityName(item.city); setOpenCity(false)}}>
                                    <i class="fa-solid fa-location-dot"></i>
                                    <p>{item.city}</p>
                                    <p>{item.country}</p>
                                </div>)
                            })}
                        </div>
                        : <></>
                    }
                </div>
                <div className='field-calendar'>
                    <select onClick={() => setOpenCalendar(!openCalendar)}>
                        { startDate && endDate ?  
                        <option selected disabled>{startDate} - {endDate}</option> :
                        <option selected disabled>¿A dónde vamos?</option>
                        }
                    </select>
                    {openCalendar ? <Calendar onSelectDate={handleSelectDate}/> : <></>}
                </div>
                <button className="button1 search-button">Buscar</button>
            </form>
        </div>
    )
}

export default Search;