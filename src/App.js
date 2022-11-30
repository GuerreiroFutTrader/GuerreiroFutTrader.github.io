import './App.css';
import logo from "./assets/logo.png"
import React, { useState, useEffect, useRef } from 'react'
import { polyfill } from "seamless-scroll-polyfill";
import PlanCards from './components/PlanCards';
import 'bootstrap/dist/css/bootstrap.css';
import About from './components/About';
import Results from './components/Results';
import FAQ from './components/FAQ';
import Partners from './components/Partners';

polyfill();

function App() {
  const [fixedClass, setFixedClass] = useState('link-wrap');
  const [currentView, setCurrentView] = useState('home');
  const homeRef = useRef();
  const aboutRef = useRef();
  const resultsRef = useRef();
  const FAQRef = useRef();
  const plansRef = useRef();
  const partnersRef = useRef();



  useEffect(() => {
    window.addEventListener('scroll', fixNavbar);
    return () => window.removeEventListener('scroll', fixNavbar);
  }, []);

  const fixNavbar = () => {
    if (window !== undefined) {
      const maxHeight = window.innerHeight;
      let windowHeight = window.scrollY;
      windowHeight >= maxHeight ? setFixedClass('link-wrap-fixed') : setFixedClass('link-wrap');
      // if(windowHeight < maxHeight) {
      //   setCurrentView('homeRef');
      // } else if (windowHeight >=  maxHeight && windowHeight < 2.5*maxHeight){
      //   setCurrentView('aboutRef');
      // } else if (windowHeight >= 2.5* maxHeight && windowHeight < 4*maxHeight){
      //   setCurrentView('resultsRef')
      // }else if (windowHeight >= 4*maxHeight && windowHeight < 6*maxHeight){
      //   setCurrentView('plansRef')
      // }else if (windowHeight >= 6* maxHeight && windowHeight < 7*maxHeight){
      //   setCurrentView('FAQRef')
      // }
      
    }
  };
  const handleClick = (event) => {
    const ref = event.target.className;
    if(ref.includes('aboutRef')) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
      setCurrentView('aboutRef');
    }
    if(ref.includes('homeRef')) {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
      setCurrentView('aboutRef');
    }
    if(ref.includes('resultsRef')) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth' });
      setCurrentView('resultsRef')
    }
    if(ref.includes('plansRef')) {
      plansRef.current.scrollIntoView({ behavior: 'smooth' });
      setCurrentView('plansRef')
    }
    if(ref.includes('FAQRef')) {
      FAQRef.current.scrollIntoView({ behavior: 'smooth' });
      setCurrentView('FAQRef')
    }
  }

  return (
    <div className="App">
      <section className="home" ref={homeRef}>
        <div className="canvas"></div>
        <img className="cover-logo"src={ logo } alt="" />
        <div className="text">
          Faça parte do grupo do trader 
          <span className='highlight'> TOP 15 MUNDIAL</span>  do FIFA Ultimate Team.
          <br /> Bora multiplicar suas coins? 
        </div>
        <div className='home-btns'>
          <button className="aboutRef button" onClick={ handleClick }>Saiba mais</button>
          <button className="plansRef button" onClick={ handleClick }>Planos </button>
        </div>
      <nav>
        <div className={ fixedClass }>
          <button className={`aboutRef link-btn ${currentView.includes('about') ? 'active' : ''}`} onClick={ handleClick }>SOBRE</button>
          <button className={`resultsRef link-btn ${currentView.includes('results') ? 'active' : ''}`} onClick={ handleClick }>RESULTADOS</button>
          <button className={`plansRef link-btn ${currentView.includes('plans') ? 'active' : ''}`} onClick={ handleClick }>PLANOS</button>
          <button className={`FAQRef link-btn ${currentView.includes('FAQ') ? 'active' : ''}`} onClick={ handleClick }>DÚVIDAS</button>
        </div>
      </nav>
      </section>
      <section className="content-main" ref={aboutRef}>
        <About />
      </section>
      <section className="content-main" ref={resultsRef}>
        <Results />
      </section>
      <section className="content-main" ref={plansRef}>
        <div className="title"> PLANOS </div>
        <div className="bar"></div>
        <PlanCards />
      </section>
      <section className="content-main" ref={partnersRef}>
        <div className="title"> PARCEIROS </div>
        <div className="bar"></div>
        <Partners />
      </section>
      <section className="content-main" ref={FAQRef}>
        <div className="title"> DÚVIDAS FREQUENTES </div>
        <div className="bar"></div>
        < FAQ/>
      </section>
    </div>
  );
}

export default App;
