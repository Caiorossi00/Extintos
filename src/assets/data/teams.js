import AndrePicolli from "../images/AndrePicolli.jpeg";
import BrunoTeixeira from "../images/BrunoTeixeira.jpeg";
import DaniloHara from "../images/DaniloHara.jpeg";
import EderMurilo from "../images/EderMurilo.jpeg";
import FlavioTarsis from "../images/FlavioTarsis.jpeg";
import GabrielSorin from "../images/GabrielSorin.jpeg";
import GustavoLopes from "../images/GustavoLopes.jpeg";
// import IgorAmaral from "../images/IgorAmaral.jpeg";
import JeffersonCorrea from "../images/JeffersonCorrea.jpeg";
import JeffreyRadetski from "../images/JeffreyRadetski.jpeg";
import JulioCesar from "../images/JulioCesar.jpeg";
import JuniorJacome from "../images/JuniorJacome.jpeg";

const teams = [
  {
    id: 1,
    name: "Manchester United",
    badge:
      "https://www.ogol.com.br/img/history/imgS620I11754T20190514184938.png",
    estadio: "Old Trafford",
    manager: "Andre Picolli",
    managerPicture: AndrePicolli,
    players: [
      "Bruno Fernandes",
      "Marcus Rashford",
      "Casemiro",
      "Harry Maguire",
    ],
  },
  {
    id: 2,
    name: "Liverpool FC",
    badge:
      "https://backend.liverpoolfc.com/sites/default/files/styles/xl/public/2024-06/lfc-digital-crest-story-23062024.jpg?itok=S9Bq8wQe",
    estadio: "Anfield",
    manager: "Bruno Teixeira",
    managerPicture: BrunoTeixeira,
    players: [
      "Mohamed Salah",
      "Virgil van Dijk",
      "Alisson Becker",
      "Trent Alexander-Arnold",
    ],
  },
  {
    id: 3,
    name: "Manchester City",
    badge:
      "https://i2-prod.manchestereveningnews.co.uk/incoming/article10647838.ece/ALTERNATES/s1200c/manchester-city-new-crest.jpg",
    estadio: "Etihad Stadium",
    manager: "Danilo Hara",
    managerPicture: DaniloHara,
    players: [
      "Kevin De Bruyne",
      "Erling Haaland",
      "Phil Foden",
      "Jack Grealish",
    ],
  },
  {
    id: 4,
    name: "Chelsea FC",
    badge:
      "https://i.pinimg.com/originals/d9/38/b6/d938b6c9e78de74ecdd872e795c9ac4b.jpg",
    estadio: "Stamford Bridge",
    manager: "Eder Murilo",
    managerPicture: EderMurilo,
    players: ["Kai Havertz", "Mason Mount", "N'Golo Kante", "Cole Palmer"],
  },
  {
    id: 5,
    name: "Arsenal FC",
    badge:
      "https://logos-world.net/wp-content/uploads/2020/05/Arsenal-Logo.png",
    estadio: "Emirates Stadium",
    manager: "Flavio Tarsis",
    managerPicture: FlavioTarsis,
    players: [
      "Bukayo Saka",
      "Martin Ødegaard",
      "Gabriel Jesus",
      "William Saliba",
    ],
  },
  {
    id: 6,
    name: "Tottenham Hotspur",
    badge:
      "https://1000logos.net/wp-content/uploads/2018/06/Tottenham-Hotspur-Logo.jpg",
    estadio: "Tottenham Hotspur Stadium",
    manager: "Gabriel Sorin",
    managerPicture: GabrielSorin,
    players: [
      "Harry Kane",
      "Son Heung-min",
      "Richarlison",
      "Pierre-Emile Højbjerg",
    ],
  },
  {
    id: 7,
    name: "Leicester City",
    badge:
      "https://logos-world.net/wp-content/uploads/2020/06/Leicester-City-Logo-2010-present.jpg",
    estadio: "King Power Stadium",
    manager: "Gustavo Lopes",
    managerPicture: GustavoLopes,
    players: [
      "James Maddison",
      "Harvey Barnes",
      "Youri Tielemans",
      "Kasper Schmeichel",
    ],
  },
  // {
  //   id: 8,
  //   name: "Burnley FC",
  //   badge: "https://1000logos.net/wp-content/uploads/2021/02/Burnley-logo.jpg",
  //   estadio: "Turf Moor",
  //   manager: "Igor Amaral",
  //   managerPicture: IgorAmaral,
  //   players: ["Wout Weghorst", "Maxwel Cornet", "Ashley Barnes", "Jack Cork"],
  // },
  {
    id: 9,
    name: "Everton FC",
    badge:
      "https://cdn1.everton.news/uploads/21/2023/05/GettyImages-1313303306-scaled.jpg",
    estadio: "Goodison Park",
    manager: "Jefferson Correa",
    managerPicture: JeffersonCorrea,
    players: [
      "Richarlison",
      "Dominic Calvert-Lewin",
      "Seamus Coleman",
      "Jordan Pickford",
    ],
  },
  {
    id: 10,
    name: "Wolverhampton",
    badge:
      "https://thumbs.dreamstime.com/b/wolverhampton-wanderers-clube-de-futebol-wolfs-badge-oeste-midlands-england-uk-janeiro-207033032.jpg",
    estadio: "Molineux Stadium",
    manager: "Jeffrey Radetski",
    managerPicture: JeffreyRadetski,
    players: ["Raul Jiménez", "Pedro Neto", "Ruben Neves", "João Moutinho"],
  },
  {
    id: 11,
    name: "Southampton FC",
    badge:
      "https://1000logos.net/wp-content/uploads/2018/07/Southampton-Logo-2010.png",
    estadio: "St. Mary's Stadium",
    manager: "Julio Cesar",
    managerPicture: JulioCesar,
    players: [
      "James Ward-Prowse",
      "Che Adams",
      "Theo Walcott",
      "Mohammed Salisu",
    ],
  },
  {
    id: 12,
    name: "Norwich City",
    badge:
      "https://cdn.myportfolio.com/13db6078686b2e3ac46460cec2fba65b/33485027-e1ac-490d-aa20-0e5a8e102b12_rw_3840.jpg?h=61fa96d80f2323107318c3d3134135d1",
    estadio: "Carrow Road",
    manager: "Júnior Jacome",
    managerPicture: JuniorJacome,
    players: ["Teemu Pukki", "Milot Rashica", "Ben Gibson", "Kenny McLean"],
  },
];

export default teams;
