import React, { useState } from "react";
import { HeaderContainer, Logo, NavLinks, NavLinkItem, SearchBar, IconContainer, HamburgerMenu, MobileMenu } from './styles';
import { Link } from 'react-router-dom'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = ({ cartItems }: { cartItems: number }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer>
      <Logo>
        <img style={{ width: '70px', height: '60px' }} src='/img/logo-test.png' alt="logo" />
      </Logo>

      {/* Exibe o menu de hambúrguer no mobile */}
      <HamburgerMenu onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </HamburgerMenu>

      {/* Menu de navegação no desktop */}
      <NavLinks>
        <NavLinkItem href='/home'>Home</NavLinkItem>
        <NavLinkItem href='/category'>Categorias</NavLinkItem>
        <NavLinkItem href="/sales">Ofertas</NavLinkItem>
        <NavLinkItem>Login</NavLinkItem>
      </NavLinks>

      {/* Barra de busca - visível apenas no desktop */}
      <SearchBar placeholder="Buscar" />

      {/* Ícones (presentes apenas no desktop) */}
      <IconContainer>
        <Link to="/profile">
          <i className="fas fa-user" style={{ cursor: 'pointer' }}></i>
        </Link>
        <div style={{ position: "relative" }}>
          <Link to="/cart">
            <i className="fas fa-shopping-cart" style={{ cursor: 'pointer' }}></i>
          </Link>
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

      {/* Menu no mobile (abre ao clicar no ícone de hambúrguer) */}
      <MobileMenu isOpen={menuOpen}>
        <NavLinkItem href='/home'>Home</NavLinkItem>
        <NavLinkItem href='/category'>Categorias</NavLinkItem>
        <NavLinkItem href="/sales">Ofertas</NavLinkItem>
        <NavLinkItem>Login</NavLinkItem>

        {/* Ícones no menu do mobile */}
        <Link to="/profile">
          <i className="fas fa-user" style={{ cursor: 'pointer' }}></i>
        </Link>
        <div style={{ position: "relative" }}>
          <Link to="/cart">
            <i className="fas fa-shopping-cart" style={{ cursor: 'pointer' }}></i>
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
          </Link>
        </div>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;
