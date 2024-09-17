import styled from 'styled-components';

interface AnswerProps {
  show: boolean;
}

export const FooterContainer = styled.div`
  background-color: #2c2c2c;
  color: #fff;
  padding: 40px 20px;
  text-align: center;
  /* border-radius: 10px; */
  max-width: 100%; /* Garante que o footer ocupe 100% da largura */
  position: relative;
  bottom: 0;
`;

export const FooterTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;
`;

export const FooterSubtitle = styled.p`
  font-size: 16px;
  color: #bbb;
  margin-bottom: 30px;
`;

export const FAQContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite que os itens quebrem em novas linhas */
  justify-content: space-between;
  gap: 20px; /* Espaçamento entre as caixas */
  max-width: 1000px; /* Limita a largura máxima para centralizar o conteúdo */
  margin: 0 auto; /* Centraliza o conteúdo */
`;

export const FAQSection = styled.div`
  flex: 1 1 calc(50% - 20px); /* Define a largura para ocupar até 50% da linha */
  background-color: #333;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  margin-bottom: 20px; /* Espaçamento abaixo de cada caixa */

  &:hover {
    transform: translateY(-5px); /* Adiciona um leve efeito ao passar o mouse */
  }
`;

export const Question = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 18px;
  color: #fff;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const Answer = styled.p<AnswerProps>`
  font-size: 16px;
  color: #ccc;
  margin-bottom: 10px;
  max-height: ${(props) => (props.show ? '200px' : '0')}; /* Limita a altura da resposta */
  overflow: hidden;
  transition: max-height 0.4s ease;
`;

export const ShowButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ffcc00; /* Adiciona uma cor de destaque ao passar o mouse */
  }
`;
