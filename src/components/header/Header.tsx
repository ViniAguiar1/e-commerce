import React from 'react';
import { HeaderContainer, Logo, NavLinks, NavLinkItem, SearchBar, IconContainer, Icon } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>HX</Logo>
      <NavLinks>
        <NavLinkItem href='/home' >Home</NavLinkItem>
        <NavLinkItem>Categorias</NavLinkItem>
        <NavLinkItem>Ofertas</NavLinkItem>
        <NavLinkItem>Login</NavLinkItem>
      </NavLinks>
      <SearchBar placeholder="Buscar" />
      <IconContainer>
        <Icon className="fa fa-user" />
        <Icon className="fa fa-shopping-cart" />
      </IconContainer>
    </HeaderContainer>
  );
};

export default Header;
