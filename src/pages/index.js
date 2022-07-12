import React from 'react';
import {
  CompleteConte,
  TitleImage,
  TextBan,
  ImgBanner,
  ContBanner,
} from './style';

//Utilizado para criar animação
import Typical from "react-typical";

//Components
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';


//Images
import BannerImg from "../images/bannerpoke.png"


const Home = ({ pokemon }) => {
  return (

    <>
      <Navbar />

      <CompleteConte>
        <TitleImage>
          <TextBan>
            <Typical
              loop={Infinity}
              steps={[
                'Digite seu pokemon favorito',
                1000,
              ]}
            />
          </TextBan>
          <ContBanner>
            <ImgBanner src={BannerImg}></ImgBanner>
          </ContBanner>
        </TitleImage>
        <Cards pokemon={pokemon} />
      </CompleteConte>
    </>
  );
};

export default Home;
