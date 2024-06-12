import React from 'react'
import './OurDiff.css'
import { motion } from 'framer-motion'
import { containerVariants, desVariants, tagVariants, titleVariants } from '@/utils/animation'
import BrandingVideo from '../../../../components/BrandingVideo/BrandingVideo'
import Image from 'next/image'

const Investment = () => {
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
                        Investissement et Trading
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
                        Notre société entretient des rapports solides dans le secteur de l'investissement avec la Chambre de commerce nationale et de l'économie du Congo (CCNE-RDC) afin d'assurer la promotion des immenses potentialités de la RDC dans tous les secteurs clés du développement.
                        </p>
                        <p className='mb-4'>
                        Pour la sécurité de vos investissements en RDC, la présidence, soucieuse de lutter contre la corruption et d'instaurer un climat des affaires stable, a mis en place un organe appelé l'AZES (Agence de Zones Économiques Spéciales). L'AZES facilite et accompagne l'installation d'usines de production ou de fabrication dans tous les secteurs, assure la sécurité des investissements et accorde des exonérations en termes d'équipements. Nous pouvons également vous faciliter la création de société avec notre cabinet d'avocats.
                        </p>
                        <p className='mb-4'>
                        Nous recherchons des partenaires dans les domaines suivants : télécommunications, agro-industrie, construction, énergies renouvelables, électricité, santé, exploitation minière, exploitation de 21 blocs pétroliers et 3 gaziers ou implantation d'une raffinerie de pétrole, pêche, élevage, transport (maritime, ferroviaire, aérien, numérique), certification de blocs pétroliers et de carrés miniers.
                        </p>
                        <p className='mb-4'>
                        Le contexte en RDC est favorable avec les systèmes de BOT, JV et PPP, ou à la limite, des échanges avec les matières premières afin de permettre au pays de s'auto-développer. Nous avons besoin de partenaires flexibles et ambitieux, quelle que soit leur origine. Nous sommes maîtres de notre destin et libres de traiter avec tout le monde, du moins sur la même longueur d'onde et dans un rapport mutuel gagnant-gagnant.
                        </p>
                        <p className='mb-4'>
                        Nous avons de mine de matières premières pour trader ou servir comme garantie pour les financements.
                        </p>
                        <p className='mb-4'>
                        La société hearing électronic tools SARL lence un appel a tout partenaire peut importe le domaine pour avoir une représentation en DRC dans d'une collaboration fructueuse et globale.
                        </p>
                        <p className='mb-4'>
                        Nous sommes également à la recherche de partenaires financiers pour la gestion des déchets ménagers à Kinshasa, surtout les déchets plastiques pour la transformation en carburant. Nous avons déjà un marché cible et plus ou moins 10 millions de tonnes de déchets.
                        </p>
                        <p className='mb-4'>
                        Si vous avez besoin de multiplier votre argent, le Congo est un paradis. Ne suivez pas ce que disent les médias, c'est la politique, la réalité est tout autre. Nous sommes ouverts et disposés à discuter de toute forme d'affaires. "Il n'y a aucune chance, aucun destin, aucun destin qui puisse entraver la ferme détermination d'une âme déterminée.
                        </p>
                    </motion.span>
                    <h2 className='text-black font-bold text-xl'>Nos Mines & Carrières</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                        <BrandingVideo video={`/videos/het-sarl-1.mp4`} />
                        <BrandingVideo video={`/videos/het-sarl-3.mp4`} />
                        <BrandingVideo video={`/videos/het-sarl-4.mp4`} />
                        <BrandingVideo video={`/videos/het-sarl-5.mp4`} />
                        <BrandingVideo video={`/videos/het-sarl-6.mp4`} />
                        <BrandingVideo video={`/videos/het-sarl-7.mp4`} />
                        <BrandingVideo video={`/videos/het-sarl-2.mp4`} />
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
                        {
                            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
                                <Image src={`/investment-${i+1}.jpg`} alt="Investment" height={300} width={300} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Investment