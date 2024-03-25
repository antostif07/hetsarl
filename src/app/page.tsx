import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services";
import Link from "next/link";

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
            <p className="text-sm leading-6 text-gray-600">Nous agissons comme un intermédiaire entre les entreprises (ou professionnels) et les fournisseurs de services financiers, d’assurance ou de produits</p>
          </div>
          {/* <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
          </div> */}
        </div>
      </div>
      <div className="bg-gray-500 bg-[url('/4.jpg')] bg-no-repeat bg-cover flex">
        <div className="relative">
          <div className="bg-[#000000b1] w-full h-full absolute"></div>
          <div className="flex flex-col items-center px-6 lg:px-48 py-16 relative">
            <h1 className="text-white text-4xl font-bold mb-16">About Us</h1>
            <div className="grid grid-cols-3 items-center">
              <p className="text-white leading-8 col-span-2">
              Hearing Electronic Tools (Sarl) est une des entreprise en pleine croissance du secteur des affaires. C’est une société 100 % détenue par des Africains, créée en 2017 et opérant actuellement à Kinshasa, Lubumbashi et Johannesburg, en République démocratique du Congo et en Afrique du Sud. L’entreprise vise à fournir des services commerciaux variés tels que la gestion de projets, la sécurité, la surveillance, la peinture, l’informatique, la livraison de tous types de matériaux et l’exploitation minière. Elle a l’intention d’avoir un impact significatif sur l’économie du secteur des affaires, tant en termes de production que de traitement. Ce faisant, elle contribue à la réduction de la pauvreté, à la création d’emplois et au développement économique. L’entreprise repose sur une vaste expérience, des connaissances et des compétences de ses fondateurs, qui sont fiers de porter HET vers de nouveaux sommets. À ce jour, nous sommes fiers d’avoir accumulé des années d’expérience considérable dans le secteur des affaires. 
              </p>
              <div className="w-[300px] h-[300px] bg-primary ml-8 bg-[url('/4.jpg')] bg-cover"></div>
            </div>
            <Button className="mt-16">
              <Link href="/about-us">Voir Plus</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="px-6 lg:px-48 py-16 relative">
        <h1 className="text-4xl font-bold mb-16 text-center">Our Services</h1>
        <div className="grid grid-cols-3 gap-8">
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
    </div>
  );
}
