'use client'
import {motion} from "framer-motion"

const LandingPage = () => {
  const exploreStagger = {
    init:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{
        staggerChildren:0.1,
        delayChildren:0.4
      }
    }
  }
  const exploreStaggerChildren = {
    init:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{
        ease:'easeInOut',
      }
    }
  }
  const exploSimple = {
    init:{
      opacity:0,
      x:-100
    },
    visible:{
      opacity:1,
      x:0,
      transition:{
        delay:1,
        ease:'easeInOut'
      }
    }
  }

  const imgLanding = {
    init:{
      opacity:0,
    },
    visible:{
      opacity:1,
      transition:{
        staggerChildren:0.4,
        delayChildren:1.1,
      }
    }
  }

  const imgLandingChildren = {
    init:{
      opacity:0,
    },
    visible:{
      opacity:1,
      transition:{
        ease:'easeIn'
      }
    }
  }

  return (
    <section className="relative min-h-[90vh] pt-16 sm:pt-32" id="home">
      <div className="grid sm:grid-cols-2">
        <div>
          <motion.h1 className="text-[4rem] font-bold leading-tight -ml-3" variants={exploreStagger} initial="init" animate="visible">
            {Array.from("Hearing Electronic Tools").map((lett,i) => (
              <motion.span key={i} variants={exploreStaggerChildren}>{lett}</motion.span>
            ))}
          </motion.h1>
          <motion.h1 className="bg-red-600 text-[#eaeaea] text-[4rem] font-bold px-4 w-max" variants={exploreStagger} initial="init" animate="visible">
            {Array.from("SARL").map((lett,i) => (
              <motion.span key={i} variants={exploreStaggerChildren}>{lett}</motion.span>
            ))}
          </motion.h1>
          <motion.div className="flex flex-col justify-between mt-5 h-[150px]" variants={exploSimple} initial="init" animate="visible">
            <p className="font-semibold">
            Nous travaillons comme une société de négoce entre les entreprises publiques, privée, les coopératives et la chambre de commerce congo avec un meilleur suivi pour une réussite totale.</p>
                {/* we are agency based in <span className="text-red-600 font-bold">SHIBUYA</span>. we provide<br/>services for those people who want to<br/> explore <span className="text-red-600 font-bold">TOKYO</span> */}
            {/* <div className="flex gap-4">
              <ButtonExplore />        
              <ButtonContact />        
            </div> */}
          </motion.div>
        </div>
        <motion.div className="relative hidden" variants={imgLanding} initial="init" animate="visible">
          <motion.img src="/landing-1.webp" alt="landing page" className="w-6/12 absolute right-0 top-8 origin-top " variants={imgLandingChildren} />
          <motion.img src="/landing-2.webp" alt="landing page" className="w-[60%] absolute -left-0 bottom-32 origin-top" variants={imgLandingChildren} />
          <motion.img src="/landing-3.webp" alt="landing page" className="w-1/2 absolute right-12 -bottom-1 origin-top" variants={imgLandingChildren} />
        </motion.div>
      </div>
    </section>
  )
}

export default LandingPage