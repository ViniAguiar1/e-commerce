import styled from 'styled-components';

// Container principal da página Home
export const HomeContainer = styled.div`
  padding: 3rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  flex: 1;
`;

// Container do Carrossel de Banner
export const CarouselContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: #333;
  margin-top: 20px;
`;

// Slide individual do Carrossel
export const Slide = styled.div<{ active: boolean }>`
  min-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #333;
  color: #fff;
  opacity: ${(props) => (props.active ? '1' : '0')};
  transition: opacity 0.5s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;

  h2 {
    font-size: 48px;
    margin-bottom: 20px;
  }
`;

// Botão "Comprar agora"
export const Button = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

// Novo estilo para o carrossel de produtos da semana
export const CarouselWeekContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  margin-top: 20px;

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  &::-webkit-scrollbar {
    display: none; // Esconder barra de rolagem no WebKit
  }
`;

// Novo estilo para o carrossel de produtos da semana (renomeado para evitar conflito)
export const CarouselProductList = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: nowrap;
  overflow-x: scroll;
  margin: 0 5%;
  max-width: 95%;

  &::-webkit-scrollbar {
    display: none;
  }
`;