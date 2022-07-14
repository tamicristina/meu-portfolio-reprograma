import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardProjetos from "./components/CardProjetos";
import SobreMim from "./components/SobreMim";
import CardRepositorios from "./components/CardRepositorios";

function App() {
  return (
    <>
      <Header />
      <section className="section">
        <SobreMim />
        <div className="container">
          <CardProjetos />
        </div>
        <h1 className="title_projetos">Outros Projetos no meu Github </h1>
        <div className="cards_repo_container">
          <CardRepositorios/>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default App;
