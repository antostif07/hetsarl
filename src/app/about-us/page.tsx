import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/ui/infinite-cards";
import { services } from "@/lib/services";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      <div className=" px-6 lg:px-48 min-h-screen flex flex-col justify-center pt-16">
        <div className="">
          <div className="py-4">
            <Badge className="text-4xl">A Propos</Badge>
          </div>
          <div className="bg-gray-500 h-72 my-8 bg-[url('/3.jpg')] bg-no-repeat bg-cover bg-top rounded-3xl"></div>
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
            <div className="flex flex-col items-center">
              <p className="text-white leading-8 col-span-2">
              Hearing Electronic Tools (Sarl) est une des entreprise en pleine croissance du secteur des affaires. C’est une société 100 % détenue par des Africains, créée en 2017 et opérant actuellement à Kinshasa, Lubumbashi et Johannesburg, en République démocratique du Congo et en Afrique du Sud. L’entreprise vise à fournir des services commerciaux variés tels que la gestion de projets, la sécurité, la surveillance, la peinture, l’informatique, la livraison de tous types de matériaux et l’exploitation minière. Elle a l’intention d’avoir un impact significatif sur l’économie du secteur des affaires, tant en termes de production que de traitement. Ce faisant, elle contribue à la réduction de la pauvreté, à la création d’emplois et au développement économique. L’entreprise repose sur une vaste expérience, des connaissances et des compétences de ses fondateurs, qui sont fiers de porter HET vers de nouveaux sommets. À ce jour, nous sommes fiers d’avoir accumulé des années d’expérience considérable dans le secteur des affaires. 
              </p>
              <div className="w-[300px] h-[300px] bg-primary my-4 bg-[url('/4.jpg')] bg-cover"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 lg:px-48 py-16 relative">
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="text-2xl font-bold mb-8 text-center">Notre Mission</h1>
            To be the best business services of choice. To build long term relationships with our customers and clients and provide exceptional customer services by pursuing business through innovation and advanced technology in business services.
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-8 text-center">Notre Vision</h1>
            Provide reliable machinery/plant and create safe, excellence, rewarding environment for humanity and protecting the environment while enabling and creating job opportunities, social and economic growth and creating prosperity.
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-8 text-center">Notre Savoir-Faire</h1>
            Our personnel are dedicated to learning as much about productivity, innovation and systems. We are the type of company who explore and discover concepts, ideas and suggestions on how best to produce and nourish our clienteles. We can design and customized our services depending on our clients’ need providing perceived customer satisfaction through different production, management models and strategies.
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-8 text-center">Notre Philosophie</h1>
            We work in close partnership with National, Provincial and Local authorities to improve our Business services. Our services play an important role in delivering good services, social inclusion, helping individuals rural and urban communities and institutions/companies in unlocking economic opportunities in the sector we operate in.
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-8 text-center">Nos Principes</h1>
            At Hearing Electronic Tools we aspire to the following business principles:  
            <ul>
              <li>Render premium quality services, to our clients, so as to increase economic activities of the country. i.e.; delivery most efficient, economical and sustainable development service;</li>
              <li>Maximizing asset return to achieve sufficient profit to finance company’s growth;</li>
              <li>Create and coordinate business production and food processing network amongst Business men and other business owners for harmonisation of services.</li>
              <li>To exemplify the highest standard of excellence through the provision of effective and efficient business services;</li>
              <li>To strive for and understand and meet the needs of customers through quality service innovation and creativity to the best satisfaction of customers;</li>
              <li>To ensure good governance through accountability, integrity, responsibility and transparency</li>
              <li>Every employee is supposed to be honest to one self, customer and others.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
