import React from 'react';
import { Link } from 'react-router-dom';

import ISimplePokemon from '../../models/ISimplePokemon';

import PokemonsService from '../../services/PokemonsService';

import Error from '../../shared/error/Error';
import Loading from '../../shared/loading/Loading';

import PokemonCard from './PokemonCard';

const defaultPokemons: ISimplePokemon[] = [];

const Pokemons: React.FC = () => {
  const [pokemons, setPokemons]: [ISimplePokemon[], (pokemons: ISimplePokemon[]) => void] = React.useState(defaultPokemons);

  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);

  const [error, setError]: [string, (error: string) => void] = React.useState("");

  React.useEffect(() => {
    PokemonsService.list()
      .then((response) => {
        setPokemons(response);
      })
      .catch(() => {
        setError('An error has occurred, try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
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

      { loading && <Loading />}
      { error && <Error message={error} />}
    </div>
  );
};

export default Pokemons;