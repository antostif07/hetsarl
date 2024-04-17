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
            <Badge className="text-4xl">Nos Services</Badge>
          </div>
          <div className="flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="md:col-start-1 md:col-end-3 flex flex-col">
                  <h2 className="py-8 font-bold text-xl">Fourniture de biens et services</h2>
                  <span className="mb-4">Nous proposons une gamme complète de biens et services, couvrant notamment :</span>
                  
                  <ul className="text-xs">
                    <li>
                      <span>Nettoyage</span> : Entretien professionnel de vos locaux et espaces de travail.
                    </li>
                    <li>
                      <span>Réapprovisionnement</span> : Gestion et fourniture de vos stocks de produits et de matériel.
                    </li>
                    <li>
                      <span>Peinture et rénovation</span> : Rénovation et embellissement de vos maisons et bâtiments.
                    </li>
                    <li>
                      <span>Entretien général</span> : Prise en charge de l'entretien régulier de vos installations.
                    </li>
                    <li>
                      <span>Livraison de matériel informatique</span> : Fourniture et livraison de matériel informatique adapté à vos besoins.
                    </li>
                    <li>
                      <span>Entretien de climatisation</span> : Maintenance et réparation de vos systèmes de climatisation.
                    </li>
                    <li>
                      <span>Consommables de bureau</span> : Fourniture de tous vos besoins en fournitures de bureau.
                    </li> 
                    <li>
                      <span>Maintenance générale</span> : Intervention et réparation sur vos équipements et installations.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
