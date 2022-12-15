import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PokemonListItem({name, url}) {

    const [pokeData, SetPokeData] = useState();
    
    /**
     * 
     * @returns Obtienen el id que viene de la url
     */
    const getId = ()=>{
        return url.split("/")[6];
    };

    /**
     * Obtiene un pokemon por nombre
     */
    const getData = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await res.json();
        SetPokeData(data);
    }

    useEffect(()=>{
        getData().catch(null);
    }, []);

    //console.log(pokeData?.sprites?.front_default);

    return (
        <>
            <p>{name}</p>
            <img src={pokeData?.sprites?.front_default} alt={pokeData?.name}></img>
            <button>
                <Link to={`/pokemon/${getId()}`}>Ver detalle </Link>
            </button>
        </>
    );
}