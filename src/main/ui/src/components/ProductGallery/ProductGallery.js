
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import "./ProductGallery.scss";
import { Autoplay, Pagination, FreeMode, Navigation, Thumbs } from "swiper";


const ProductGallery = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [modal, setModal] = useState(false);
    // const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const imagenes = [
        "https://images.unsplash.com/photo-1590447158019-883d8d5f8bc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
        "https://images.unsplash.com/photo-1578991624414-276ef23a534f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1027&q=80",
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ]


    const changeSize = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', changeSize);
        return () => {
            window.removeEventListener('resize', changeSize);
        }
    })
     if(width < 1024){
        return(
            <div className="product-gallery">
                <div className="product-content">
                <Swiper
                    pagination={{
                        type: "fraction",
                    }}
                    spaceBetween={50}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1}
                    className="mySwiper"
                >
                    {imagenes.map((image, index) => <SwiperSlide><img src={image} alt="slide-images"/></SwiperSlide>)}
                </Swiper>
                </div>
            </div> 
        )
     } else {
        return(
            <div className="product-gallery">
                <div className="product-content">
                    <div className='gallery-desktop'>
                        <div className='gallery-1'>
                            <img src={imagenes[0]} alt="slide-images"/>
                        </div>
                        <div className="gallery-4">
                            <img src={imagenes[1]} alt="slide-images"/>
                            <img src={imagenes[2]} alt="slide-images"/>
                            <img src={imagenes[3]} alt="slide-images"/>
                            <img src={imagenes[4]} alt="slide-images"/>
                        </div>
                        <button onClick={() => { setModal(true)}}>Ver más</button>
                    </div>
                </div>
                {
                    modal ? <div class="gallery-modal">
                    <div>
                        <i onClick={() => { setModal(false)}} class="fa-solid fa-xmark"></i>
                    <Swiper
                        style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                        }}
                        pagination={{
                            type: "fraction",
                        }}
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        // thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Pagination, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        {imagenes.map((image, index) => <SwiperSlide><img src={image} alt="slide-images"/></SwiperSlide>)}
                    </Swiper>
                    <Swiper
                        // onSwiper={(swiper) => setThumbsSwiper(swiper)}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        {imagenes.map((image, index) => <SwiperSlide><img src={image} alt="slide-images"/></SwiperSlide>)}
                        
                    </Swiper>
                    </div>
                </div> : <></>
                }
                
            </div> 
        )
     }
}

export default ProductGallery;