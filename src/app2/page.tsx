'use client'
import { InfiniteMovingCards } from "@/components/ui/infinite-cards";
import LandingPage from "./components/Landing";
import SectionAboutUs from "./components/AboutUs";
import SectionService from "./components/SectionService";
import { motion, useAnimation } from "framer-motion";

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

export default function Home() {
  const controls = useAnimation()
  
  return (
    <motion.div className="relative" animate={controls}>
      <div className=" px-6 lg:px-48 min-h-screen flex flex-col justify-center pt-16">
        <LandingPage />
        {/* <div className="">
          <div className="py-4">
            <Badge>Nous faisons</Badge>
          </div>
          <div className="lg:grid grid-cols-3">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:col-span-2">Etude et Conseils sur le marché commercial</h1>
          </div>
          <div className="bg-gray-500 h-72 my-8 bg-[url('/3.jpg')] bg-no-repeat bg-cover bg-top rounded-3xl"></div>
          <div className="lg:grid grid-cols-2 ">
            <div className="hidden lg:flex"></div>
            <p className="text-sm leading-6 text-gray-600">Nous agissons comme un intermédiaire entre les entreprises (ou professionnels) et les fournisseurs de services financiers, d'assurance ou de produits</p>
          </div>
        </div> */}
      </div>
      <div className="bg-gray-500 bg-[url('/4.jpg')] bg-no-repeat bg-cover flex">
        <SectionAboutUs />
      </div>
      <SectionService />
      <div className="bg-primary px-6 lg:px-48 py-16 relative">
        <h1 className="text-4xl font-bold mb-16 text-center text-white">Nos Partenaires</h1>
        <InfiniteMovingCards items={testimonials} />
      </div>
    </motion.div>
  );
}
