import { useContext, useEffect } from "react";

import PokemonContext from "../../context/pokemons";
import Search from "../Search";
import PokemonList from "./components/PokemonList";

export default function Home() {
    
    const {getPokemons,pokemons} = useContext(PokemonContext);
    
    useEffect(()=>{
        getPokemons().catch(null);
    }, []);
    
    return (
        <>
            <Search />
            <PokemonList pokemons={pokemons}/>
        </> 
    );
}