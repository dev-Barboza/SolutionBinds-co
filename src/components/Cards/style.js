import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SectionSeacrh = styled.div`
    width: 100%;
    height: 50px;
    position: relative;
    top: -30px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CompleteInput = styled.div`
    width: 80%;
    height: 100%;
    
    display: flex;
    justify-content: center;
`;

export const InputSeacrh = styled.input`
    width: 70%;
    height: 100%;
    border: none;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 1px 1px 12px 3px #B3B3B3;
`;

export const ButtonCont = styled.div`
    width: 30%;
    height: 100%;
    background-color: gray;

    display: flex;
    justify-content: space-between;
`;
export const ButtonFindPoke = styled.button`
    margin-left: 10px;
    width: 7%;
    height: 100%;
    background-color: #fff;
    border: none;
    border-radius: 10px;

    &:hover {
    transition: all 0.2s ease-in-out;
    background: #FAC705;
    color: #fff;
  }
`;
export const ButtonOrderId = styled.button`
    width: 7%;
    height: 100%;
    background-color: #fff;
    border: none;
    border-radius: 10px;

    &:hover {
    transition: all 0.2s ease-in-out;
    background: #FAC705;
    color: #fff;
  }
`;


export const SectionCard = styled.div`
    width: 100%;
    height: 100%;  
`;

export const CompleteCard = styled.div`
    max-width: 100%;
    height: 100%;
    padding: 0px 90px 0px 90px;

    display: grid;
    grid-template-columns: repeat(4, 28.5%);

  @media(max-width: 800px) {
    grid-template-columns: repeat(3, 33.3%);
  }

  @media(max-width: 600px) {
    grid-template-columns: repeat(2, 50.0%);
  }

  @media(max-width: 500px) {
    grid-template-columns: repeat(1, 100%);
  }
    
`;

export const IndividualCard = styled.div`
    width: 50%;
    height: 220px;
    border-radius: 10px;
    background-color: #fff;
    padding: 20px;
    margin-bottom: 30px ;
    box-shadow: 1px 1px 12px 3px #B3B3B3;
    cursor: pointer;
    
    

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    &:hover {
    background-color: #D13A43;
    color: #fff;

    transition: all 0.2s ease-in-out;
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    
    }
    @media(max-width: 800px) {
    height: 150px;
  }
    @media(max-width: 320px) {
    width: 80%;
  }
`;

export const PokeImg = styled.img`
    width: 100%;
    height: 100%;

    @media(max-width: 320px) {
    width: 70px;
    height: 70px;
  }
`;

export const Pokename = styled.a`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 20px;
    color: #000;
    text-decoration: none;
    text-transform: capitalize;

    &:hover {
    color: #fff;
    }
    @media(max-width: 1024px) {
    font-size: 15px;
  }
    @media(max-width: 320px) {
    font-size: 10px;
  }

`;

export const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;





