import { Accordion } from "react-bootstrap"

export default function FAQ () {

  
  return (
    <div className="FAQ">
      <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>1. Por onde é o grupo?</Accordion.Header>
        <Accordion.Body>
        O grupo é pela plataforma Discord. Tem um app pra celular e também pode ser acessado pelo site via navegador. Bem leve e fácil de mexer. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>2. Como funciona?</Accordion.Header>
        <Accordion.Body>
        No Discord temos diversos canais nos quais eu passo análises e atualizações de mercado e de conteúdo diariamente, técnicas de trade e, obviamente, todas as cartas com os preços pra você comprar. Ah, fique tranquilo que eu sempre aviso quando vender também. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>3. Nunca fiz trade, não sei nada. Posso assinar mesmo assim? </Accordion.Header>
        <Accordion.Body>
        Sim. Lá você terá acesso a diversos guias com informações desde as mais básicas até as mais avançadas sobre trade. Além disso, sempre tento ser o mais didático possível quando mando as calls, então fique tranquilo que é só seguir as recomendações. Além disso, temos um canal de dúvidas onde eu e meus moderadores te ajudaremos em qualquer coisa que surgir. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>4. Sou do PC, funciona? </Accordion.Header>
        <Accordion.Body>
        Apesar do mercado seguir separado dos consoles e ter menos cartas disponíveis para a compra, os métodos e técnicas também funcionam. Em alguns momentos você precisará adaptar alguma recomendação, mas fique tranquilo que tem vários membros lá do pc e todos eles conseguem lucrar bem. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>5. Precisa de algum orçamento mínimo pra investir?</Accordion.Header>
        <Accordion.Body>
        Obviamente quanto mais coins pra começar, melhor. Porém você está lá justamente pra fazer essa alavancagem. Temos diversos métodos de trade para baixo orçamento, além de alguns guias para você levantar as primeiras coins e depois partir para as calls que eu passar. Então não, tendo pouco da pra começar já. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>6. Quanto eu vou fazer de coins por semana ou por mês estando no seu grupo? Tem alguma garantia?</Accordion.Header>
        <Accordion.Body>
        Isso é algo muito variável e eu não posso te dar certeza de rentabilidade. Não existe isso no mundo dos investimentos. Isso tudo depende de algumas variáveis, tais como: seu tempo para fazer trade, seu orçamento, sua disposição em aprender e aplicar os métodos e o principal, o conteúdo do jogo for favorável para os tipos de investimentos que você fez. No geral todos lucram muito bem, mas não existe garantia nesse mundo, quem te garante algo está só tentando te vender e pouco se importa com você de fato.
        </Accordion.Body>
      </Accordion.Item>

      </Accordion>
      
    </div>
  )
}
