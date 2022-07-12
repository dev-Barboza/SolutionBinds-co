import styled from 'styled-components';

export const SectionLoader = styled.div`
    width: 100%;
    background-color: green;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerLoading = styled.div`
    width: 500px;
    height: 350px;
    top: 20%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;

    @media(max-width: 500px) {
    width: 200px;
    height: 150px;
    top: 60%;
  }

`;

export const AnimatedLoading = styled.img`
    width: 50%;
    height: 70%;
`;

export const Textloading = styled.p`
    font-size: 25px;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    color: #D13A43;
`;