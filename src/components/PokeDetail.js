import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import PokemonContext from "../context/pokemons";

export default function PokeDetail() {

    const { id } = useParams();
    const {getPokemonDetail,pokemonDetail,getSkills,skills} = useContext(PokemonContext);

    /**
     * cuando cambie el id solicitamos el detalle del pokemon
     */
    useEffect(()=>{
        getPokemonDetail(id).catch(null);
        getSkills(id).catch(null);
    }, []);

    const urlImg = pokemonDetail?.sprites?.front_default;

    return (
        <div>
            <h3 style={{ marginTop: 30, marginBottom: 10 }}>General information</h3>
            <div>
                <img src={urlImg} alt=""></img>
            </div>
            <p>{`Name: ${pokemonDetail?.name}`}</p>
            <p>{`Weight: ${pokemonDetail?.weight}`}</p>
            <p>{`Height: ${pokemonDetail?.height}`}</p>
            <div>
                <h3 style={{ marginTop: 30, marginBottom: 10 }}>Skills</h3>
                <div>
                    <p>{`${skills[0]?.stat.name}: ${skills[0]?.base_stat}`}</p>
                    <p>{`${skills[1]?.stat.name}: ${skills[1]?.base_stat}`}</p>
                    <p>{`${skills[2]?.stat.name}: ${skills[2]?.base_stat}`}</p>
                    <p>{`${skills[3]?.stat.name}: ${skills[3]?.base_stat}`}</p>
                    <p>{`${skills[4]?.stat.name}: ${skills[4]?.base_stat}`}</p>
                    <p>{`${skills[5]?.stat.name}: ${skills[5]?.base_stat}`}</p>
                </div>
            </div>
        </div>
    );
    
}