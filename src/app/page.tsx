import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/ui/infinite-cards";
import { services } from "@/lib/services";
import Link from "next/link";

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
  return (
    <div className="relative">
      <div className=" px-6 lg:px-48 min-h-screen flex flex-col justify-center pt-16">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          {/* <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Announcing our next round of funding. <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
          </div> */}
        </div>
        <div className="">
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
        </div>
      </div>
      <div className="bg-gray-500 bg-[url('/4.jpg')] bg-no-repeat bg-cover flex">
        <div className="relative">
          <div className="bg-[#000000b1] w-full h-full absolute"></div>
          <div className="flex flex-col items-center px-6 lg:px-48 py-16 relative">
            <h1 className="text-white text-4xl font-bold mb-16">A Propos de Nous</h1>
            <div className="flex flex-col md:flex-row items-center gap-10">
              <p className="text-white leading-8 col-span-2">
              HEARING ELECTRONIC TOOLS SARL, en sigle HET SARL, est une société de droit congolais, créée en 2017 et opérant actuellement à Kinshasa et sur toute l'étendue de la RDC. Elle vise à faciliter la mise en relation d'affaires entre les acheteurs et les vendeurs dans tous les secteurs, principalement dans le secteur minier (or, diamant, coltan, lithium, niobium, cuivre, cobalt, wolframite, fer, étain et bien d'autres). Nous sommes en mesure de fournir des services commerciaux variés tels que la fourniture de matières premières (métaux), la gestion de projets privés et publics de l'État, en partenariat avec la Chambre de commerce officielle du Congo. Ainsi, nous avons pour objectif de contribuer à la réduction de la pauvreté, à la création d'emplois et au développement global du pays.
              Nous sommes constitués en une plateforme au sein de laquelle nous rassemblons des producteurs et des coopératives dans les secteurs minier, agricole et bien d'autres.
              </p>
              <div className="p-40 bg-primary my-4 bg-[url('/4.jpg')] bg-cover"></div>
            </div>
            <Button className="mt-16">
              <Link href="/about-us">Voir Plus</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="px-6 lg:px-48 py-16 relative">
        <h1 className="text-4xl font-bold mb-16 text-center">Nos Services</h1>
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
      <div className="bg-primary px-6 lg:px-48 py-16 relative">
        <h1 className="text-4xl font-bold mb-16 text-center text-white">Nos Partenaires</h1>
        <InfiniteMovingCards items={testimonials} />
      </div>
    </div>
  );
}
