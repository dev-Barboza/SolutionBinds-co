import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';


export const Nav = styled.nav`
  padding: 10px 90px 0px 90px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(to right, #ff5062, #D13A43);

  
  z-index: 10;
`;

export const Logo = styled.img`
    width: 145px;
    height: 51px;

    
    @media(max-width: 320px) {
    width: 100px;
    height: 30px;
  }
   
`;

export const NavLink = styled(Link)`
  color: #324370;
  font-weight: 700;
  display: flex;
  align-items: center;
  text-decoration: none;

  font-size: 17px;
  cursor: pointer;
  font-family: "Roboto";

  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #FAD61F;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;


export const NavBtn = styled.a`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled.a`
  border-radius: 4px;
  background: #fff;
  padding: 10px 22px;
  color: #D13A43;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #FAC705;
    color: #fff;
  }
`;
