import React from 'react'

const CustomButton = ({ btnText, btnClass, whiteArrow, blackArrow }) => {
    return (
        <button className={`flex items-center outline-0 gap-2 font-family-primary font-bold text-base leading-[100%] capitalize text-white py-4 px-5 rounded-bl-[45px] rounded-tr-[50px] rounded-br-[50px] hover:scale-105 transition-all duration-200 ease-linear bg-[#00A8E8] cursor-pointer ${btnClass}`}>{btnText} <span>{whiteArrow}</span> <span>{blackArrow}</span> </button>
    )
}

export default CustomButton