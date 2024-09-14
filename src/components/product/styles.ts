import styled from 'styled-components';

export const ProductCard = styled.div`
  width: 180px;
  padding: 20px;
  border-radius: 8px;
  background-color: #f7f7f7;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const ProductName = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const ProductPrice = styled.p`
  font-size: 14px;
  color: #28a745;
  font-weight: 600;
`;
