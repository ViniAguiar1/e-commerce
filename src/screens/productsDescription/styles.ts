import styled from 'styled-components';

export const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

export const ProductImage = styled.img`
  width: 400px;
  height: auto;
  margin-right: 40px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #333;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 10px;
    line-height: 1.6;
    color: #666;
  }

  .product-price {
    font-size: 1.5rem;
    color: #007f56;
    margin-top: 20px;
    font-weight: bold;
  }

  .product-description {
    margin-top: 20px;
    font-size: 1.1rem;
    color: #333;
    line-height: 1.8;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const BuyButton = styled.button`
  background-color: #28a745;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #218838;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
  }
`;
