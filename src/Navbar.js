import React, { useState } from "react";
import styled from "styled-components";
import logo from './assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <Nav>
      <Logo href="https://vooyapp.com.mx/Test.Menu/" target="_blank">
        <img src={logo}/>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
            <MenuLink href="https://vooyapp.com.mx/Test.Menu/" target="_blank">Inicio</MenuLink>
            <MenuLink href="https://vooyapp.com.mx/que-es-vooy/" target="_blank">¿Qué es vooy?</MenuLink>
            <MenuLink href="https://vooyapp.com.mx/faqs/" target="_blank">FAQ's</MenuLink>
            <a href="https://play.google.com/store/apps/details?id=com.vooy.partner"  target="_blank">
                <Button>
                    Descarga la app</Button></a>
      </Menu>
    </Nav>
    </>
  );
};

export default Navbar;

const MenuLink = styled.a`
  padding: 1rem;
  cursor: pointer;
  text-align: left;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: #54e212;
  }
`;

const Button = styled.button`
  font-size: 15px;
  background: #54e212;
  border-radius: 10px;
  border: 1px normal;
  color: white;
  margin: 0 1em;
  padding: 0.25em 2em;
`

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #0c1830;
  top: 0;
  left: 0;
  right: 0;
`;


const Logo = styled.image`
  padding: 1rem 0; 
  img{
    width: 100px;
    height: auto;
    margin:5px
  }
`;



const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;