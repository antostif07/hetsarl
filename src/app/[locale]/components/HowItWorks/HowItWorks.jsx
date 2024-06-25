import React from 'react'
import './HowItWorks.css'
import { hitFeatures } from '@/utils/data'
import {motion} from 'framer-motion'
import { tagVariants, titleVariants } from '@/utils/animation'
import { useTranslations } from 'next-intl'

const HowItWorks = () => {
    const t = useTranslations('Our-Services')

    const featureVariants = {
        offscreen: {
            scale: 0.5
        },
        onscreen: {
            scale: 1,
            transition: {
                type: "spring",
                duration: 1.5,
            },
        },
    }

  return (
    <div className="pt-12">
        <div className="px-10">
            <div className="hiw-container">
                {/* head */}
                <div className="hiw-head">
                    <motion.span 
                    variants={tagVariants}
                    initial='offscreen'
                    whileInView={"onscreen"}
                    className='tag'
                    >
                        {t('title')}
                    </motion.span>
                    {/* <motion.span 
                    variants={titleVariants}
                    initial='offscreen'
                    whileInView={"onscreen"}
                    className='title'
                    >
                        Unlocking potential alomg the growth journey
                    </motion.span> */}
                </div>
                {/* features */}
                <div className='flex flex-col sm:flex-row gap-8'>
                    {
                        hitFeatures.map((feature, i) => (
                            
                                <div className="flex flex-col w-full items-center" key={i}>
                                    <h2 className='capitalize text-xl text-white tag mb-8 whitespace-nowrap'>{t(`service-${i+1}`)}</h2>
                                    <motion.div 
                                        // variants={featureVariants}
                                        initial="offscreen"
                                        whileInView={"onscreen"}
                                        style={{'--image-url': `url(${feature.bg})`}}
                                        className={`bg-[image:var(--image-url)] bg-cover relative w-full h-36 rounded-3xl`} 
                                        key={i}></motion.div>
                                        <span className='text-white text-sm sm:text-md mt-4'>{t(`desc-${i+1}`)}</span>
                                </div>
                        ))
                    }
                    </div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks