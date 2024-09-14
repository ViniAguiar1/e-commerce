import styled from 'styled-components';

// Container principal da Sidebar de Filtros
export const FilterContainer = styled.div`
  width: 270px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  height: 28rem;
  margin-top: 1.5rem
`;

// Barra de busca
export const SearchBar = styled.input`
  width: 90%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;

  &::placeholder {
    color: #999;
  }
`;

// Seção de categorias
export const CategorySection = styled.div`
  margin-bottom: 20px;

  h3 {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;

// Itens da categoria
export const CategoryItem = styled.div`
  text-align: center;

  img {
    width: 60px;
    height: 60px;
    margin-bottom: 5px;
    border-radius: 5px;
  }

  p {
    font-size: 12px;
    color: #333;
  }
`;

// Filtro de preço
export const PriceFilter = styled.div`
  h3 {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
  }
`;

export const PriceRange = styled.div`
  margin-bottom: 15px;
  input[type="range"] {
    width: 100%;
    -webkit-appearance: none;
    appearance: none;
    height: 4px;
    background: #ddd;
    border-radius: 5px;
    outline: none;
    transition: background 0.3s ease-in-out;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 16px;
      height: 16px;
      background-color: #d6a700;
      border-radius: 50%;
      cursor: pointer;
    }

    &::-moz-range-thumb {
      width: 16px;
      height: 16px;
      background-color: #d6a700;
      border-radius: 50%;
      cursor: pointer;
    }
  }
`;

// Labels de Preço
export const PriceLabel = styled.span`
  font-size: 14px;
  color: #333;
  font-weight: bold;

  &:first-child {
    margin-right: 15px;
  }
`;
