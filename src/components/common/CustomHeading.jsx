import React from 'react'

const CustomHeading = (headingClass, headingSpan, headingtext) => {
    return (
        <h2 className={`font-family-primary text-5xl leading-[110%] capitalize text-[#00171F] ${headingClass}`}> {headingtext} <span className='font-bold'>{headingSpan}</span></h2>
    )
}

export default CustomHeading