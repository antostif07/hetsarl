'use client'
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SectionAboutUs() {
    return (
        <div
            className="relative"
        >
          <div className="bg-[#000000b1] w-full h-full absolute"></div>
          <div className="flex flex-col items-center px-6 lg:px-48 py-16 relative">
            <motion.h1 
                className="text-white text-4xl font-bold mb-16"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
            >A Propos de Nous</motion.h1>
            <motion.div 
                className="flex flex-col md:flex-row items-center gap-10"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
            >
              <p className="text-white leading-8 col-span-2">
              HEARING ELECTRONIC TOOLS SARL, en sigle HET SARL, est une société de droit congolais, créée en 2017 et opérant actuellement à Kinshasa et sur toute l'étendue de la RDC. Elle vise à faciliter la mise en relation d'affaires entre les acheteurs et les vendeurs dans tous les secteurs, principalement dans le secteur minier (or, diamant, coltan, lithium, niobium, cuivre, cobalt, wolframite, fer, étain et bien d'autres). Nous sommes en mesure de fournir des services commerciaux variés tels que la fourniture de matières premières (métaux), la gestion de projets privés et publics de l'État, en partenariat avec la Chambre de commerce officielle du Congo. Ainsi, nous avons pour objectif de contribuer à la réduction de la pauvreté, à la création d'emplois et au développement global du pays.
              Nous sommes constitués en une plateforme au sein de laquelle nous rassemblons des producteurs et des coopératives dans les secteurs minier, agricole et bien d'autres.
              </p>
              <div className="p-20 lg:p-40 bg-primary my-4 bg-[url('/4.jpg')] bg-cover"></div>
            </motion.div>
            <Button className="mt-16">
              <Link href="/about-us">Voir Plus</Link>
            </Button>
          </div>
        </div>
    )
}