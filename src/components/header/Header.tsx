import React from "react";
import { HeaderContainer, Logo, NavLinks, NavLinkItem, SearchBar, IconContainer } from './styles';
import { Link } from 'react-router-dom'; // Importe o Link do React Router
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = ({ cartItems }) => {
  return (
    <HeaderContainer>
      <Logo>
        <img style={{ width: '70px', height: '60px' }} src='/img/logo-test.png' alt="logo" />
      </Logo>
      <NavLinks>
        <NavLinkItem href='/home'>Home</NavLinkItem>
        <NavLinkItem href='/category'>Categorias</NavLinkItem>
        <NavLinkItem>Ofertas</NavLinkItem>
        <NavLinkItem>Login</NavLinkItem>
      </NavLinks>
      <SearchBar placeholder="Buscar" />
      <IconContainer>
        <Link to="/profile">
          <i className="fas fa-user" style={{ cursor: 'pointer' }}></i>
        </Link>
        <div style={{ position: "relative" }}>
          <Link to="/cart">
            <i className="fas fa-shopping-cart" style={{ cursor: 'pointer' }}></i>
          </Link>
          {/* Renderiza o número de itens no carrinho se for maior que 0 */}
          {cartItems > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-10px",
                right: "-10px",
                background: "#ff6347",
                color: "white",
                borderRadius: "50%",
                padding: "4px 8px",
                fontSize: "12px",
              }}
            >
              {cartItems}
            </span>
          )}
        </div>
      </IconContainer>
    </HeaderContainer>
  );
};

export default Header;
