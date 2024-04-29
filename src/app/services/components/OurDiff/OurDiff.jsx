import React from 'react'
import './OurDiff.css'
import { motion } from 'framer-motion'
import { containerVariants, desVariants, tagVariants, titleVariants } from '@/utils/animation'

const OurDiff = () => {
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
                        Negoce
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
                        <p className='mb-8'>
                            Nous nous constituons en une plateforme de négoce et avons construit un réseau efficace et fiable de producteurs et de coopératives minières qui exploitent les matières premières. Nous avons la possibilité de fournir des minerais stratégiques très recherchés pour les industries modernes. Nous avons à notre actif les minerais suivants : or, cuivre concentré cathode, cobalt concentré et hydroxyde, coltan, wolframite, cassitérite, lithium, diamant, bauxite, fer, étain, nickel, ilménite, niobium, pierres de couleur, germanium, argile, sable asphaltique, bois rouge, vert, noir et charbon de bois, platine, palladium, vanadium, et bien d'autres matières stratégiques.
                        </p>
                        <p>
                        La RDC est un pays vaste aux multiples opportunités dans tous les secteurs. Nous sommes très ouverts à toute proposition pour former un partenariat gagnant-gagnant avec vous. La société repose sur une vaste expérience, des connaissances et des compétences de ses personnels avec un état d'esprit basé à 95 % sur la réussite et 5 % sur la stratégie, avec la détermination de porter notre société vers de nouveaux horizons. Ne donnez pas toujours crédit à ce que disent certains médias pour le Congo car la réalité est autre. La République démocratique du Congo est un pays-continent très riche avec de multiples possibilités et une vocation agricole continentale, y compris des milliers d'hectares vides accompagnés de cours d'eau.
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