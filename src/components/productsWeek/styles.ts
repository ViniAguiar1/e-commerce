import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const ProductList = styled.div<{ currentSlide: number }>`
  display: flex;
  width: 100%;
  transition: transform 0.5s ease-in-out;
  transform: ${({ currentSlide }) => `translateX(-${currentSlide * 100}%)`};
`;

export const Slide = styled.div`
  min-width: 100%; /* Mostrando 1 produto por vez */
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    min-width: 50%; /* Mostra 2 produtos por vez em telas maiores */
  }

  @media (min-width: 1024px) {
    min-width: 25%; /* Mostra 4 produtos por vez em telas grandes */
  }
`;

export const ProductCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 20px;
  img {
    width: 100px;
    height: auto;
    object-fit: cover;
  }
  h3 {
    font-size: 1.1rem;
    margin-top: 10px;
  }
  p {
    color: green;
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const Button = styled.button<{ position: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${({ position }) => position}: 10px;
  background-color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 50%;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: #ddd;
  }
`;
