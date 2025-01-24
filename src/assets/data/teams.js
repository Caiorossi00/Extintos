import AndrePicolli from "../images/AndrePicolli.png";
import BrunoTeixeira from "../images/BrunoTeixeira.png";
import DaniloHara from "../images/DaniloHara.png";
import EderMurilo from "../images/EderMurilo.png";
import FlavioTarsis from "../images/FlavioTarsis.png";
import GabrielSorin from "../images/GabrielSorin.png";
import GustavoLopes from "../images/GustavoLopes.png";
import IgorAmaral from "../images/IgorAmaral.png";
import JefersonCorrea from "../images/JefersonCorrea.png";
import JeffreyRadetski from "../images/JeffreyRadetski.png";
import JulioCesar from "../images/JulioCesar.png";
import JuniorJacome from "../images/JuniorJacome.png";

const teams = [
  {
    id: 1,
    name: "Seleção Pontual",
    badge:
      "https://www.ogol.com.br/img/history/imgS620I11754T20190514184938.png",
    estadio: "Arena LGBT",
    manager: "André Picolli",
    managerPicture: AndrePicolli,
    saldo: "3",
    valorizacao: "2",
    avaliacao: "24 pontos +4",
    texto: "Equipe focada na precisão e no equilíbrio em campo.",
    players: [
      {
        nomeJogador: "Bruno Fernandes",
        valorJogador: 85,
        roleJogador: "Meio-campista",
        valorizacaoJogador: 5,
      },
      {
        nomeJogador: "Marcus Rashford",
        valorJogador: 90,
        roleJogador: "Atacante",
        valorizacaoJogador: 8,
      },
      {
        nomeJogador: "Casemiro",
        valorJogador: 88,
        roleJogador: "Volante",
        valorizacaoJogador: 7,
      },
      {
        nomeJogador: "Harry Maguire",
        valorJogador: 78,
        roleJogador: "Zagueiro",
        valorizacaoJogador: 4,
      },
    ],
  },
  {
    id: 2,
    name: "Futboll Club Baygon",
    badge:
      "https://backend.liverpoolfc.com/sites/default/files/styles/xl/public/2024-06/lfc-digital-crest-story-23062024.jpg?itok=S9Bq8wQe",
    estadio: "Arena SBP",
    manager: "Bruno Teixeira",
    managerPicture: BrunoTeixeira,
    saldo: "4",
    valorizacao: "3",
    avaliacao: "30 pontos +6",
    texto: "Um time com história e uma mentalidade vencedora.",
    players: [
      {
        nomeJogador: "Mohamed Salah",
        valorJogador: 92,
        roleJogador: "Atacante",
        valorizacaoJogador: 9,
      },
      {
        nomeJogador: "Virgil van Dijk",
        valorJogador: 91,
        roleJogador: "Zagueiro",
        valorizacaoJogador: 8,
      },
      {
        nomeJogador: "Alisson Becker",
        valorJogador: 90,
        roleJogador: "Goleiro",
        valorizacaoJogador: 7,
      },
      {
        nomeJogador: "Trent Alexander-Arnold",
        valorJogador: 85,
        roleJogador: "Lateral",
        valorizacaoJogador: 5,
      },
    ],
  },
  {
    id: 3,
    name: "Bagres FC",
    badge:
      "https://i2-prod.manchestereveningnews.co.uk/incoming/article10647838.ece/ALTERNATES/s1200c/manchester-city-new-crest.jpg",
    estadio: "Arena dos Bagres",
    manager: "Danilo Hara",
    managerPicture: DaniloHara,
    saldo: "5",
    valorizacao: "4",
    avaliacao: "35 pontos +10",
    texto: "Domínio técnico e ofensivo, sempre em busca de gols.",
    players: [
      {
        nomeJogador: "Kevin De Bruyne",
        valorJogador: 95,
        roleJogador: "Meio-campista",
        valorizacaoJogador: 10,
      },
      {
        nomeJogador: "Erling Haaland",
        valorJogador: 94,
        roleJogador: "Atacante",
        valorizacaoJogador: 9,
      },
      {
        nomeJogador: "Phil Foden",
        valorJogador: 88,
        roleJogador: "Meio-campista",
        valorizacaoJogador: 7,
      },
      {
        nomeJogador: "Jack Grealish",
        valorJogador: 85,
        roleJogador: "Meio-campista",
        valorizacaoJogador: 6,
      },
    ],
  },
  {
    id: 4,
    name: "Tropa do Bolsonaro",
    badge:
      "https://i.pinimg.com/originals/d9/38/b6/d938b6c9e78de74ecdd872e795c9ac4b.jpg",
    estadio: "Arena Farmaconde de SJC",
    manager: "Éder Murilo",
    managerPicture: EderMurilo,
    saldo: "3",
    valorizacao: "2",
    avaliacao: "25 pontos +5",
    texto: "Um elenco jovem e ambicioso em busca de glórias.",
    players: [
      {
        nomeJogador: "Kai Havertz",
        valorJogador: 85,
        roleJogador: "Meio-campista",
        valorizacaoJogador: 5,
      },
      {
        nomeJogador: "Mason Mount",
        valorJogador: 83,
        roleJogador: "Meio-campista",
        valorizacaoJogador: 4,
      },
      {
        nomeJogador: "N'Golo Kanté",
        valorJogador: 86,
        roleJogador: "Volante",
        valorizacaoJogador: 6,
      },
      {
        nomeJogador: "Cole Palmer",
        valorJogador: 80,
        roleJogador: "Meio-campista",
        valorizacaoJogador: 3,
      },
    ],
  },
  {
    id: 5,
    name: "Arrocha Mamãe",
    badge:
      "https://logos-world.net/wp-content/uploads/2020/05/Arsenal-Logo.png",
    estadio: "Arena da Arrochada",
    manager: "Flávio Tarsis",
    managerPicture: FlavioTarsis,
    saldo: "3",
    valorizacao: "2",
    avaliacao: "25 pontos +5",
    texto: "Um time forte, com garra e determinação para conquistar o topo.",
    players: [
      {
        nomeJogador: "Bukayo Saka",
        valorJogador: 85,
        roleJogador: "Atacante",
        valorizacaoJogador: 5,
      },
      {
        nomeJogador: "Martin Ødegaard",
        valorJogador: 87,
        roleJogador: "Meio-campista",
        valorizacaoJogador: 6,
      },
      {
        nomeJogador: "Gabriel Jesus",
        valorJogador: 86,
        roleJogador: "Atacante",
        valorizacaoJogador: 6,
      },
      {
        nomeJogador: "William Saliba",
        valorJogador: 82,
        roleJogador: "Zagueiro",
        valorizacaoJogador: 4,
      },
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
    saldo: "5",
    valorizacao: "3",
    avaliacao: "20 pontos +3",
    texto: "Uma equipe histórica com paixão em cada partida.",
    players: [
      {
        nomeJogador: "Harry Kane",
        valorJogador: 95,
        roleJogador: "Atacante",
        valorizacaoJogador: 10,
      },
      {
        nomeJogador: "Son Heung-min",
        valorJogador: 92,
        roleJogador: "Atacante",
        valorizacaoJogador: 8,
      },
      {
        nomeJogador: "Richarlison",
        valorJogador: 85,
        roleJogador: "Atacante",
        valorizacaoJogador: 7,
      },
      {
        nomeJogador: "Pierre-Emile Højbjerg",
        valorJogador: 84,
        roleJogador: "Meio-campista",
        valorizacaoJogador: 6,
      },
    ],
  },
  {
    id: 7,
    name: "Tropa dos 13",
    badge:
      "https://logos-world.net/wp-content/uploads/2020/06/Leicester-City-Logo-2010-present.jpg",
    estadio: "Arena 13",
    manager: "Gustavo Lopes",
    managerPicture: GustavoLopes,
    saldo: "6",
    valorizacao: "4",
    avaliacao: "22 pontos +4",
    texto: "Uma tropa unida e determinada a conquistar.",
    players: [
      {
        nomeJogador: "James Maddison",
        valorJogador: 88,
        roleJogador: "Meio-campista",
        valorizacaoJogador: 9,
      },
      {
        nomeJogador: "Harvey Barnes",
        valorJogador: 82,
        roleJogador: "Meio-campista",
        valorizacaoJogador: 7,
      },
      {
        nomeJogador: "Youri Tielemans",
        valorJogador: 84,
        roleJogador: "Meio-campista",
        valorizacaoJogador: 8,
      },
      {
        nomeJogador: "Kasper Schmeichel",
        valorJogador: 86,
        roleJogador: "Goleiro",
        valorizacaoJogador: 9,
      },
    ],
  },
  {
    id: 8,
    name: "O Sistema FC",
    badge: "https://1000logos.net/wp-content/uploads/2021/02/Burnley-logo.jpg",
    estadio: "Teatro dos Pesadelos",
    manager: "Igor Amaral",
    managerPicture: IgorAmaral,
    saldo: "4",
    valorizacao: "3",
    avaliacao: "18 pontos +2",
    texto: "Com táticas impecáveis, é difícil vencê-los.",
    players: [
      {
        nomeJogador: "Wout Weghorst",
        valorJogador: 80,
        roleJogador: "Atacante",
        valorizacaoJogador: 7,
      },
      {
        nomeJogador: "Maxwel Cornet",
        valorJogador: 82,
        roleJogador: "Meio-campista",
        valorizacaoJogador: 6,
      },
      {
        nomeJogador: "Ashley Barnes",
        valorJogador: 79,
        roleJogador: "Atacante",
        valorizacaoJogador: 5,
      },
      {
        nomeJogador: "Jack Cork",
        valorJogador: 76,
        roleJogador: "Meio-campista",
        valorizacaoJogador: 4,
      },
    ],
  },
  {
    id: 9,
    name: "Os Pacificadores",
    badge:
      "https://cdn1.everton.news/uploads/21/2023/05/GettyImages-1313303306-scaled.jpg",
    estadio: "Hopi Hari Stadium",
    manager: "Jeferson Correa",
    managerPicture: JefersonCorrea,
    saldo: "7",
    valorizacao: "5",
    avaliacao: "25 pontos +5",
    texto: "Jogam com espírito pacificador e técnica apurada.",
    players: [
      {
        nomeJogador: "Richarlison",
        valorJogador: 91,
        roleJogador: "Atacante",
        valorizacaoJogador: 10,
      },
      {
        nomeJogador: "Dominic Calvert-Lewin",
        valorJogador: 85,
        roleJogador: "Atacante",
        valorizacaoJogador: 7,
      },
      {
        nomeJogador: "Seamus Coleman",
        valorJogador: 82,
        roleJogador: "Defensor",
        valorizacaoJogador: 6,
      },
      {
        nomeJogador: "Jordan Pickford",
        valorJogador: 88,
        roleJogador: "Goleiro",
        valorizacaoJogador: 9,
      },
    ],
  },
  {
    id: 10,
    name: "Brisbane Lions",
    badge:
      "https://thumbs.dreamstime.com/b/wolverhampton-wanderers-clube-de-futebol-wolfs-badge-oeste-midlands-england-uk-janeiro-207033032.jpg",
    estadio: "The Gabba",
    manager: "Jeffrey Radetski",
    managerPicture: JeffreyRadetski,
    saldo: "3",
    valorizacao: "2",
    avaliacao: "15 pontos +2",
    texto: "Com garra, os leões são sempre desafiadores.",
    players: [
      {
        nomeJogador: "Raul Jiménez",
        valorJogador: 86,
        roleJogador: "Atacante",
        valorizacaoJogador: 8,
      },
      {
        nomeJogador: "Pedro Neto",
        valorJogador: 82,
        roleJogador: "Atacante",
        valorizacaoJogador: 6,
      },
      {
        nomeJogador: "Ruben Neves",
        valorJogador: 88,
        roleJogador: "Meio-campista",
        valorizacaoJogador: 9,
      },
      {
        nomeJogador: "João Moutinho",
        valorJogador: 85,
        roleJogador: "Meio-campista",
        valorizacaoJogador: 7,
      },
    ],
  },

  {
    id: 11,
    name: "Southampton FC",
    badge:
      "https://1000logos.net/wp-content/uploads/2018/07/Southampton-Logo-2010.png",
    estadio: "St. Mary's Stadium",
    manager: "Júlio Cesar",
    managerPicture: JulioCesar,
    saldo: "3",
    valorizacao: "2",
    avaliacao: "25 pontos +5",
    texto:
      "Com uma mistura de experiência e juventude, a equipe busca recuperar sua glória.",
    players: [
      {
        nomeJogador: "James Ward-Prowse",
        valorJogador: 84,
        roleJogador: "Meio-campista",
        valorizacaoJogador: 5,
      },
      {
        nomeJogador: "Che Adams",
        valorJogador: 80,
        roleJogador: "Atacante",
        valorizacaoJogador: 4,
      },
      {
        nomeJogador: "Theo Walcott",
        valorJogador: 81,
        roleJogador: "Atacante",
        valorizacaoJogador: 4,
      },
      {
        nomeJogador: "Mohammed Salisu",
        valorJogador: 82,
        roleJogador: "Zagueiro",
        valorizacaoJogador: 5,
      },
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
    saldo: "3",
    valorizacao: "2",
    avaliacao: "25 pontos +5",
    texto:
      "Sempre determinado, o time busca uma evolução constante para conquistar a Premier League.",
    players: [
      {
        nomeJogador: "Teemu Pukki",
        valorJogador: 83,
        roleJogador: "Atacante",
        valorizacaoJogador: 5,
      },
      {
        nomeJogador: "Milot Rashica",
        valorJogador: 82,
        roleJogador: "Meio-campista",
        valorizacaoJogador: 4,
      },
      {
        nomeJogador: "Ben Gibson",
        valorJogador: 80,
        roleJogador: "Zagueiro",
        valorizacaoJogador: 3,
      },
      {
        nomeJogador: "Kenny McLean",
        valorJogador: 81,
        roleJogador: "Meio-campista",
        valorizacaoJogador: 4,
      },
    ],
  },
];

export default teams;
