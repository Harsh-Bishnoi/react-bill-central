import React from 'react'
import CustomHeading from './common/CustomHeading'
import CustomButton from './common/CustomButton'
import CustomDescription from './common/CustomDescription'
import TopImg from '../assets/images/png/newsletter-top-img.png'
import BottomImg from '../assets/images/png/newsletter-bottom-img.png'
import CustomInput from './common/CustomInput'

const Newsletter = () => {
    return (
        <>
            <div id='service' className="flex justify-center items-center -translate-y-[170px]">
                <div className="max-w-[1140px] w-full px-3 relative bg-[#EAF9FF] rounded-sm py-8 md:py-[54px] mx-3">
                    <img className='absolute hidden sm:block bottom-0 left-0 pointer-events-none' src={BottomImg} alt="" />
                    <img className='absolute hidden sm:block top-0 right-0 pointer-events-none' src={TopImg} alt="" />
                    <CustomHeading headingClass="text-center pb-4" headingtext="Join Our" headingSpan2="Newsletter" />
                    <div className="flex items-center justify-center">
                        <CustomDescription descriptionClass="max-w-[620px] pb-9.5 text-center" descriptionText="Stay up to date with the latest deals, energy-saving tips, and exclusive offers! Sign up for our newsletter and never miss out on great savings opportunities again." />
                    </div>
                    <div className="flex items-center relative max-w-[476px] mx-auto">
                        <CustomInput type="email" placeholder="Enter your email" />
                        <CustomButton btnClass="bg-[#007EA7] absolute z-2 right-[10px]" btnText="Submit" whiteArrow={<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 14.3691L14 1.36914M14 1.36914V13.8491M14 1.36914H1.52" stroke="white" stroke-width="1.93338" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        } />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newsletter