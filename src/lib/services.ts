type Service = {
    name: string;
    minDesc?: string;
    link: string;
    icon: string;

}
export const services: Service[] = [
    {
        name: 'Négoce (Courtage commercial)',
        minDesc: 'Nous facilitons les transactions et permet aux entreprises de prendre des décisions éclairées en matière de finances et d’assurances. 🤝💼',
        link: '/services#negoce',
        icon: '/negoce.png'
    },
    {
        name: 'Fournitures de bien et service',
        minDesc: 'Nous facilitons l’approvisionnement en ressources matérielles et immatérielles pour les entreprises, contribuant ainsi à leur bon fonctionnement. 🤝💼',
        link: '/services#service',
        icon: '/fourniture.png'
    },
    {
        name: 'Investissement',
        minDesc: 'Nous facilitons la constitution de patrimoine et offre des solutions adaptées aux besoins financiers de nos clients.',
        link: '/services#investment',
        icon: '/investment.png'
    },
]