import React, { useState } from 'react'
import CustomHeading from './common/CustomHeading'
import { CloseArrow, OpenArrow } from '../utils/icon';
import { COMPREHENSIVE_DATA } from '../utils/helper';
import TwoMan from '../assets/images/png/two-man-img.png'
const ComprehensiveUtility = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <div className="flex justify-center items-center pb-10 sm:pb-20 md:pb-30 lg:pb-40.5">
            <div className="max-w-[1140px] px-3">
                <div className="flex gap-9 md:gap-[73px] max-lg:flex-wrap">
                    <div className="lg:max-w-[558px] mx-auto">
                        <CustomHeading headingClass="pb-11.5 lg:max-w-[558px]" headingtext="Comprehensive Utility " headingSpan2="Comparisons" />
                        {COMPREHENSIVE_DATA.map((item, index) => (
                            <div key={index} className={`mb-7 px-2.5 py-3 sm:p-3.5 lg:max-w-[558px] border rounded-sm border-[#00000014] outline-0 transition-all duration-200 ease-linear' ${openIndex === index ? 'shadow-[0px_0px_13.9px_0px_#0000001A]' : 'shadow-none'} }`} >
                                <div className="flex items-center gap-2 sm:gap-6">
                                    <div
                                        className={`h-16 w-19 rounded-[100%] flex items-center justify-center transition-all duration-200 ease-linear ${openIndex === index ? 'bg-[#003459]' : 'bg-[#EAF9FF]'}`} >
                                        <item.icon />
                                    </div>
                                    <div className='w-full'>
                                        <div className='flex items-center justify-between w-full'>
                                            <button
                                                onClick={() => toggleAccordion(index)}
                                                className="font-family-primary font-normal text-lg sm:text-2xl leading-[110%] text-[#00171F] w-full cursor-pointer flex justify-between items-center text-start"
                                            >
                                                <span>{item.text}</span>
                                                <span className={`ml-3 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                                    <CloseArrow />
                                                </span>
                                            </button>
                                        </div>
                                        {openIndex === index && (
                                            <div className="font-family-primary mt-1 font-normal text-base leading-[160%] text-[#00171F] max-w-[700px] lg:max-w-[490px] transition-all duration-200">
                                                {item.description}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="max-w-[500px] mx-auto items-center flex pointer-events-none">
                        <img src={TwoMan} alt="man-img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComprehensiveUtility;
