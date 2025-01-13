import React from "react";
import "../../assets/scss/nossosTorneios.scss";
import torneios from "../../assets/data/torneios";

const NossosTorneios = () => {
  return (
    <div id="container-nossosTorneios">
      <h1>Nossos Torneios</h1>
      <div className="torneios-list">
        {torneios.map((torneio, index) => (
          <div key={index} className="torneio-card">
            <img
              src={torneio.foto}
              alt={`Imagem do torneio ${torneio.nome}`}
              className="torneio-img"
            />
            <div>
              <h2 className="torneio-nome">{torneio.nome}</h2>
              <p className="torneio-descricao">{torneio.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NossosTorneios;
