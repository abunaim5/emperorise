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
import SecondaryButton from '../Common/SecondaryButton/SecondaryButton';


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
                        <div className='bg-[#4B0082] h-full bg-opacity-45 flex items-center justify-center'>
                            <div className='max-w-6xl mx-auto'>
                                <h1 className='text-7xl font-semibold font-playfair text-[#FFD700] mb-8'>Explore Exclusive Properties</h1>
                                <h3 className='text-3xl font-semibold text-white text-left mb-10'>We promise to understand your unique needs</h3>
                                <SecondaryButton></SecondaryButton>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ backgroundImage: `url(${slideImg2})` }} className="h-full w-full bg-cover bg-no-repeat bg-bottom">
                        <div className='bg-[#4B0082] h-full bg-opacity-45 flex items-center justify-center'>
                            <div className='max-w-6xl mx-auto'>
                                <h1 className='text-7xl font-semibold font-playfair text-[#FFD700] mb-8'>Discover Your Dream Residence</h1>
                                <h3 className='text-4xl font-semibold text-white text-left mb-10'>We build your dream house</h3>
                                <SecondaryButton></SecondaryButton>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ backgroundImage: `url(${slideImg3})` }} className="h-full w-full bg-cover bg-no-repeat bg-center">
                        <div className='bg-[#4B0082] h-full bg-opacity-45 flex items-center justify-center'>
                            <div className='max-w-6xl mx-auto'>
                                <h1 className='text-7xl font-semibold font-playfair text-[#FFD700] mb-8'>Luxury Living Redefined</h1>
                                <h3 className='text-4xl font-semibold text-white text-left mb-10'>Provide a decent level of comfort</h3>
                                <SecondaryButton></SecondaryButton>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;