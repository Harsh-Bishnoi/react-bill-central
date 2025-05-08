import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Logo_1 from '../assets/images/png/logo-1.png'
import Logo_2 from '../assets/images/png/logo-2.png'
import Logo_3 from '../assets/images/png/logo-3.png'
import Logo_4 from '../assets/images/png/logo-4.png'
import Logo_5 from '../assets/images/png/logo-5.png'
import Logo_6 from '../assets/images/png/logo-6.png'
import Logo_7 from '../assets/images/png/logo-7.png'
const LogoSwiper = () => {
    return (
        <>
            <div className="max-w-[1140px] px-3 mx-auto lg:translate-y-35">
                <Swiper
                    spaceBetween={51}
                    slidesPerView={7}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        480: {
                            slidesPerView: 3,
                            spaceBetween: 20,

                        },
                        640: {
                            slidesPerView: 4,
                        },
                        768: {
                            slidesPerView: 5,

                        },
                        1024: {
                            slidesPerView: 7,
                        },
                    }}
                >
                    <SwiperSlide><img src={Logo_1} alt="logo" /></SwiperSlide>
                    <SwiperSlide><img src={Logo_2} alt="logo" /></SwiperSlide>
                    <SwiperSlide><img src={Logo_3} alt="logo" /></SwiperSlide>
                    <SwiperSlide><img src={Logo_4} alt="logo" /></SwiperSlide>
                    <SwiperSlide><img src={Logo_5} alt="logo" /></SwiperSlide>
                    <SwiperSlide><img src={Logo_6} alt="logo" /></SwiperSlide>
                    <SwiperSlide><img src={Logo_7} alt="logo" /></SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default LogoSwiper