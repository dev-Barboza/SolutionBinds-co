import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';


import {
    CompletePokemon,
    ContainerPokemonDet,
    SectionDescriptionPoke,
    DescriptionPoke,
    ImagePokeDetails,
    Sectiontype,
    TypesPoekmon,
    TypePoke,
    NamePokemonDet,
    WeightPoke,
    AbilitiesPoke,
    VersionSection,
    VersionTitle,
    ImageShiny,
    ImageShinyBack,
    ImagesPokes
} from './style';

//Components
import Navbar from "../../components/Navbar";
import Loader from "../../components/Loading";

const PokemonPage = ({ pokemon }) => {

    const { id } = useParams();
    const [pokemonDetails, setPokemonDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [natureza, setNatureza] = useState("Natureza");
    const [habilidade, setHabilidade] = useState("Habilidade");
    const [vShiny, setVShiny] = useState("Versão Shiny");

    const getPokemonData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    }

    const getPokemon = async (id) => {
        const details = await getPokemonData(id);
        setPokemonDetails(details.data);
        console.log(details.data)
        setLoading(false);
    }

    useEffect(() => {
        getPokemon(id);
    }, [])

    return (
        <>
            <Navbar />
            {loading ? (
                <Loader />
            ) : (
                <ContainerPokemonDet>
                    <CompletePokemon>
                        <SectionDescriptionPoke>
                            <ImagePokeDetails src={pokemonDetails.sprites.front_default}></ImagePokeDetails>

                            <NamePokemonDet>{pokemonDetails.name}</NamePokemonDet>
                        </SectionDescriptionPoke>
                        <DescriptionPoke>
                            <Sectiontype>
                                <TypesPoekmon>{natureza}</TypesPoekmon>
                                {pokemonDetails.types.map(t => (
                                    <TypePoke>{`Tipo do pokemon: ${t.type.name}`}</TypePoke>
                                ))}
                            </Sectiontype>
                            <WeightPoke>
                                <AbilitiesPoke>{habilidade}</AbilitiesPoke>
                                {pokemonDetails.abilities.map(a => (
                                    <TypePoke>{a.ability.name}</TypePoke>
                                ))}
                            </WeightPoke>
                        </DescriptionPoke>
                        <VersionSection>
                            <VersionTitle>{vShiny}</VersionTitle>
                            <ImagesPokes>
                                <ImageShiny src={pokemonDetails.sprites.front_shiny}></ImageShiny>
                                <ImageShinyBack src={pokemonDetails.sprites.back_shiny}></ImageShinyBack>
                            </ImagesPokes>
                        </VersionSection>
                    </CompletePokemon>
                </ContainerPokemonDet>
            )}
        </>
    )

}

export default PokemonPage;