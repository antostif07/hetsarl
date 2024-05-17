"use client"
import "../page.css"
import WhatWeDo from '@/components/WhatWeDo/WhatWeDo';
import { motion, useAnimation } from 'framer-motion';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import Title from "@/components/Title";

export default function Home() {

  const controls = useAnimation()

  return (
    <motion.div className="app" animate={controls}>
      <Navbar />
      <Title text={"A Propos de Nous"} imageUrl="/bg.jpg" />
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
