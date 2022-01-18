import './App.css';

function App() {
  return (
    <div className="App">
      <section className="home">
        <div className="canvas"></div>
        <div className="text">Olá, me chamo
          <span className="highlight"> Kelvin Pichinini</span>.
          <br />
          Desenvolvedor FullStack. 
        </div>
        <div className="button">Conhecer mais</div>
      <nav>
        <div className="link-wrap">
          <div className="link-btn active">home</div>
          <div className="link-btn">sobre</div>
          <div className="link-btn">projetos</div>
          <div className="link-btn">contato</div>
        </div>
      </nav>
      </section>
      <section className="about">
        sobre
      </section>
    </div>
  );
}

export default App;
