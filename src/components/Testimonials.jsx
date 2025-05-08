import React from 'react'
import CustomHeading from './common/CustomHeading'
import CustomDescription from './common/CustomDescription'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { SWIPER_DATA_2 } from '../utils/helper'
import { Autoplay, Navigation } from 'swiper/modules'
import { SwiperNextArrow, SwiperPrevArrow } from '../utils/icon'

const Testimonials = () => {
    return (
        <>
            <div className="w-full px-3 sm:px-6 overflow-hidden pb-10 sm:pb-20 md:pb-30 lg:pb-40.5">
                <div className="max-w-full mx-auto">
                    <CustomHeading headingClass="pb-4 text-center" headingtext="Our" headingSpan2="Testimonials" />
                    <CustomDescription descriptionClass="max-w-[490px] mx-auto text-center pb-15.5" descriptionText="Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum" />
                    <div className="relative max-w-[1284px] mx-auto">
                        <div>
                            <Swiper
                                className="max-w-[1140px] overflow-hidden"
                                navigation={{
                                    nextEl: '.next-btn,.btn-1',
                                    prevEl: '.prev-btn',
                                }}
                                modules={[Navigation]}
                                spaceBetween={24}
                                slidesPerView={3}
                                loop={true}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                    },
                                    640: {
                                        slidesPerView: 2,
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
                                    <SwiperSlide key={index} className="w-full">
                                        <div id={index} className="border-[#0000001A] border rounded-sm bg-white shadow-[0px_0px_13.9px_0px_#0000001A] p-5">
                                            <div className="flex gap-2 mb-6 items-center">
                                                <img className="" src={items.img} alt="img" />
                                                <div className="text-start">
                                                    <p className="font-family-primary font-normal text-2xl leading-[150%] text-black">{items.name}</p>
                                                    <p className="font-family-primary font-normal text-base leading-[150%] text-black opacity-50">{items.id}</p>
                                                </div>
                                            </div>
                                            <img className="mb-4.5" src={items.star} alt="star" />
                                            <p className="text-start font-family-primary font-normal text-base leading-[150%] text-[#00171F] opacity-90">{items.para}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="flex items-center max-xl:gap-5 justify-between max-xl:justify-center">
                            <div className="prev-btn xl:absolute xl:left-0 z-10 top-1/2 max-xl:mt-5 xl:transform xl:-translate-y-1/2 w-10 h-10 rounded-full border border-[#00171F] flex items-center justify-center hover:bg-[#00171F] swiper-arrow transition-all duration-200 ease-linear cursor-pointer">
                                <SwiperPrevArrow />
                            </div>
                            <div className="next-btn xl:absolute xl:right-0 z-10 top-1/2 max-xl:mt-5 xl:transform xl:-translate-y-1/2 w-10 h-10 rounded-full border border-[#00171F] flex items-center justify-center hover:bg-[#00171F] swiper-arrow transition-all duration-200 ease-linear cursor-pointer">
                                <SwiperNextArrow />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials
