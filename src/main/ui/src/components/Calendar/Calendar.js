import './Calendar.scss';
import React, { useState, useEffect } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";

const Calendar = (props) => { 
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [width, setWidth] = useState(window.innerWidth);

    registerLocale("es", es);
    setDefaultLocale("es");

    const changeSize = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', changeSize);

        return () => {
            window.removeEventListener('resize', changeSize);
        }
    })

    return(
        <div className='calendar'>
            <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                placeholderText="Check-in - Check out"
                onChange={(update) => {
                    setDateRange(update);
                }}
                dateFormat="yyyy/M/d"
                monthsShown={width < 768 ? 1 : 2}
                locale="es"
                inline
                minDate={new Date()}
                shouldCloseOnSelect={false}
                useWeekdaysShort={true}
                formatWeekDay={nameOfDay => nameOfDay.substr(0,1).toUpperCase()}
            >
                <button className='button1 button-calendar' onClick={() => props.onSelectDate(dateRange)}>Aplicar</button>
            </DatePicker>
        </div>
    )
}

export default Calendar;