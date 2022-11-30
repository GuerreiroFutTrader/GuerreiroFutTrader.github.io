import team from '../assets/team1.jpeg';

export default function About () {

  
  return (
    <div className="content-main">
      <div className="title"> SOBRE </div>
        <div className="bar"></div>
        <div className="about-text">
          <h3>
            Seja bem vindo a minha página! 
          </h3>
          <p>
          <br />
            Sou o “Guerreiro - FUT Trader”, negocio no mercado desde o FIFA 17.
            Fiz mais de <span className='highlight2'> 90 milhões </span>  de coins no FIFA 21, fui top 15 do mundo no FIFA 22 com mais de <span className='highlight2'> 130 milhões </span> de lucro e estou aqui para fazer você ter o seu time dos sonhos sem precisar de FIFA POINTS.
              <br />
              <br />
            Se você sempre quis testar qualquer carta do jogo ou então levantar a maior quantidade de coins possível para vender,
             você está no lugar certo. Com trade e gestão você chegará lá.
             <br />
             <br />
             <img className='team-img' src={team} alt="" />
             <p className="img-sub">Time em fevereiro/2022. R$0,00 reais gastos com FIFA points</p>

             <br />
             <br />
             <span className='highlight2'> Não dependa de premiações e sorte nos packs. </span> 
             <br />
             <br />
             No meu grupo você poderá aprender todos os conceitos de trade através de inúmeros guias ou apenas seguir todas as minhas calls dos mais variados tipos de investimento. 

            Além disso, terá acesso a um grupo de moderadores que te darão suporte praticamente 24hrs por dia e também receberá análises sobre gameplay produzidas por um coach profissional com um playoff em Londres no currículo. 
          </p>
          <h4>
          <br />
          <br />
            Não perca tempo, assine já!

          </h4>
        </div>      
    </div>
  )
}
