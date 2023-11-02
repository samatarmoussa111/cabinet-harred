type menuType = {
  title: string;
  path: string;
};

type serviceType = {
  id: number;
  title: string;
  description: string;
  src: string;
};

export const menus: menuType[] = [
  { title: "Accueil", path: "/#" },
  { title: "Services", path: "/#" },
  { title: "A propos de nous", path: "/#" },
  { title: "Contact", path: "/#" },
  { title: "Blog", path: "/#" },
];

export const services: serviceType[] = [
  {
    id: 1,
    title: "Droit de la Famille",
    description:
      "Notre cabinet d'avocats comprend les défis émotionnels et juridiques liés aux affaires familiales. Que ce soit pour des divorces, des gardes d'enfants, des pensions alimentaires ou d'autres litiges familiaux, nous sommes là pour vous soutenir. Nous vous offrons une représentation dévouée, des conseils empathiques et des solutions juridiques adaptées à votre situation.",
    src: "/images/wesley.jpg",
  },
  {
    id: 2,
    title: " Droit des Entreprises",
    description:
      "Protégez et faites prospérer votre entreprise avec l'aide de notre expertise en droit des entreprises. Que vous soyez une startup en pleine croissance ou une entreprise établie, nous offrons des services de conseil juridique, la rédaction de contrats, la résolution de litiges commerciaux et plus encore. Mettez votre entreprise sur la voie du succès avec notre soutien juridique.",
    src: "/images/justice.jpg",
  },
  {
    id: 3,
    title: "Droit Pénal",
    description:
      "Si vous faites face à des accusations criminelles, notre équipe d'avocats expérimentés est prête à vous défendre. Nous croyons en la présomption d'innocence et en la protection des droits de nos clients. Que ce soit pour des affaires de délit, de crime ou de DUI, nous nous battons pour vous assurer une défense solide et équitable dans le système judiciaire.",
    src: "/images/wesley2.jpg",
  },
];
