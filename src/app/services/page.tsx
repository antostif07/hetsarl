import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/ui/infinite-cards";
import { services } from "@/lib/services";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      <div className=" px-6 lg:px-48 flex flex-col justify-center pt-32">
        <div className="py-4">
          <Badge className="text-4xl">Nos Services</Badge>
        </div>
      </div>
      <div className="px-6 lg:px-48 pb-16">
        <div className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="md:col-start-1 md:col-end-3 flex flex-col">
              <h2 className="py-4 font-bold text-2xl">Négoce</h2>
              <p>
                Nous nous constituons en une plateforme de négoce et avons construit un réseau efficace et fiable de producteurs et de coopératives minières qui exploitent les matières premières. Nous avons la possibilité de fournir des minerais stratégiques très recherchés pour les industries modernes. Nous avons à notre actif les minerais suivants : or, cuivre concentré cathode, cobalt concentré et hydroxyde, coltan, wolframite, cassitérite, lithium, diamant, bauxite, fer, étain, nickel, ilménite, niobium, pierres de couleur, germanium, argile, sable asphaltique, bois rouge, vert, noir et charbon de bois, platine, palladium, vanadium, et bien d'autres matières stratégiques.
              </p>
              <p>
              La RDC est un pays vaste aux multiples opportunités dans tous les secteurs. Nous sommes très ouverts à toute proposition pour former un partenariat gagnant-gagnant avec vous. La société repose sur une vaste expérience, des connaissances et des compétences de ses personnels avec un état d'esprit basé à 95 % sur la réussite et 5 % sur la stratégie, avec la détermination de porter notre société vers de nouveaux horizons. Ne donnez pas toujours crédit à ce que disent certains médias pour le Congo car la réalité est autre. La République démocratique du Congo est un pays-continent très riche avec de multiples possibilités et une vocation agricole continentale, y compris des milliers d'hectares vides accompagnés de cours d'eau.
              </p>
            </div>
            <div className="md:col-start-1 md:col-end-3 flex flex-col">
              <h2 className="py-4 font-bold text-2xl">Fourniture de biens et services</h2>
              <p className="mb-4">Nous proposons une gamme complète de biens et services, couvrant notamment :</p>
              
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
            <div className="md:col-start-1 md:col-end-3 flex flex-col">
              <h2 className="py-4 font-bold text-2xl">Investissement/Trading</h2>
              <p>
              Notre société entretient des rapports solides dans le secteur de l'investissement avec la Chambre de commerce nationale et de l'économie du Congo (CCNE-RDC) afin d'assurer la promotion des immenses potentialités de la RDC dans tous les secteurs clés du développement.
              </p>
              <p>
              Pour la sécurité de vos investissements en RDC, la présidence, soucieuse de lutter contre la corruption et d'instaurer un climat des affaires stable, a mis en place un organe appelé l'AZES (Agence de Zones Économiques Spéciales). L'AZES facilite et accompagne l'installation d'usines de production ou de fabrication dans tous les secteurs, assure la sécurité des investissements et accorde des exonérations en termes d'équipements. Nous pouvons également vous faciliter la création de société avec notre cabinet d'avocats.
              </p>
              <p>
              Nous recherchons des partenaires dans les domaines suivants : télécommunications, agro-industrie, construction, énergies renouvelables, électricité, santé, exploitation minière, exploitation de 21 blocs pétroliers et 3 gaziers ou implantation d'une raffinerie de pétrole, pêche, élevage, transport (maritime, ferroviaire, aérien, numérique), certification de blocs pétroliers et de carrés miniers.
              </p>
              <p>
              Le contexte en RDC est favorable avec les systèmes de BOT, JV et PPP, ou à la limite, des échanges avec les matières premières afin de permettre au pays de s'auto-développer. Nous avons besoin de partenaires flexibles et ambitieux, quelle que soit leur origine. Nous sommes maîtres de notre destin et libres de traiter avec tout le monde, du moins sur la même longueur d'onde et dans un rapport mutuel gagnant-gagnant.
              </p>
              <p>
              Nous sommes également à la recherche de partenaires financiers pour la gestion des déchets ménagers à Kinshasa, surtout les déchets plastiques pour la transformation en carburant. Nous avons déjà un marché cible et plus ou moins 10 millions de tonnes de déchets.
              </p>
              <p>
              Si vous avez besoin de multiplier votre argent, le Congo est un paradis. Ne suivez pas ce que disent les médias, c'est la politique, la réalité est tout autre. Nous sommes ouverts et disposés à discuter de toute forme d'affaires. "Il n'y a aucune chance, aucun destin, aucun destin qui puisse entraver la ferme détermination d'une âme déterminée.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
