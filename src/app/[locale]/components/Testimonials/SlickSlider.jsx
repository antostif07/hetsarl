import { testimonialsData } from '@/utils/data'
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'

const SlickSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        touchMove: true,
        useCSS: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    }
  return (
    <div className=''>
        <Slider {...settings}>
            {
                testimonialsData.map((comment, i)=> (
                    <div key={i} className='comment'>
                        {/* upper side */}
                        <div className="flex justify-center">
                            <Image
                            src={comment.image} 
                            className='apos-slider' 
                            alt='apos'
                            width={200}
                            height={150}
                            />
                        </div>

                        {/* lower side */}
                        <div className="c-info">
                            <div className="c-person">
                                <span>{comment.name}</span>
                                <span>{comment.profession}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </Slider>
    </div>
  )
}

export default SlickSlider