import { Badge } from "@/components/ui/badge";

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
            <div className="grid grid-cols-2 items-center">
              <p className="text-white leading-8">
              Hearing Electronic Tools (Sarl) is one of the Business sector growing company. It is 100% black owned company, established in 2017 currently operating in Kinshasa, Lubumbashi and Johannesburg, in DRCongo and South Africa. The company seeks to address Variable business services: Projects managements, Security, guarding, Painting, IT, Delivering of all kind of materials, and mining.
              The company intends to make a significant impact in the Business sector economy both in terms of production and processing. Which in turn contribute to poverty alleviation, job creation and economic development? It has been establish upon an extensive array of knowledge, experience, and skills of its founders, who are dare proud to be taking HET, to higher elevations. To-date we are proud to have accrued years of considerable experience in the Business sector. 
              </p>
              <div className="w-[400px] h-[400px] bg-primary ml-8 bg-[url('/4.jpg')] bg-cover"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
