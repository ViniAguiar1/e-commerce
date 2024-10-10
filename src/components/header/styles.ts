import styled from 'styled-components';

// Header principal
export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

// Logo no lado esquerdo
export const Logo = styled.div`
  img {
    max-width: 70px;
    height: auto;
  }
`;

// Menu responsivo (botão de hambúrguer) - Aparece só no mobile
export const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  font-size: 24px;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Links de navegação (desktop)
export const NavLinks = styled.nav`
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 768px) {
    display: none; /* Esconde os links no mobile */
  }
`;

export const NavLinkItem = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 16px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    color: #7f3ff2;
  }
`;

// Barra de busca (somente no desktop)
export const SearchBar = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  font-size: 16px;
  
  &::placeholder {
    color: #999;
  }

  @media (max-width: 768px) {
    display: none; /* Esconde a barra de busca no mobile */
  }
`;

// Contêiner para os ícones (somente no desktop)
export const IconContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    display: none; /* Esconde os ícones no mobile */
  }
`;

// Menu ativo no mobile (aparece só se o estado for true)
interface MobileMenuProps {
  isOpen: boolean;
}

export const MobileMenu = styled.div<MobileMenuProps>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 15px;
  align-items: center;
  position: absolute;
  top: 70px;
  right: 0;
  background-color: white;
  width: 200px;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 769px) {
    display: none;
  }

  a, i {
    margin: 10px 0;
  }
`;
