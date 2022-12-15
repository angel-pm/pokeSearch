import SearchResultsItem from "./SearchResultsItem";

export default function SearchResults({results, isSearching}) {
    return (
        <div style={{ width:"100%", padding: "1rem 0rem 1rem 0rem"  }}>
            {results=={} && isSearching && <p>Sin resultados</p>}
            {results?.name && <SearchResultsItem key={results.name} {...results} />}
        </div>
    );
}