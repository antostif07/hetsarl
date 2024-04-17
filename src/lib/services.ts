type Service = {
    name: string;
    minDesc?: string;
    link: string;
    icon: string;

}
export const services: Service[] = [
    {
        name: 'Négoce',
        minDesc: 'Nous nous constituons en une plateforme de négoce et avons construit un réseau efficace et fiable de producteurs et de coopératives minières qui exploitent les matières premières. Nous avons la possibilité de fournir des minerais stratégiques très recherchés pour les industries modernes.',
        link: '/services#negoce',
        icon: '/negoce.png'
    },
    {
        name: 'Fournitures de bien et service',
        minDesc: 'Notre société propose une gamme complète de services, incluant le nettoyage, le réapprovisionnement, la peinture et la rénovation de maisons et bâtiments, l\'entretien général, la livraison de matériel informatique, l\'entretien de climatisation, la fourniture de consommables de bureau et la maintenance générale.',
        link: '/services#service',
        icon: '/fourniture.png'
    },
    {
        name: 'Investissement',
        minDesc: 'Notre société entretient des rapports solides dans le secteur de l\'investissement avec la Chambre de commerce nationale et de l\'économie du Congo (CCNE-RDC) afin d\'assurer la promotion des immenses potentialités de la RDC dans tous les secteurs clés du développement.',
        link: '/services#investment',
        icon: '/investment.png'
    },
]