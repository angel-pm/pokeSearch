import { useEffect, useState } from "react";

import "./style.css";
import SearchBox from "./SearchBox";
import SearchResults from "./SearchResults";

export default function Search() {

    const [isAtTop, setIsAtTop] = useState(false);
    const [pokeData, setPokeData] = useState({});

    const handleCloseSearch = () => {
        setIsAtTop(false);
        setPokeData({});
    };

    const getData = async (name) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await res.json();
        //setPokeData(data);
        return data;
    }

    const handleSearchClick = async (searchText) => {
        try {
            setIsAtTop(true);
            if (searchText !== "") {
                const searchTextMinus = searchText.toLowerCase();
                const pokemon = await getData(searchTextMinus).catch(null);
                setPokeData(pokemon);
                //console.log(pokeData.name);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
            <SearchBox onSearch={handleSearchClick} onClose={handleCloseSearch} isSearching={isAtTop} />
            <SearchResults results={pokeData} isSearching={isAtTop} />
        </div>
    );
}