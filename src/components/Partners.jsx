import { Carousel } from "react-bootstrap"
import leo1 from '../assets/leo1.png';
import leo2 from '../assets/leo2.jpeg';
import tilo1 from '../assets/tilo1.png';
import tilo2 from '../assets/tilo2.jpeg';
import lira1 from '../assets/lira1.png';
import lira2 from '../assets/lira2.jpeg';
import 'boxicons'

export default function Partners () {
  const leoBold = [
    leo1,
    leo2,
  ]

  const lira = [
    lira1,
    lira2,
  ]

  const tilo = [
    tilo1,
    tilo2,
  ]



  return (
    <div className="partners-container">
        <div className="partner-card">
          <a className="partner-link" href="https://www.instagram.com/_leobold/">
            <h4> Leo Bold </h4>
            <div className="insta">
              <box-icon type='logo' name='instagram-alt'></box-icon><span>@_leobold</span>
            </div>
          </a>
          <Carousel slide={false} interval={2000}>
            { leoBold.map((url, i) => (
              <Carousel.Item key={i}>
                <div className='carousel-bg'>
                  <img className="carousel-img" src={ url } alt=""/>
                </div>
              </Carousel.Item>
              ))
            }
            
          </Carousel>
        </div>
        <div className="partner-card">
          <a className="partner-link" href="https://www.instagram.com/wendelllira/">
            <h4> Wendell Lira</h4>
            <div className="insta">
              <box-icon type='logo' name='instagram-alt'></box-icon><span>@wendelllira</span>
            </div>
          </a>
          <Carousel slide={false} interval={2000}>
            { lira.map((url, i) => (
              <Carousel.Item key={i}>
                <div className='carousel-bg'>
                  <img className="carousel-img" src={ url } alt=""/>
                </div>
              </Carousel.Item>
              ))
            } 
          </Carousel>
        </div>
        <div className="partner-card">
          <a className="partner-link" href="https://www.instagram.com/fifatilo/">
            <h4> Fifatilo</h4>
            <div className="insta">
              <box-icon type='logo' name='instagram-alt'></box-icon><span>@fifatilo</span>
            </div>
          </a>
          <Carousel slide={false} interval={2000}>
            { tilo.map((url, i) => (
              <Carousel.Item key={i}>
                <div className='carousel-bg'>
                  <img className="carousel-img" src={ url } alt=""/>
                </div>
              </Carousel.Item>
              ))
            } 
          </Carousel>

        </div>

    </div>
  )
}
