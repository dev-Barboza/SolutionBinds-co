import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import {
    SectionCard,
    CompleteCard,
    IndividualCard,
    PokeImg,
    Pokename,
    SectionSeacrh,
    CompleteInput,
    InputSeacrh,
    StyledLink,

} from './style';

//Components
import Loader from '../Loading';

const Cards = () => {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');


    const getPokemonList = async () => {
        let pokemonArray = [];
        for (let i = 1; i <= 151; i++) {
            pokemonArray.push(await getPokemonData(i));
        }
        console.log(pokemonArray);
        setPokemon(pokemonArray);
        setLoading(false);
    }

    const getPokemonData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    }

    useEffect(() => {
        getPokemonList();
    }, [])

    return (
        <>
            <SectionSeacrh>
                <CompleteInput>
                    <InputSeacrh placeholder='Digite o nome do seu pokemon' type="Text" value={search} onChange={(e) => setSearch(e.target.value)}></InputSeacrh>
                </CompleteInput>
            </SectionSeacrh>
            {loading ? (
                <Loader />
            ) : (
                <SectionCard>
                    <CompleteCard >
                        {pokemon.filter(p => p.data.name.includes(search)).map((p) => {
                            return (
                                <StyledLink to={`/pokemon/${p.data.name}`}>
                                <IndividualCard key={p.data.id} >
                                    <StyledLink to={`/pokemon/${p.data.name}`}>
                                        <Pokename>{p.data.name}</Pokename>
                                    </StyledLink>
                                    <StyledLink to={`/pokemon/${p.data.id}`} >
                                        <PokeImg src={p.data.sprites.front_default}></PokeImg>
                                    </StyledLink>
                                </IndividualCard>
                                </StyledLink>
                            )
                        })
                        }
                    </CompleteCard>
                </SectionCard>
            )}
        </>
    );
};

export default Cards;
