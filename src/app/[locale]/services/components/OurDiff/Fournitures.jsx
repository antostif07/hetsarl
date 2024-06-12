import React from 'react'
import '../OurDiff/OurDiff.css'
import '../../../components/HowItWorks/HowItWorks.css'
import { motion } from 'framer-motion'
import { containerVariants, desVariants, tagVariants, titleVariants } from '@/utils/animation'
import { furnitures } from '@/utils/data'

const Fournitures = () => {
  return (
    <div className="hiw-wrapper">
        <div className="container">
            <div className="hiw-container">
                {/* head */}
                <div className="od-head">
                    <motion.span 
                    variants={tagVariants}
                    initial="offscreen"
                    whileInView={"onscreen"}
                    className='hiw-head text-4xl'>
                        Fourniture de biens et services
                    </motion.span>
                    <div className="h-48 sm:h-96 w-full bg-[url('/fourniture-bg.jpg')] bg-cover bg-center rounded-3xl"></div>
                    {/* <motion.span 
                    variants={titleVariants}
                    initial="offscreen"
                    whileInView={"onscreen"}
                    className='title
                    '>
                        Fair capital, hassle free
                    </motion.span> */}
                    <motion.span 
                    variants={desVariants}
                    initial="offscreen"
                    whileInView={"onscreen"}
                    className='text-black'>
                        Nous proposons une gamme complète de biens et services, couvrant notamment :
                    </motion.span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {
                            furnitures.map((feature, i)=> (
                                <motion.div 
                                    variants={containerVariants((i + 1) * 0.1)}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    key={i} className='my-4'
                                >
                                    <div>
                                        <h3 className='mb-2 text-black text-xl font-bold'>{feature.title}</h3>
                                    </div>
                                    <div className='od-supply bg-[image:var(--image-url)] bg-cover py-32'  style={{'--image-url': `url(${feature.bg})`}} />
                                    <span className=''>{feature.des}</span>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fournitures