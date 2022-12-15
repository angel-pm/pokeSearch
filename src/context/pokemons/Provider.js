import { useState } from "react";
import PokemonContext from "./index";

export default function PokemonProvider({children}) {

    const [pokemons, setPokemons] = useState([]); // variable de estado para guardar los datos de los pokemones
    const [pokemonDetail, setPokemonDetail] = useState([]);
    const [skills, setSkills] = useState([]);
    const [pokemonName, setPokemonName] = useState();

    /**
     * función que obtiene los datos de la api
     */
    const getPokemons = async ()=>{
        try {
            const pokemonsResult = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30");
            const data = await pokemonsResult.json();
            setPokemons(data.results)
        } catch (error) {
            setPokemons([]);
            console.log(error);
        }
    }
    
    /**
     * Obtiene la información de un pokemon por id
     * @param {*} id del pokemon del cual se requiere su información
     */
    const getPokemonDetail = async (id) => {
        if( !id ) Promise.reject("Required ID!");
        try {
            const pokemonDetail = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const dataDetail = await pokemonDetail.json();
            setPokemonDetail(dataDetail);
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * Obtiene las habilidades de un pokemon por id
     * @param {*} id del pokemon que se requiere su info.
     */
    const getSkills = async (id) => {
        if( !id ) Promise.reject("Required ID!");
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await res.json();
            const dataSkills = data.stats;
            setSkills(dataSkills);
        } catch (error) {
            console.log(error);
        }
    }

    const getPokemonByName = async (name) => {
        if(name === "") Promise.reject("Required NAME!");
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const data = await res.json();
            const pokemonName = data.stats;
            setPokemonName(pokemonName);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <PokemonContext.Provider value={{
            getPokemons,
            pokemons,
            getPokemonDetail,
            pokemonDetail,
            skills,
            getSkills
        }} >
            {children}
        </PokemonContext.Provider>
    );
}