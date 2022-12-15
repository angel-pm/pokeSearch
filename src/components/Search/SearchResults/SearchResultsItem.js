import { Link } from "react-router-dom";

export default function SearchResultsItem(results) {
    return (
        <>
            <div style={{
                backgroundColor: "#fcb653",
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",       
                alignItems: "center",
                width: "350px"
            }}>
                <div className="number" style={{
                    marginTop: "1rem"
                }}><small>#0{results?.id}</small></div>
                <img src={results?.sprites?.front_default} alt={results?.name} />
                <div className="detail-wrapper">
                    <h3>{results?.name}</h3>
                    <small>Type: {results?.types[0]?.type.name} {results?.types[1] ? `- ${results?.types[1]?.type.name}` : ''}</small>
                </div>
                <div style={{
                    marginBottom: "1rem"
                }}>
                    <button>
                        <Link to={`/pokemon/${results?.id}`}>Ver detalle</Link>
                    </button>
                </div>
            </div>
        </>
    );
}