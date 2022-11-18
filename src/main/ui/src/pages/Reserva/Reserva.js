import "./Reserva.scss";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import baseUrl from "../../helpers/api";
import Body from "../../components/Body/Body";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductTitle from "../../components/ProductTitle/ProductTitle";
import ReservaForm from "../../components/ReservaForm/ReservaForm"
import ReservaCalendar from "../../components/ReservaCalendar/ReservaCalendar";
import ReservaSchedule from "../../components/ReservaSchedule/ReservaSchedule";
import ReservaDetails from "../../components/ReservaDetails/ReservaDetails";
import ProductPolicies from "../../components/ProductPolicies/ProductPolicies";

const Reserva = () => {
    let { id } = useParams();
    const [product, setProduct] = useState(null);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const handleStartDate = (startDate) => {
        setStartDate(startDate);
    }

    const handleEndDate = (endDate) => {
        setEndDate(endDate);
    }

    // Traer producto por id
    useEffect(
        () => {
            try{
                fetch(`${baseUrl}/productos/${id}`)
                .then(response => response.json())
                .then(data => setProduct(data))
            }catch(e){
                console.log(e);
            }
        }, [id]
    )

    return(
        <section className="reserva">
            <Navbar/>
                { product ? 
                    <Body>
                        <ProductTitle nombre={product.nombre} categoria={product.categoria}/>
                            <section className="reserva-contents">
                                <div className="reserva-content-data">
                                    <ReservaForm/>
                                    <ReservaCalendar onSelectStartDate={handleStartDate} onSelectEndDate={handleEndDate}/>
                                    <ReservaSchedule/>
                                </div>
                                <div className="reserva-content-details">
                                    <ReservaDetails details={product} startDate={startDate} endDate={endDate}/>
                                </div>
                            </section>
                        <ProductPolicies/>
                    </Body> : <></>
                }
            <Footer/>
        </section> 
    )
}

export default Reserva;