import React from 'react'

const CustomDescription = ({ descriptionClass, descriptionText }) => {
    return (
        <p className={`font-family-primary font-normal text-base leading-[150%] text-[#00171F] opacity-90 ${descriptionClass}`}>{descriptionText}</p>
    )
}

export default CustomDescription