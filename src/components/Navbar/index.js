import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavBtn,
  NavBtnLink,
  Logo,
} from './NavbarElements';

//image
import LogoHeader from "../../images/logopokemon.png";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
         <Logo src={LogoHeader}/>
        </NavLink>
        <Bars />
        
        <NavBtn>
          <NavBtnLink href="https://pokeapi.co/">Entre em contato</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
