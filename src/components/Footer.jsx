import React from 'react'
import CustomDescription from './common/CustomDescription'
import FooterLogo from '../assets/images/svg/footer-logo.svg'
import { Facebook, Insta, Linkdin, Twitter } from '../utils/icon'
import Newsletter from './Newsletter'
const Footer = () => {
    return (
        <div className="bg-[url(./assets/images/png/footer-bg-img.png)] bg-no-repeat bg-cover mt-[162px] ">
            <Newsletter />
            <div className="max-w-[1140px] px-3 mx-auto -mt-20">
                <div className="md:flex justify-between">
                    <div>
                        <img className='mb-7' src={FooterLogo} alt="logo" />
                        <CustomDescription descriptionClass="md:max-w-[297px] pb-[36px] text-white" descriptionText="Ut auctor nisi mauris eu tincidunt facilisi. Diam amet sollicitudin pretium maecenas ornare lacus arcu adipiscing." />
                        <h5 className='font-family-primary font-bold text-xl leading-[100%] capitalize pb-4 text-white'>Follow Us</h5>
                        <div className="flex gap-4 pb-10">
                            <a className='w-[33.5px] h-[33.5px] border-[0.84px] border-[#FCFCFC] rounded-full flex items-center justify-center hover:scale-105 transition-all duration-200 ease-linear' href="https://in.linkedin.com/" target='_blank'><Linkdin /></a>
                            <a className='w-[33.5px] h-[33.5px] border-[0.84px] border-[#FCFCFC] rounded-full flex items-center justify-center hover:scale-105 transition-all duration-200 ease-linear' href="https://www.instagram.com/accounts/login/?hl=en" target='_blank'> <Insta /></a>
                            <a className='w-[33.5px] h-[33.5px] border-[0.84px] border-[#FCFCFC] rounded-full flex items-center justify-center hover:scale-105 transition-all duration-200 ease-linear' href="https://www.facebook.com/?_rdr" target='_blank'><Facebook /></a>
                            <a className='w-[33.5px] h-[33.5px] border-[0.84px] border-[#FCFCFC] rounded-full flex items-center justify-center hover:scale-105 transition-all duration-200 ease-linear' href="https://x.com/" target='_blank'><Twitter /></a>
                        </div>
                    </div>
                    <div className='flex gap-[78px] flex-wrap'>
                        <ul>
                            <li className='font-family-primary font-bold text-xl leading-[150%] capitalize pb-3 text-white'>Quick Link</li>
                            <li className='pb-3.5'><a className='font-family-primary font-normal text-base leading-[100%] capitalize opacity-90 text-white relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-white after:rounded hover:after:w-full after:duration-300 after:ease-linear after:transition-all' href="">About</a></li>
                            <li className='pb-3.5'><a className='font-family-primary font-normal text-base leading-[100%] capitalize opacity-90 text-white relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-white after:rounded hover:after:w-full after:duration-300 after:ease-linear after:transition-all' href="">How It Works</a></li>
                            <li className='pb-3.5'><a className='font-family-primary font-normal text-base leading-[100%] capitalize opacity-90 text-white relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-white after:rounded hover:after:w-full after:duration-300 after:ease-linear after:transition-all' href="">Services</a></li>
                            <li className='pb-3.5'><a className='font-family-primary font-normal text-base leading-[100%] capitalize opacity-90 text-white relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-white after:rounded hover:after:w-full after:duration-300 after:ease-linear after:transition-all' href="">Testimonials</a></li>
                            <li className='pb-3.5'><a className='font-family-primary font-normal text-base leading-[100%] capitalize opacity-90 text-white relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-white after:rounded hover:after:w-full after:duration-300 after:ease-linear after:transition-all' href="">Why Us</a></li>
                            <li className='pb-3.5'><a className='font-family-primary font-normal text-base leading-[100%] capitalize opacity-90 text-white relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-white after:rounded hover:after:w-full after:duration-300 after:ease-linear after:transition-all' href="">FAQ</a></li>
                        </ul>
                        <ul>
                            <li className='font-family-primary font-bold text-xl leading-[150%] capitalize pb-3 text-white'>Services</li>
                            <li className='pb-3.5'><a className='font-family-primary font-normal text-base leading-[100%] capitalize opacity-90 text-white relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-white after:rounded hover:after:w-full after:duration-300 after:ease-linear after:transition-all' href="">Privacy Policy</a></li>
                            <li className='pb-3.5'><a className='font-family-primary font-normal text-base leading-[100%] capitalize opacity-90 text-white relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-white after:rounded hover:after:w-full after:duration-300 after:ease-linear after:transition-all' href="">Terms of Services</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-[#FFFFFF33] border w-full "></div>
            <p className='font-family-primary font-normal leading-[150%] text-sm text-center text-white py-5'>© 2025 Bill Central, Inc. All Rights Reserved.</p>
        </div>
    )
}

export default Footer