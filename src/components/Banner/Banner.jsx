import slideImg1 from '../../assets/slideImg1.jpg'
import slideImg2 from '../../assets/slideImg2.jpg'
import slideImg3 from '../../assets/slideImg3.jpg'
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Banner.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {
    return (
        <div>
            <Swiper
                loop={true}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div style={{ backgroundImage: `url(${slideImg1})` }} className="h-full w-full bg-cover bg-no-repeat bg-center">
                        {/* <img src={slideImg1} alt="" /> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ backgroundImage: `url(${slideImg2})` }} className="h-full w-full bg-cover bg-no-repeat bg-bottom">
                        {/* <img src={slideImg1} alt="" /> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ backgroundImage: `url(${slideImg3})` }} className="h-full w-full bg-cover bg-no-repeat bg-center">
                        {/* <img src={slideImg1} alt="" /> */}
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;