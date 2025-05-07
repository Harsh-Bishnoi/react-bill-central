import React from 'react'
import CustomHeading from './common/CustomHeading'
import CustomDescription from './common/CustomDescription'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { SWIPER_DATA_2 } from '../utils/helper';
import { Autoplay, Navigation } from 'swiper/modules';
import { SwiperNextArrow, SwiperPrevArrow } from '../utils/icon';
const Testimonials = () => {
    return (
        <>
            <div className="flex justify-center items-center pb-10 sm:pb-20 md:pb-30 lg:pb-40.5">
                <div className="max-w-[1284px] px-3">
                    <CustomHeading headingClass="pb-4 text-center" headingtext="Our" headingSpan2="Testimonials" />
                    <CustomDescription descriptionClass="max-w-[490px] mx-auto text-center pb-15.5" descriptionText="Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum" />
                    <div className="relative max-w-[1284px]">
                        <div className="flex items-center justify-between">
                            <div className="next-btn absolute left-[-68px] z-10 top-[45%] w-10 h-10 rounded-[34px] border border-[#00171F] flex items-center justify-center hover:bg-[#00171F] swiper-arrow transition-all duration-200 ease-linear cursor-pointer"><SwiperPrevArrow /></div>
                            <div className="prev-btn absolute right-[-68px] z-10 top-[45%] w-10 h-10 rounded-[34px] border border-[#00171F] flex items-center justify-center hover:bg-[#00171F] swiper-arrow transition-all duration-200 ease-linear cursor-pointer"><SwiperNextArrow /></div>
                        </div>
                        <div>
                            <Swiper className='max-w-[1140px]' navigation={{
                                nextEl: '.next-btn',
                                prevEl: '.prev-btn',
                            }}
                                modules={[Navigation, Autoplay]}
                                spaceBetween={24}
                                slidesPerView={3}
                                loop={true}
                                autoplay={{
                                    delay: 1500,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                    },
                                    640: {
                                        slidesPerView: 1,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                    },
                                }}
                                onSlideChange={() => console.log('slide change')}
                            >
                                {SWIPER_DATA_2.map((items, index) => (
                                    <SwiperSlide className='max-w-[364px] mx-auto'>
                                        <div id={index} className="max-w-[364px] border-[#0000001A] border rounded-sm bg-white shadow-[0px_0px_13.9px_0px_#0000001A] p-5">
                                            <div className="flex gap-2 mb-6">
                                                <img src={items.img} alt="img" />
                                                <div className="text-start">
                                                    <p className='font-family-primary font-normal text-base leading-[150%] text-black'>{items.name}</p>
                                                    <p className='font-family-primary font-normal text-base leading-[150%] text-black opacity-50'>{items.id}</p>
                                                </div>
                                            </div>
                                            <img className='mb-4.5' src={items.star} alt="star" />
                                            <p className='text-start font-family-primary font-normal text-base leading-[150%] text-[#00171F] opacity-90'>{items.para}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials