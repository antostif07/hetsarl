import React from 'react'
import './OurDiff.css'
import { motion } from 'framer-motion'
import { containerVariants, desVariants, tagVariants, titleVariants } from '@/utils/animation'
import BrandingVideo from '../../../components/BrandingVideo/BrandingVideo'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const Investment = () => {
    const t = useTranslations('Services')

  return (
    <div className="od-wrapper">
        <div className="container">
            <div className="od-container">
                {/* head */}
                <div className="od-head">
                    <motion.span
                    variants={tagVariants}
                    initial="offscreen"
                    whileInView={"onscreen"}
                    className='text-4xl text-blue-950'>
                        {t('investment_trading')}
                    </motion.span>
                    <div className="h-48 sm:h-96 w-full bg-[url('/investment-bg.jpg')] bg-cover bg-center bg-no-repeat rounded-3xl"></div>
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
                    className=''>
                        <p className='mb-4'>
                        {t('investment_trading_description')}
                        </p>
                        <p className='mb-4'>
                        {t('partnerships')}
                        </p>
                        <p className='mb-4'>
                        {t('context')}
                        </p>
                        <p className='mb-4'>
                        {t('raw_materials')}
                        </p>
                        <p className='mb-4'>
                        {t('partnership_call')}
                        </p>
                        <p className='mb-4'>
                        {t('waste_management')}
                        </p>
                        <p className='mb-4'>
                        {t('investment_opportunity')}
                        </p>
                    </motion.span>
                    <h2 className='text-black font-bold text-xl'>{t('mines_quarries')}</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                        <BrandingVideo video={`/videos/het-sarl-1.mp4`} />
                        <BrandingVideo video={`/videos/het-sarl-3.mp4`} />
                        <BrandingVideo video={`/videos/het-sarl-4.mp4`} />
                        <BrandingVideo video={`/videos/het-sarl-5.mp4`} />
                        <BrandingVideo video={`/videos/het-sarl-6.mp4`} />
                        <BrandingVideo video={`/videos/het-sarl-7.mp4`} />
                        <BrandingVideo video={`/videos/het-sarl-2.mp4`} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Investment