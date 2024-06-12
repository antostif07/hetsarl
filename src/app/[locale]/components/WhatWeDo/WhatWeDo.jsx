'use client'

import React from 'react'
import './WhatWeDo.css'
import { motion } from 'framer-motion'
import { containerVariants, desVariants, tagVariants, titleVariants } from '@/utils/animation'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const WhatWeDo = () => {
    const t = useTranslations('About-us')
  return (
    <div className="wwd-wrapper bg-[url('/4.jpg')] bg-cover bg-no-repeat relative">
        <div className="bg-[#000000b1] w-full h-full absolute"></div>
        <div className="container relative">
            <div className="flex flex-col gap-8 items-center justify-center sm:p-4 mt-6">
                {/* head of section */}
                <div className="wwd-head">
                    <motion.span
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className='tag'
                    >
                        {t('title')}
                    </motion.span>
                    <motion.span
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className='text-3xl font-bold text-white'
                    >
                        {" "}
                        HEARING ELECTRONIC TOOLS SARL
                    </motion.span>
                    <motion.span
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={desVariants}
                    className='text-xl'
                    >
                    {t('desc')}    
                    </motion.span>
                </div>

                {/* two blocks */}
                <div className="wwd-blocks">
                    {/* first block */}
                    {/* <div className="wwd-block">
                        <motion.span 
                        variants={titleVariants}
                        initial="offscreen"
                        whileInView={"onscreen"}
                        className='sec-title'>
                            Blue Advances
                        </motion.span>
                        <motion.span 
                        variants={desVariants}
                        initial="offscreen"
                        whileInView={"onscreen"}
                        className='text'>
                            Fund recurring growth expenses e.g. customer acquisition,
                            inventory
                        </motion.span>
                        <div className="block-features">
                            {
                                features.slice(0, 3).map((feature, i)=> (
                                    <motion.div 
                                    initial="offscreen"
                                    whileInView={"onscreen"}
                                    variants={containerVariants((i+1)*0.1)}
                                    className='block-feature' key={i}>
                                        <Image src={feature.icon} alt='feature' width={60} height={60} />
                                        <span>{feature.title}</span>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div> */}
                    {/* second block */}
                    {/* <div className="wwd-block">
                        <motion.span 
                        variants={titleVariants}
                        initial="offscreen"
                        whileInView={"onscreen"}
                        className='sec-title'>
                            Blue Seed
                        </motion.span>
                        <motion.span 
                        variants={desVariants}
                        initial="offscreen"
                        whileInView={"onscreen"}
                        className='text'>
                            Fund one-offs to scale e.g. product, hiring. 
                        </motion.span>
                        <div className="block-features">
                            {
                                features.slice(3, 6).map((feature, i)=> (
                                    <motion.div 
                                    initial="offscreen"
                                    whileInView={"onscreen"}
                                    variants={containerVariants((i+1)*0.1)}
                                    className='block-feature' 
                                    key={i}>
                                        <Image src={feature.icon} alt='feature' width={60} height={60} />
                                        <span>{feature.title}</span>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div> */}
                </div>

                {/* support block */}
                <motion.div 
                initial="offscreen"
                whileInView={"onscreen"}
                variants={containerVariants(0.3)}
                className="wwd-support">
                    {/* left side */}
                    {/* <div>
                        <span className="sec-title">
                            Blue Growth Support
                        </span>
                        <span className="des">
                            Data Insights and full stack expertise to supercharge growth
                        </span>
                    </div> */}

                    {/* right side */}
                    {/* <div>
                        <span className='text'>
                            Actionable data insights by connecting revenue, marketing and social media platforms
                        </span>
                        <span className='text'>
                            On demand execution expertise at cost or revenue share across proposition design
                            engineering marketing analytics, partnerships, brand, intellectual property, market expansion,
                            talent management.
                        </span>
                    </div> */}
                    <Link className="" href={"/about-us"}>
                        {t('see-more')}
                    </Link>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default WhatWeDo