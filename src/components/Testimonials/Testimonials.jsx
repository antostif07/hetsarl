import React from 'react'
import SlickSlider from './SlickSlider'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <div className="t-wrapper">
        <div className="container">
            <div className="t-container">
                <div className="t-head">
                    <span className='tag'>Nos Partenaires</span>
                    {/* <span className='title'>Access capital that complements traditional funding options.</span> */}
                    {/* <span className='des'>What people say about us</span> */}
                </div>
            </div>
            {/* slider */}
            <SlickSlider/>
        </div>
    </div>
  )
}

export default Testimonials