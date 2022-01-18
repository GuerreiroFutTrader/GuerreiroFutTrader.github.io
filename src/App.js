import './App.css';
import React, { useState, useEffect, useRef } from 'react'

function App() {
  const [fixedClass, setFixedClass] = useState('link-wrap');
  const [currentView, setCurrentView] = useState('home');
  const homeRef = useRef();
  const aboutRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();


  useEffect(() => {
    window.addEventListener('scroll', fixNavbar);
    return () => window.removeEventListener('scroll', fixNavbar);
  }, []);

  const fixNavbar = () => {
    if (window !== undefined) {
      const maxHeight = window.innerHeight;
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight >= maxHeight ? setFixedClass('link-wrap-fixed') : setFixedClass('link-wrap');
      if(windowHeight < maxHeight) {
        setCurrentView('homeRef');
      } else if (windowHeight >= maxHeight && windowHeight < 2*maxHeight){
        setCurrentView('aboutRef');
      } else if (windowHeight >= 2* maxHeight && windowHeight < 3*maxHeight){
        setCurrentView('projectsRef')
      }else if (windowHeight >= 3* maxHeight && windowHeight < 4*maxHeight){
        setCurrentView('contactRef')
      }
      
    }
  };
  const handleClick = (event) => {
    const ref = event.target.className;
    if(ref.includes('aboutRef')) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if(ref.includes('homeRef')) {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if(ref.includes('projectRef')) {
      projectRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if(ref.includes('contactRef')) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="App">
      <section className="home" ref={homeRef}>
        <div className="canvas"></div>
        <div className="text">Olá, me chamo
          <span className="highlight"> Kelvin Pichinini</span>.
          <br />
          Desenvolvedor Web FullStack. 
        </div>
        <button className="aboutRef button" onClick={ handleClick }>Conhecer mais</button>
      <nav>
        <div className={ fixedClass }>
          <div className= {`homeRef link-btn ${currentView.includes('home') ? 'active' : ''}`} onClick={ handleClick }>home</div>
          <div className={`aboutRef link-btn ${currentView.includes('about') ? 'active' : ''}`} onClick={ handleClick }>sobre</div>
          <div className={`projectRef link-btn ${currentView.includes('project') ? 'active' : ''}`} onClick={ handleClick }>projetos</div>
          <div className={`contactRef link-btn ${currentView.includes('contact') ? 'active' : ''}`} onClick={ handleClick }>contato</div>
        </div>
      </nav>
      </section>
      <section className="content" ref={aboutRef}>
        <div className="title"> SOBRE </div>
        <div className="bar"></div>
      </section>
      <section className="content" ref={projectRef}>
        <div className="title"> PROJETOS </div>
        <div className="bar"></div>
      </section>
      <section className="content" ref={contactRef}>
        <div className="title"> CONTATO </div>
        <div className="bar"></div>
      </section>
    </div>
  );
}

export default App;
