import { Carousel } from "react-bootstrap"
import membro1 from '../assets/membro1.jpeg';
import membro2 from '../assets/membro2.jpeg';
import membro3 from '../assets/membro3.jpeg';
import membro4 from '../assets/membro4.jpeg';
import membro5 from '../assets/membro5.jpeg';
import membro6 from '../assets/membro6.jpeg';
import membro7 from '../assets/membro7.jpeg';
import membro8 from '../assets/membro8.jpeg';
import membro9 from '../assets/membro9.jpeg';
import membro10 from '../assets/membro10.jpeg';
import depo1 from '../assets/depo1.jpeg';
import depo2 from '../assets/depo2.jpeg';
import depo3 from '../assets/depo3.jpeg';
import depo4 from '../assets/depo4.jpeg';
import depo5 from '../assets/depo5.jpeg';
import depo6 from '../assets/depo6.jpeg';
import depo7 from '../assets/depo7.jpeg';
import result1 from "../assets/result1.jpeg"
import result2 from "../assets/result2.jpeg"
import 'boxicons'

export default function Results () {
  const membersProfit = [
    membro1,
    membro2,
    membro3,
    membro4,
    membro5,
    membro6,
    membro7,
    membro8,
    membro9,
    membro10,
  ]

  const membersDepo = [
    depo1,
    depo2,
    depo3,
    depo4,
    depo5,
    depo6,
    depo7,
  ]


  return (
    <div className="content-main">
      <div className="title"> RESULTADOS </div>
        <div className="bar"></div>
        <div className="grey-container">
          
          <h3 className="my-results-title">Meus resultados <box-icon size="md"name="line-chart" color="#86C323"></box-icon></h3>
          <div className="my-results">
            <div className="my-result">
              <h4 className="result-title"> FIFA 22: TOP 15 GLOBAL</h4>
              <img src={ result1 } alt="" className='result-img'/>
            </div>
            <div className="my-result">
              <h4 className="result-title"> FIFA 21: TOP 2 GLOBAL mensal</h4>
              <div className="result-img-container">
                <img src={ result2 } alt="" className='result-img'/>
              </div>
            </div>
          </div>
        </div>
        <h3 className='carousel-title'> Lucro dos membros no <span className='highlight'>PRIMEIRO</span> mês do fifa 23 <box-icon size="md"name="rocket" animation="tada" color="#86C323"></box-icon></h3>
        <Carousel slide={false} interval={1500}>
          { membersProfit.map((url, i) => (
            <Carousel.Item key={i}>
              <div className='carousel-bg'>
                <img className="carousel-img" src={ url } alt=""/>
              </div>
            </Carousel.Item>
            ))
          }
          
        </Carousel>
        <h3 className='carousel-title'> Depoimentos dos membros durante a temporada 22 <box-icon type='solid' name='message-dots' color="#86C323" size="md"></box-icon></h3>
        <Carousel slide={false} interval={5000}>
          { membersDepo.map((url, i) => (
            <Carousel.Item key={i}>
              <div className='carousel-bg'>
                <img className="carousel-img" src={ url } alt=""/>
              </div>
            </Carousel.Item>
            ))
          }
          
        </Carousel>
        
        <div className="benefits">
          <h3 className='carousel-title'> Benefícios dos assinantes</h3>
          <p><box-icon color="#86C323" name='check'></box-icon> Mais de 20 guias detalhados que ensinam os fundamentos e diversas técnicas de trade.</p>
          <p><box-icon color="#86C323" name='check'></box-icon> Indicações de quais cartas comprar no momento que a oportunidade surge para diversos orçamentos. </p>
          <p><box-icon color="#86C323" name='check'></box-icon> Resumo e análise do conteúdo diário do jogo</p>
          <p><box-icon color="#86C323" name='check'></box-icon> Boletim de atualização de mercado constantes com analise sobre o momento atual e possíveis cenário futuros.</p>
          <p><box-icon color="#86C323" name='check'></box-icon> Suporte diário comigo e com moderadores qualificados para tirar todas as suas dúvidas.</p>
          <p><box-icon color="#86C323" name='check'></box-icon> Dicas de gameplay exclusivas para os membros do grupo feitas pelo coach Leo Bold.</p>
          <p><box-icon color="#86C323" name='check'></box-icon> Preços especiais para coach individual ou em grupo com o Leo Bold.</p>
          <p><box-icon color="#86C323" name='check'></box-icon> Acesso a uma comunidade ativa com muitos jogadores para trocar idéia, ajudar com objetivos, montar times e muito mais.</p>

        </div>

    </div>
  )
}
