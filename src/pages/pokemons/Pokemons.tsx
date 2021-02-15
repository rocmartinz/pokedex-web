import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

import ISimplePokemon from './ISimplePokemon';
import PokemonCard from './PokemonCard';

const defaultPokemons: ISimplePokemon[] = [];

const Pokemons: React.FC = () => {
  const [pokemons, setPokemons]: [ISimplePokemon[], (pokemons: ISimplePokemon[]) => void] = React.useState(defaultPokemons);

  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);

  const [error, setError]: [string, (error: string) => void] = React.useState("");

  React.useEffect(() => {
    const url = 'https://ygzqsl30z1.execute-api.sa-east-1.amazonaws.com/dev/pokemons?limit=20&offset=0';
    axios.get<ISimplePokemon[]>(url)
      .then((response) => {
        setPokemons(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
    ;
  }, []);

  return (
    <div className="pl-4 md:pl-8 pr-4 md:pr-8 pb-4 md:pb-8">
      <h1 className="text-2xl md:text-4xl text-gray-600 font-bold pt-6 pb-6">Pokedex</h1>

      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <Link to={`pokemon/${pokemon.id}`}>
              <PokemonCard pokemon={pokemon} />
            </Link>
          </li>
        ))}
      </ul>
      { error && <p className="text-red-600">{error}</p>}
    </div>
  );
};

export default Pokemons;