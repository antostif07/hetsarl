import './Title.css'
import React from 'react'

const Title = ({text, imageUrl = ""}) => {
  return (
    <div 
        style={{'--image-url': `url(${imageUrl})`}}
        className="overflow-hidden flex justify-center items-center pt-48 pb-16 text-4xl font-bold text-white bg-[image:var(--image-url)] bg-cover relative"
    >
        <div className="bg-[#00000071] w-full h-full absolute -m-[16px] rounded-[2rem]"></div>
        <h2 className='relative'>{text}</h2>
    </div>
  )
}

export default Title