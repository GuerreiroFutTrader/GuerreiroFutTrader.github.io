

export default function PlanCards () {

  
    return (
      <div className="plan-cards">
        <div className="monthly plan-card">
          <h3 className="plan-title-1">MENSAL</h3>
          <span className="plan-description-1">Acesso de 1 mês</span>
          <div>
            <span className="currency">R$</span>
            <span className="price">29,99</span>
            <div className="subtilte">Cartão de crédito ou pix</div>
          </div>
          <div className="pay-btn"> Pagar com pix </div>
          <idv className="pay-btn"> Pagar com cartão </idv>      
        </div>

        <div className="promo plan-card">
          <h3 className="plan-title-2">BLACK FRIDAY - TRIMESTRAL</h3>
          <span className="plan-description-2"> Três meses pelo preço de dois </span>
          <div>
            <span className="currency">R$</span>
            <span className="price">59,98</span>
            <div className="subtilte">Cartão de crédito ou pix</div>
          </div>
          <div className="pay-btn"> Pagar com pix </div>
          <div className="pay-btn"> Pagar com cartão </div>      
        </div>

        <div className="season plan-card">
          <h3 className="plan-title-3">SEASON PASS</h3>
          <span className="plan-description-3">Acesso por toda temporada do fifa 22</span>
          <div>
            <span className="currency">R$</span>
            <span className="price">199,99</span>
            <div className="subtilte">Cartão parcelado SEM JUROS ou pix</div>
          </div>
          <div className="pay-btn"> Pagar com pix </div>
          <div className="pay-btn"> Pagar com cartão </div>      
        </div>
      </div>
    )
}
