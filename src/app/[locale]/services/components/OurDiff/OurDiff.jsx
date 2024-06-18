import React from 'react'
import './OurDiff.css'
import { motion } from 'framer-motion'
import { containerVariants, desVariants, tagVariants, titleVariants } from '@/utils/animation'
import { useTranslations } from 'next-intl'

const OurDiff = () => {
    const t = useTranslations('Services')

  return (
    <div className="pt-16">
        <div className="container">
            <div className="od-container">
                {/* head */}
                <div className="od-head">
                    <motion.span 
                    variants={tagVariants}
                    initial="offscreen"
                    whileInView={"onscreen"}
                    className='tag text-4xl'>
                        {t('trading')}
                    </motion.span>
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
                    className='text-white'>
                    <div className="h-48 sm:h-96 w-full bg-[url('/negoce-bg.jpg')] bg-cover bg-center rounded-3xl"></div>
                        <p className='mb-8'>
                            {t('trading_description')}
                        </p>
                        <p>
                            {t('opportunities')}
                        </p>
                    </motion.span>
                </div>
                {/* features */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8].map((feature, i)=> (
                            <motion.div 
                            variants={containerVariants((i + 1) * 0.1)}
                            initial="offscreen"
                            whileInView="onscreen"
                            style={{'--image-url': `url('/negoce-${feature}.jpg')`}}
                            key={i} className='w-full h-64 bg-[image:var(--image-url)] bg-cover rounded-3xl'>
                                {/* <Image src={feature.icon} alt="feature" width={128} height={128} />
                                <span className='sec-title'>{feature.title}</span>
                                <span className='text'>{feature.des}</span> */}
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurDiff