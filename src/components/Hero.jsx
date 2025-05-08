import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Header'
import CustomDescription from './common/CustomDescription'
import CustomButton from './common/CustomButton'
import CustomInput from './common/CustomInput'
import WomanImg from '../assets/images/png/hero-woman-img.png'
import DotImg from '../assets/images/png/hero-dot-img.png'
const Hero = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <div className="bg-[url(./assets/images/png/hero-bg-img.png)] bg-no-repeat bg-center bg-cover min-h-[810px] rounded-bl-[200px] mb-[20px] md:mb-[64px]">
                <div className="max-w-[1140px] mx-auto">
                    <Header />
                </div>
                <div data-aos="zoom-in" data-aos-easing="linear"
                    data-aos-duration="500" data-aos-once="true" className="max-w-[1140px] px-3 w-full mx-auto">
                    <div className="flex max-lg:flex-wrap max-lg:pt-15 lg:translate-y-32 gap-3">
                        <div className="lg:max-w-[546px] lg:min-h-[662px] flex flex-col justify-between">
                            <div className="">
                                <h1 className='font-family-primary font-normal text-4xl sm:text-[58px] xl:text-[64px] pb-4 leading-[100%] text-white lg:max-w-[612px]'>Easily Compare <span className='font-bold'> Energy, Gas, And Internet </span> Plans</h1>
                                <CustomDescription descriptionClass="lg:max-w-[506px] text-white pb-10.5" descriptionText="Find and switch to the best energy, gas, and internet plans with ease. Our platform simplifies your search, letting you compare providers and make informed decisions, all in one place." />
                                <div className="flex items-center relative max-w-[476px]">
                                    <CustomInput type="text" placeholder="Start typing your address" />
                                    <CustomButton btnClass="absolute z-2 right-[10px]" btnText="Compare" whiteArrow={<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 14.3691L14 1.36914M14 1.36914V13.8491M14 1.36914H1.52" stroke="white" stroke-width="1.93338" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    } />
                                </div>
                            </div>
                            <p className='pt-5 font-family-primary font-normal text-[34px] sm:text-[38px] leading-[110%] capitalize text-white lg:text-[#003459]'>More than <span className='font-bold text-[#00A8E8]'>80,000+</span> companies trust bill central </p>
                        </div>
                        <div className="relative">
                            <img className='absolute -right-16 -top-14 -z-1 max-xl:hidden' src={DotImg} alt="" />
                            <img className='max-lg:mt-5 max-w-[558px] w-full mx-auto pointer-events-none' src={WomanImg} alt="woman-img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero