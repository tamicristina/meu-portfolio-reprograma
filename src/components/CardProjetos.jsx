import "../App.css";
import projetos from "../dados.js";

function CardProjetos() {
  return (
    <>
      <h1 className="title_projetos">4 projetos feitos na Reprograma </h1>
      <div className="projetos_container">
        {projetos.map((projeto) => {
          console.log(projeto);
          return (
            <span className="container-cards" key={projeto.id}>
              <h1 className="titulo_card">{projeto.nome}</h1>
              <img className="card_img" src={projeto.imagem} />
              <a className="ancora_card" href={projeto.link} target="blank">Link para o repositório </a>
            </span>
          );
        })}
      </div>
    </>
  );
}

export default CardProjetos;
