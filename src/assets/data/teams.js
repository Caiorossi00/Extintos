import igorAmaral from "../images/igorAmaral.jpeg";
import jacome from "../images/jacome.jpeg";
import flavio from "../images/flavio.jpeg";
import jefferson from "../images/jefferson.jpeg";

const teams = [
  {
    id: 1,
    name: "Time Flavio",
    badge: "/assets/images/badge.svg",
    estadio: "Estádio dos Bagres",
    manager: "Igor Amaral",
    managerPicture: flavio,
    players: ["Jogador 1", "Jogador 2", "Jogador 3", "Jogador 4"],
  },
  {
    id: 2,
    name: "Time Igor",
    badge: "/assets/images/badge.svg",
    estadio: "Estádio dos Bagres",
    manager: "Igor Amaral",
    managerPicture: igorAmaral,
    players: ["Jogador 1", "Jogador 2", "Jogador 3", "Jogador 4"],
  },
  {
    id: 3,
    name: "Bagres Futebol Clube",
    badge: "/assets/images/badge.svg",
    estadio: "Estádio dos Bagres",
    manager: "Igor Amaral",
    managerPicture: jacome,
    players: ["Jogador 1", "Jogador 2", "Jogador 3", "Jogador 4"],
  },
  {
    id: 4,
    name: "Teste",
    badge: "/assets/images/jefferson-team-badge.svg",
    manager: "Júnior Jacome",
    managerPicture: jefferson,
    players: ["Caio", "Lucas", "Rossi", "Teste"],
  },
];

export default teams;
