import styled from 'styled-components';

// Header principal
export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  box-sizing: border-box;  /* Garante que padding não afete a largura total */
`;


// Logo no lado esquerdo
export const Logo = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #7f3ff2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Links de navegação
export const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const NavLinkItem = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    color: #7f3ff2;
  }
`;

// Barra de busca
export const SearchBar = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
  
  &::placeholder {
    color: #999;
  }
`;

// Contêiner para os ícones
export const IconContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Icon = styled.i`
  font-size: 20px;
  color: #333;
  cursor: pointer;
  
  &:hover {
    color: #7f3ff2;
  }
`;
