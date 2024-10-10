import styled from 'styled-components';

// Container principal
export const OffersContainer = styled.div`
  width: 100%;
  /* margin-top: 50; */
  max-width: 1200px; /* Define um limite máximo de largura para o container */
  margin: 0 auto; 
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between; /* Espaça uniformemente os itens no desktop */
  overflow-x: hidden; /* Garante que não haja barra de rolagem no desktop */
  box-sizing: border-box; /* Inclui padding e border na largura total */

  @media (max-width: 768px) {
    padding: 10px;
    overflow-x: auto; /* Permite a rolagem horizontal apenas no mobile */
    white-space: nowrap;
    justify-content: flex-start; /* Alinha os itens à esquerda no mobile */
  }
`;

export const Offer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-align: center;
  flex: 0 0 auto;
  width: 120px;

  @media (min-width: 769px) {
    width: 150px; /* Ajuste para espaçamento no desktop */
  }
`;

export const SalesIcon = styled.div`
  font-size: 2.5rem;
  color: #007bff;
`;

export const SalesText = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  color: #333;
`;
