"use client"

import React, { useRef } from 'react'
import './BrandingVideo.css'
import { motion, useScroll, useTransform } from 'framer-motion'

const BrandingVideo = ({video}) => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    })

    const scale = useTransform(scrollYProgress, [0, 1], [.6, 1])

  return (
    <div className="bv-container">
        <div className="container">
            <motion.video 
            ref={ref}
            className='rounded-3xl' autoPlay={false}
            loop muted controls={true}
            // style={{scale}}
            >
                <source src={video} type='video/mp4' />
            </motion.video>
        </div>
    </div>
  )
}

export default BrandingVideo