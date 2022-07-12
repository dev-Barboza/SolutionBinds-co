import React, {useState} from 'react';
import {ContainerLoading,
        SectionLoader,
        AnimatedLoading,
        Textloading
    
    
    } from './style';

//images
import PokeballImage from "../../images/bannerBall.gif";

const Loader = () => {

    const [Text, setText] = useState("Carregando lista de pokemon...")

    
    return (
       <>
       {/* Criado para esperar a listagem de pokemon */}
       <SectionLoader>
            <ContainerLoading>
                    <AnimatedLoading src={PokeballImage}></AnimatedLoading>
                    <Textloading>{Text}</Textloading>
            </ContainerLoading>
       </SectionLoader>
           
       </>
    )
}

export default Loader;
