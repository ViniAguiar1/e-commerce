/* eslint-disable */
import { useState } from 'react';
import { 
  FooterContainer, 
  FooterTitle, 
  FooterSubtitle, 
  FAQContainer, 
  FAQSection, 
  Question, 
  Answer, 
  ShowButton 
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const FooterFAQ = () => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false); // Nova pergunta
  const [showAnswer4, setShowAnswer4] = useState(false); // Outra nova pergunta

  return (
    <FooterContainer>
      <FooterTitle>Dúvidas Frequentes</FooterTitle>
      <FooterSubtitle>Informações para usuários</FooterSubtitle>
      <FAQContainer>
        <FAQSection>
          <Question>
            <span>Como funciona o pagamento?</span>
            <ShowButton onClick={() => setShowAnswer1(!showAnswer1)}>
              <FontAwesomeIcon icon={showAnswer1 ? faMinus : faPlus} />
            </ShowButton>
          </Question>
          <Answer show={showAnswer1}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Answer>
          <Question>
            <span>Posso pagar na hora?</span>
            <ShowButton>
              <FontAwesomeIcon icon={faPlus} />
            </ShowButton>
          </Question>
        </FAQSection>
        <FAQSection>
          <Question>
            <span>Quem vai entregar o meu produto?</span>
            <ShowButton onClick={() => setShowAnswer2(!showAnswer2)}>
              <FontAwesomeIcon icon={showAnswer2 ? faMinus : faPlus} />
            </ShowButton>
          </Question>
          <Answer show={showAnswer2}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Answer>
          <Question>
            <span>Posso pagar na hora?</span>
            <ShowButton>
              <FontAwesomeIcon icon={faPlus} />
            </ShowButton>
          </Question>
        </FAQSection>
        {/* Nova FAQ */}
        <FAQSection>
          <Question>
            <span>Como posso acompanhar meu pedido?</span>
            <ShowButton onClick={() => setShowAnswer3(!showAnswer3)}>
              <FontAwesomeIcon icon={showAnswer3 ? faMinus : faPlus} />
            </ShowButton>
          </Question>
          <Answer show={showAnswer3}>
            Você pode acompanhar seu pedido através do nosso portal de clientes, acessando a aba de "Meus Pedidos".
          </Answer>
        </FAQSection>
        <FAQSection>
          <Question>
            <span>Há garantia para os produtos?</span>
            <ShowButton onClick={() => setShowAnswer4(!showAnswer4)}>
              <FontAwesomeIcon icon={showAnswer4 ? faMinus : faPlus} />
            </ShowButton>
          </Question>
          <Answer show={showAnswer4}>
            Sim, todos os produtos possuem garantia de 1 ano. Para mais detalhes, consulte nossa política de garantia.
          </Answer>
        </FAQSection>
      </FAQContainer>
    </FooterContainer>
  );
};

export default FooterFAQ;
