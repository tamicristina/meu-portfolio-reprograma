import { useEffect, useState } from "react";
import "../App.css";

function CardRepositorios() {
  const [repositorios, setRepositorios] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://api.github.com/users/tamicristina/repos"
      );
      const data = await response.json();
      setRepositorios(data);
    }

    getData();
    console.log(repositorios);
  }, []);

  return (
    <>
     
      {repositorios.map((repositorio) => {
        return (
          <span key={repositorio.id} className="cards_repos">
            <h1>{repositorio.name}</h1>
            <a className="ancora_card_repositorios" href={repositorio.svn_url} target="blank">
              Link para o repositório
            </a>
          </span>
        );
      })}
    </>
  );
}

export default CardRepositorios;
