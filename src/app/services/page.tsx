"use client"

import { motion, useAnimation } from 'framer-motion';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import Title from '@/app/services/components/Title';
import OurDiff from '@/app/services/components/OurDiff/OurDiff'
import Fournitures from '@/app/services/components/OurDiff/Fournitures'
import Investment from '@/app/services/components/OurDiff/Investment'

export default function Home() {

  const controls = useAnimation()

  return (
    <motion.div className="app" animate={controls}>
      <Navbar />
      <Title />
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
