import styled from 'styled-components';

export const ContainerPokemonDet = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 768px) {
    flex-direction: column;
  }
`;

export const CompletePokemon = styled.div`
    width: 100%;
    height: 300px;
    background-color: #ECECEC;
    margin: 10px 90px 0px 90px;
    padding: 20px;
    border-radius: 10px;

    display: flex;
    justify-content: space-between;

    @media(max-width: 437px) {
    flex-direction: column;
    height: auto;
    align-items: center;
  }

`;

export const SectionDescriptionPoke = styled.div`
    width: 30%;
    height: 100%;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 1px 1px 12px 3px #B3B3B3;


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

    @media(max-width: 437px) {
    width: 100%;
    height: 50%;
  }
  
`;

export const DescriptionPoke = styled.div`
    width: 25%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media(max-width: 437px) {
    width: 100%;
    height: 50%;
  }
    
`;

export const Sectiontype = styled.div`
    width: 100%;
    height: auto;
    border-radius: 10px;
    background-color: #fff;
    padding: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 1px 1px 12px 3px #B3B3B3;


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
`;

export const ImagePokeDetails = styled.img`
    width: 250px;
    height: 90%;

`;

export const TypesPoekmon = styled.p`
    padding-bottom: 5px;
    font-family:'Poppins', sans-serif;
    font-weight: bold;
`;

export const TypePoke = styled.p`
    font-family:'Poppins', sans-serif;
    font-weight: 300;
`;

export const NamePokemonDet = styled.p`
    font-size: 25px;
    font-family:'Poppins', sans-serif;
    font-weight: 700;
    text-transform: capitalize;
`;

export const WeightPoke = styled.div`
    width: 100%;
    height: auto;
    border-radius: 10px;
    background-color: #fff;
    padding: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 1px 1px 12px 3px #B3B3B3;


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
`;

export const AbilitiesPoke = styled.p`
    font-weight: bolder;
    padding-bottom: 5px;
    font-family:'Poppins', sans-serif;

`;

export const VersionSection = styled.div`
    width: 30%;
    height: 100%;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 1px 1px 12px 3px #B3B3B3;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

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

    @media(max-width: 437px) {
    width: 100%;
    height: 50%;
  }

`;

export const VersionTitle = styled.p`
    font-weight: 700;
    font-family:'Poppins', sans-serif;

`;

export const ImageShiny = styled.img`
    width: 150px;
    height: 200px;

    @media(max-width: 830px) {
    width: 80px;
    height: 200px;
  }
`;

export const ImageShinyBack = styled.img`
    width: 150px;
    height: 200px; 

    @media(max-width: 830px) {
    width: 80px;
    height: 200px;
  }
`;

export const ImagesPokes = styled.div`
    display: flex;
    justify-content: space-between;

`;