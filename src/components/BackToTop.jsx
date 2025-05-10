import React, { useEffect, useState } from 'react';
import BackTOTop from '../assets/images/png/back-to-top.png'

const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {showButton && (
                <div onClick={scrollToTop} className="fixed bottom-5 border animate-bounce right-5 cursor-pointer z-2 hover:bg-[#EAF9FF] h-11 w-11 flex justify-center items-center rounded-full shadow-lg shadow-3xl bg-white transition-all duration-200 ease-linear" >
                    <img src={BackTOTop} alt="back to top img" />
                </div>
            )}
        </>
    );
};

export default BackToTop;
