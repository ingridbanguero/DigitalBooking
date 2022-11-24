import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Body from "../../components/Body/Body";
import "./Home.scss";
import React, { useState } from 'react';
import Search from "../../components/Search/Search";
import CardListContainer from "../../components/CardListContainer/CardListContainer";
import CardCategoryContainer from "../../components/CardCategoryContainer/CardCategoryContainer";

const Home = () => {
    const [categoryId, setCategoryId] = useState(0);
    const [cityId, setCityId] = useState(0);
    const [dates, setDates] = useState([]);

    const handleSelectCity = (cityId) => {
        setCityId(cityId);
    }

    const handleSelectCategory = (categoryId) => {
        setCategoryId(categoryId);
    }

    const handleSelectDates = (dates) => {
        setDates(dates);
    }

    return(
        <>
            <Navbar/>
            <Body>
                <Search onSelectCity={handleSelectCity} onSelectDates={handleSelectDates}/>
                <CardCategoryContainer onSelectCategory={handleSelectCategory}/>
                <CardListContainer filterCity={cityId} filterCategory={categoryId} filterDates={dates}/>
            </Body>
            <Footer/>
        </>
            
    )
}
export default Home;

