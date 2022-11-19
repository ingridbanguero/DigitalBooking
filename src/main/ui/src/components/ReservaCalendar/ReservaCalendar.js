import "./ReservaCalendar.scss";
import Calendar from "../Calendar/Calendar";

const ReservaCalendar = (props) => {
    const handleStartDate = (startDate) => {
        if(startDate !== null){
            props.onSelectStartDate(formatDate(startDate));
        }
    }

    const handleEndDate = (endDate) => {
        if(endDate !== null){
            props.onSelectEndDate(formatDate(endDate));
        } else{
            props.onSelectEndDate("");
        }
    }

    const formatDate = (date) => {
        return [
            (date.getDate().toString().padStart(2, '0')),
            (date.getMonth().toString().padStart(2, '0')),
            date.getFullYear(),
        ].join('/'); 
    }

    return(
        <div className="reserva-calendar">
            <div className="reserva-content">
                <h2>Seleccioná tu fecha de reserva</h2>
                <div>
                    <Calendar onSelectStartDate={handleStartDate} onSelectEndDate={handleEndDate}/>
                </div>
            </div>
            
        </div> 
    )
}

export default ReservaCalendar;