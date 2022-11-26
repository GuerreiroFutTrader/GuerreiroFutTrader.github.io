import './App.css';
import logo from "./assets/logo.png"
import React, { useState, useEffect, useRef } from 'react'
import { polyfill } from "seamless-scroll-polyfill";
import PlanCards from './components/PlanCards';

polyfill();

function App() {
  const [fixedClass, setFixedClass] = useState('link-wrap');
  const [currentView, setCurrentView] = useState('home');
  const homeRef = useRef();
  const aboutRef = useRef();
  const resultsRef = useRef();
  const FAQRef = useRef();
  const plansRef = useRef();



  useEffect(() => {
    window.addEventListener('scroll', fixNavbar);
    return () => window.removeEventListener('scroll', fixNavbar);
  }, []);

  const fixNavbar = () => {
    if (window !== undefined) {
      const maxHeight = window.innerHeight;
      let windowHeight = window.scrollY;
      windowHeight >= maxHeight ? setFixedClass('link-wrap-fixed') : setFixedClass('link-wrap');
      if(windowHeight < maxHeight) {
        setCurrentView('homeRef');
      } else if (windowHeight >= maxHeight && windowHeight < 2*maxHeight){
        setCurrentView('aboutRef');
      } else if (windowHeight >= 2* maxHeight && windowHeight < 3*maxHeight){
        setCurrentView('resultsRef')
      }else if (windowHeight >= 3* maxHeight && windowHeight < 4*maxHeight){
        setCurrentView('plansRef')
      }else if (windowHeight >= 4* maxHeight && windowHeight < 5*maxHeight){
        setCurrentView('FAQRef')
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
    if(ref.includes('resultsRef')) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if(ref.includes('plansRef')) {
      plansRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if(ref.includes('FAQRef')) {
      FAQRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="App">
      <section className="home" ref={homeRef}>
        <div className="canvas"></div>
        <img className="cover-logo"src={ logo } alt="" />
        <div className="text">Bem-vindo! eu sou o 
          <span className="highlight"> GUERREIRO</span>.
          <br />
          Trader top 15 do mundo e produtor de conteúdo sobre o FIFA Ultimate Team. 
        </div>
        <button className="aboutRef button" onClick={ handleClick }>Conhecer mais</button>
      <nav>
        <div className={ fixedClass }>
          <div className={`aboutRef link-btn ${currentView.includes('about') ? 'active' : ''}`} onClick={ handleClick }>sobre</div>
          <div className={`resultsRef link-btn ${currentView.includes('results') ? 'active' : ''}`} onClick={ handleClick }>resultados</div>
          <div className={`plansRef link-btn ${currentView.includes('plans') ? 'active' : ''}`} onClick={ handleClick }>planos</div>
          <div className={`FAQRef link-btn ${currentView.includes('FAQ') ? 'active' : ''}`} onClick={ handleClick }>dúvidas</div>
        </div>
      </nav>
      </section>
      <section className="content" ref={aboutRef}>
        <div className="title"> SOBRE </div>
        <div className="bar"></div>
      </section>
      <section className="content" ref={resultsRef}>
        <div className="title"> RESULTADOS </div>
        <div className="bar"></div>
      </section>
      <section className="content" ref={plansRef}>
        <div className="title"> PLANOS </div>
        <div className="bar"></div>
        <PlanCards />
      </section>
      <section className="content" ref={FAQRef}>
        <div className="title"> DÚVIDAS FREQUENTES </div>
        <div className="bar"></div>
      </section>
    </div>
  );
}

export default App;
