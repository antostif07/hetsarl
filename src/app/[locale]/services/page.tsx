"use client"

import { motion, useAnimation } from 'framer-motion';
import Footer from '@/app/[locale]/components/Footer/Footer';
import OurDiff from '@/app/[locale]/services/components/OurDiff/OurDiff'
import Fournitures from '@/app/[locale]/services/components/OurDiff/Fournitures'
import Investment from '@/app/[locale]/services/components/OurDiff/Investment'
import Title from '@/app/[locale]/components/Title'
import Navbar from '../components/Navbar/Navbar';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Services')
  const controls = useAnimation()

  return (
    <motion.div className="app" animate={controls}>
      <Navbar />
      <Title text={t('services')} imageUrl='/bg.jpg' />
      <motion.div
      onViewportEnter={()=> 
        controls.start({
          backgroundColor: "var(--secondary-color)",
        })
      } 
      onViewportLeave={()=> controls.start({
        backgroundColor: "white",
      })}
      viewport={{amount: 0.1}}
      >
        <OurDiff />
      </motion.div>
      <Fournitures />
      <motion.div
      onViewportEnter={()=> 
        controls.start({
          backgroundColor: "var(--secondary-color)",
        })
      } 
      onViewportLeave={()=> controls.start({
        backgroundColor: "white",
      })}
      viewport={{amount: 0.4}}
      >
        <Investment />
      </motion.div>
      <Footer />
    </motion.div>
  );
}
