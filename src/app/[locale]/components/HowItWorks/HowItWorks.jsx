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
        <div className="container">
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
                <div className="hiw-features">
                    {
                        hitFeatures.map((feature, i)=> (
                            <motion.div 
                            variants={featureVariants}
                            initial="offscreen"
                            whileInView={"onscreen"}
                            style={{'--image-url': `url(${feature.bg})`}}
                            className={`hiw-feature bg-[image:var(--image-url)] bg-cover relative`} 
                            key={i}>
                                <div className="bg-[#00000071] w-full h-full absolute -m-[16px] rounded-[2rem]"></div>
                                {/* left side */}
                                <motion.div 
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        type: 'easeIn',
                                        duration: 1,
                                        delay: .7
                                    }
                                }}
                                className="detail relative"
                                >
                                    {/* <span className='text-white'>0{i+1}</span> */}
                                    <span className='capitalize text-6xl text-white tag'>{t(`service-${i+1}`)}</span>
                                    <span className='text-white text-sm sm:text-xl'>{t(`desc-${i+1}`)}</span>
                                </motion.div>

                                {/* right side */}
                                {/* <div className="icon sm:w-96 w-32">
                                    <Image 
                                    src={feature.icon}
                                    sizes='300px'
                                    width={512} 
                                    height={512} 
                                    alt='feature' 
                                    style={{translate: "50% 0rem"}}
                                    />
                                </div> */}
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks