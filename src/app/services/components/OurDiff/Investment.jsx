import React from 'react'
import './OurDiff.css'
import { motion } from 'framer-motion'
import { containerVariants, desVariants, tagVariants, titleVariants } from '@/utils/animation'

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
                    className='tag text-4xl'>
                        Investissement et Trading
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
                        Nous sommes également à la recherche de partenaires financiers pour la gestion des déchets ménagers à Kinshasa, surtout les déchets plastiques pour la transformation en carburant. Nous avons déjà un marché cible et plus ou moins 10 millions de tonnes de déchets.
                        </p>
                        <p className='mb-4'>
                        Si vous avez besoin de multiplier votre argent, le Congo est un paradis. Ne suivez pas ce que disent les médias, c'est la politique, la réalité est tout autre. Nous sommes ouverts et disposés à discuter de toute forme d'affaires. "Il n'y a aucune chance, aucun destin, aucun destin qui puisse entraver la ferme détermination d'une âme déterminée.
                        </p>
                    </motion.span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Investment