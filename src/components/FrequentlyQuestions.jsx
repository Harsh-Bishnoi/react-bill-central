import React, { useState } from 'react'
import CustomHeading from './common/CustomHeading'
import CustomDescription from './common/CustomDescription'
import { ACCORDION_DATA } from '../utils/helper';
import { CloseSvg, OpenSvg } from '../utils/icon';

const FrequentlyQuestions = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <div className="flex justify-center items-center pb-10 sm:pb-20 md:pb-30 lg:pb-40.5">
            <div className="w-[916px] max-lg:px-3">
                <CustomHeading headingClass="pb-4 text-center" headingtext="Frequently Asked " headingSpan2="Questions" />
                <CustomDescription descriptionClass="max-w-[556px] pb-14 text-center mx-auto" descriptionText="Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum" />
                {ACCORDION_DATA.map((item, index) => (
                    <div key={index} className={`mb-7 p-5 sm:p-6 w-full shadow-[0px_4px_23.2px_0px_#00000014] rounded-md ${openIndex === index ? 'bg-[#003459] text-white' : 'bg-[#FEFEFE] text-[#00171F]'
                        }`} >
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="font-family-primary font-normal text-lg sm:text-2xl leading-[110%] w-full cursor-pointer flex justify-between items-center text-start"
                        >
                            <span>{item.text}</span>
                            <span className="ml-3 w-7 h-7 sm:border-[2px] rounded-full flex justify-center items-center">{openIndex === index ? <OpenSvg /> : <CloseSvg />}</span>
                        </button>

                        {openIndex === index && (
                            <div className="font-family-primary font-normal text-base leading-[150%] mt-3.5 max-w-[722px] transition-all duration-200">
                                {item.description}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FrequentlyQuestions;