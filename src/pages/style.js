import styled from 'styled-components';


export const CompleteConte = styled.div`
    width: 100%;
    height: 100%;
    background-color: #ECECEC;
`;

export const TitleImage = styled.div`
    width: 100%;
    height: 250px;
    border-radius: 0px 0px 87px 0px;
    padding: 0px 90px 0px 90px;
    position: relative;
    background-image: linear-gradient(to right, #ff5062, #D13A43);

    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const TextBan = styled.p`
    font-size: 40px;
    font-family:'Poppins', sans-serif;
    font-weight: bold;
    color: #fff;
    word-wrap: break-word;

    @media(max-width: 500px) {
    font-size: 30px;
  }
`;

export const ContBanner = styled.div`
    width: 22%;
    height: 80%;
    margin-right: 70px;
    margin-top: 20px;

`;

export const ImgBanner = styled.img`
    width: 100%;
    height: 100%;

    @media(max-width: 800px) {
    width: 0%;
    height: 0%;

  }
`;
