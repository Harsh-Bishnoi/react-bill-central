import React, { useState, useEffect } from 'react';
import CustomButton from './common/CustomButton'
import NavIcon from '../assets/images/svg/nav-icon.svg'
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNavbar = () => {
        setMenuOpen(!menuOpen);
        document.body.classList.toggle("overflow-hidden", !menuOpen);
    };

    useEffect(() => {
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);

    return (
        <nav className='px-4'>
            <div className="max-w-[1140px] mx-auto">
                <div className="flex justify-between items-center py-4">
                        <a href="#"><img src={NavIcon} alt="nav-logo"/></a>
                    <div onClick={toggleNavbar} className="z-50 lg:hidden flex flex-col justify-between w-6 h-5 cursor-pointer">
                        <span className={`block h-1 rounded-3xl bg-white transition-transform duration-300 ease-in-out ${menuOpen && 'rotate-45 translate-y-2'}`}></span>
                        <span className={`block h-1 rounded-3xl bg-white transition-transform duration-300 ease-in-out ${menuOpen && 'opacity-0'}`}></span>
                        <span className={`block h-1 rounded-3xl bg-white transition-transform duration-300 ease-in-out ${menuOpen && '-rotate-45 -translate-y-2'}`}></span>
                    </div>
                    <ul id='nav-name' className={`list-unstyled flex justify-center items-center nav-link gap-6 mb-0 ${menuOpen ? "show-navbar" : ""}`}>
                        <li><a className='font-family-primary font-normal text-base leading-[100%] opacity-90 capitalize text-white relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-white after:rounded hover:after:w-full after:duration-300 after:ease-linear after:transition-all' href="#">About</a></li>
                        <li><a className='font-family-primary font-normal text-base leading-[100%] opacity-90 capitalize text-white relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-white after:rounded hover:after:w-full after:duration-300 after:ease-linear after:transition-all' href="#">How It Works</a></li>
                        <li><a className='font-family-primary font-normal text-base leading-[100%] opacity-90 capitalize text-white relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-white after:rounded hover:after:w-full after:duration-300 after:ease-linear after:transition-all' href="#">Services</a></li>
                        <li><a className='font-family-primary font-normal text-base leading-[100%] opacity-90 capitalize text-white relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-white after:rounded hover:after:w-full after:duration-300 after:ease-linear after:transition-all' href="#">Testimonials</a></li>
                        <li><a className='font-family-primary font-normal text-base leading-[100%] opacity-90 capitalize text-white relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-white after:rounded hover:after:w-full after:duration-300 after:ease-linear after:transition-all' href="#">Why Us</a></li>
                        <li><a className='font-family-primary font-normal text-base leading-[100%] opacity-90 capitalize text-white relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-white after:rounded hover:after:w-full after:duration-300 after:ease-linear after:transition-all' href="#">FAQ</a></li>
                        <li className='lg:hidden'><CustomButton btnClass="bg-white !text-[#00171F]" btnText="Get Started" blackArrow={<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 14.3691L14 1.36914M14 1.36914V13.8491M14 1.36914H1.52" stroke="#00171F" stroke-width="1.93338" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        } /></li>
                    </ul>
                    <ul className='max-lg:hidden block'>
                        <li className=''><CustomButton btnClass="bg-white !text-[#00171F]" btnText="Get Started" blackArrow={<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 14.3691L14 1.36914M14 1.36914V13.8491M14 1.36914H1.52" stroke="#00171F" stroke-width="1.93338" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        } /></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;