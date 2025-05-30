import React from 'react'

const CustomButton = ({ btnText, btnClass, whiteArrow, blackArrow }) => {
    return (
        <button className={`flex items-center outline-0 gap-2 font-family-primary font-bold text-base leading-[100%] capitalize text-white py-4 px-5 rounded-bl-[45px] rounded-tr-[50px] rounded-br-[50px] transition-all duration-300 ease-in-out bg-[#00A8E8] cursor-pointer hover:scale-105 group ${btnClass}`}>{btnText} <span className="transform transition-transform duration-300 group-hover:translate-x-1" >{whiteArrow}</span> <span className="transform transition-transform duration-300 group-hover:translate-x-1">{blackArrow}</span> </button>
    )
}

export default CustomButton