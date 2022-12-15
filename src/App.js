import './App.css';
import RoutesComponent from './routes';
import PokemonProvider from './context/pokemons/Provider'

function App() {
  return (
    <PokemonProvider>
      <RoutesComponent />
    </PokemonProvider>
  );
}

export default App;