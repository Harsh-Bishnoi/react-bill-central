import React from 'react'
import CustomHeading from './common/CustomHeading'
import CustomDescription from './common/CustomDescription'
import { Compared, NoService, SaveTime, Support, Thumb, UtilitiesArrow } from '../utils/icon'

const ChooseUtilities = () => {
    return (
        <>
            <div className="flex justify-center items-center pb-10 sm:pb-20 md:pb-30 lg:pb-40.5">
                <div className="max-w-[1140px] px-3">
                    <CustomHeading headingClass="text-center pb-4" headingtext="Why Choose Us for " headingSpan2="Utilities" />
                    <CustomDescription descriptionClass="text-center max-w-[620px] mx-auto pb-14.5" descriptionText="This emphasizes both the action and the benefits, drawing in potential customers with a clear value proposition. Let me know if you'd like any adjustments!" />
                    <div className="flex gap-6 flex-wrap justify-center">
                        <div className="max-w-[400px] hover:scale-102 transition-all duration-200 ease-linear rounded-sm bg-[#003459] p-5 sm:p-10">
                            <div className="mb-[51px]"><Thumb /> </div>
                            <h4 className='font-family-primary font-normal text-2xl leading-[110%] text-white pb-3'>Tailored Recommendations</h4>
                            <CustomDescription descriptionClass="text-white pb-5.5" descriptionText="Our platform analyzes your unique energy needs and preferences to suggest the best utility providers, ensuring you get the most personalized options available." />
                            <div className="w-16 h-13 bg-white flex justify-center items-center rounded-[446px]"><UtilitiesArrow /></div>
                        </div>
                        <div className="max-w-[692px] mx-auto">
                            <div className="flex gap-6 flex-wrap justify-center">
                                <div className="max-w-[334px] border rounded-sm hover:scale-103 transition-all duration-200 ease-linear border-[#00171F1A] p-4 sm:p-6 shadow-[0px_0px_13.9px_0px_#0000001A]">
                                    <div className="pb-4.5"><Compared /></div>
                                    <div className="font-family-primary font-normal text-2xl leading-[110%] text-[#010101] pb-3">Simplified Comparison Process</div>
                                    <CustomDescription descriptionText="Our intuitive platform lets you compare the best utility providers in one place, helping you make a quick and informed decision." />
                                </div>
                                <div className="max-w-[334px] hover:scale-103 transition-all duration-200 ease-linear border rounded-sm border-[#00171F1A] p-4 sm:p-6 shadow-[0px_0px_13.9px_0px_#0000001A]">
                                    <div className="pb-4.5"><SaveTime /></div>
                                    <div className="font-family-primary font-normal text-2xl leading-[110%] text-[#010101] pb-3">Save Time and Money</div>
                                    <CustomDescription descriptionText="With up-to-date plans and pricing, you can be sure you’re getting the most competitive rates available." />
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-6 mt-6 justify-center">
                                <div className="max-w-[334px] hover:scale-103 transition-all duration-200 ease-linear w-full min-h-[286px] border rounded-sm border-[#00171F1A] p-4 sm:p-6 shadow-[0px_0px_13.9px_0px_#0000001A]">
                                    <div className="pb-4.5"><NoService /></div>
                                    <div className="font-family-primary font-normal text-2xl leading-[110%] text-[#010101] pb-3">No Service Interruptions</div>
                                    <CustomDescription descriptionText="We take care of the entire switching process so you can enjoy a hassle-free experience with zero downtime." />
                                </div>
                                <div className="max-w-[334px] hover:scale-103 transition-all duration-200 ease-linear min-h-[286px] border rounded-sm border-[#00171F1A] p-4 sm:p-6 shadow-[0px_0px_13.9px_0px_#0000001A]">
                                    <div className="pb-4.5"><Support /></div>
                                    <div className="font-family-primary font-normal text-2xl leading-[110%] text-[#010101] pb-3">Comprehensive Support</div>
                                    <CustomDescription descriptionText="Whether you need assistance selecting a plan or during the switch, our dedicated support team is here to help every step of the way." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChooseUtilities