'use client'
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/services";

export default function SectionService() {
    return (
      <div className="px-6 lg:px-48 py-16 relative">
        <motion.h1 
          className="text-4xl font-bold mb-16 text-center"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >Nos Services</motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {
            services.map((service, index) => (
              <div className="flex flex-col items-center justify-between" key={index}>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-no-repeat bg-cover flex">
                    <img src={service.icon} alt="" />
                  </div>
                  <h2 className="py-8 font-bold text-xl">{service.name}</h2>
                </div>
                <p>{service.minDesc}</p>
                <Button className="my-8">
                  <Link href={service.link}>En savoir Plus</Link>
                </Button>
              </div>
            ))
          }
        </div>
      </div>
    )
}