import React from 'react'
import SwitchingEnergyImg from '../assets/images/png/switching-energy-img.png'
import CustomHeading from './common/CustomHeading'
import CustomDescription from './common/CustomDescription'
import CustomButton from './common/CustomButton'

const SwitchingEnergy = () => {
    return (
        <>
            <div className="flex justify-center items-center py-10 sm:py-20 md-py-30 lg:pt-50 lg:pb-40.5">
                <div className="max-w-[1140px] px-3">
                    <div className="flex max-lg:flex-col-reverse gap-9 lg:gap-[70px] items-center">
                        <img className='w-full max-w-[507px] lg:max-w-[450px] xl:max-w-[507px]' src={SwitchingEnergyImg} alt="switching-energy" />
                        <div>
                            <CustomHeading headingClass="lg:max-w-[409px] pb-4" headingSpan="Switching Energy" headingtext="Made Simple" />
                            <CustomDescription descriptionClass="lg:max-w-[558px] pb-9.5" descriptionText="Say goodbye to confusing energy plans! We simplify the process by providing clear and competitive electricity and gas recommendations. Whether you're moving or just seeking a better deal, our platform connects you with the best energy providers quickly and easily, helping you save on energy bills." />
                            <h3 className='font-family-primary font-normal text-2xl leading-[110%] text-[#003459] capitalize pb-7'>Benefits of Comparing Energy Plans</h3>
                            <ul className='pb-10.5'>
                                <li className='list-disc ml-6.5 font-family-primary font-normal text-base leading-[150%] text-[#00171F] opacity-90 pt-2'>Save money by finding cheaper deals.</li>
                                <li className='list-disc ml-6.5 font-family-primary font-normal text-base leading-[150%] text-[#00171F] opacity-90 pt-2'>Get better customer service.</li>
                                <li className='list-disc ml-6.5 font-family-primary font-normal text-base leading-[150%] text-[#00171F] opacity-90 pt-2'>Explore greener, more sustainable energy options.</li>
                            </ul>
                            <CustomButton btnClass="" btnText="Compare With Us" whiteArrow={<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 14.3691L14 1.36914M14 1.36914V13.8491M14 1.36914H1.52" stroke="white" stroke-width="1.93338" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SwitchingEnergy