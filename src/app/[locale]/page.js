"use client"

import './page.css'
import Hero from '@/app/[locale]/components/Hero/Hero';
import WhatWeDo from '@/app/[locale]/components/WhatWeDo/WhatWeDo';
import { motion, useAnimation } from 'framer-motion';
import HowItWorks from '@/app/[locale]/components/HowItWorks/HowItWorks';
import Testimonials from '@/app/[locale]/components/Testimonials/Testimonials';
import Footer from '@/app/[locale]/components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

export default function Home() {
  const controls = useAnimation()

  return (
    <motion.div className="app" animate={controls}>
      <Navbar />
      <Hero />
      {/* <BrandingVideo /> */}
      <WhatWeDo />
      {/* <motion.div
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
        <OurDiff />
      </motion.div> */}
      <HowItWorks />

      {/* <motion.div
      onViewportEnter={()=> 
        controls.start({
          backgroundColor: "var(--primary-color)",
        })
      } 
      onViewportLeave={()=> controls.start({
        backgroundColor: "white",
      })}
      viewport={{amount: 0.4}}
      >
        <WhoWeInvest />
      </motion.div> */}

      <Testimonials />
      <Footer />
    </motion.div>
  );
}
