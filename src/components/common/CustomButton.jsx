import React from 'react'

const CustomButton = ({ btnText, btnClass, whiteArrow, blackArrow }) => {
    return (
        <button className={`font-family-primary font-bold text-base leading-[100%] capitalize text-white py-3 ${btnClass}`}>{btnText} <span>{whiteArrow}</span> <span>{blackArrow}</span> </button>
    )
}

export default CustomButton