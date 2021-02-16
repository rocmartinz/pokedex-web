import React from 'react';
import { useParams } from 'react-router-dom';

import ISimplePokemon from '../../models/ISimplePokemon';

import PokemonsService from '../../services/PokemonsService';

import Error from '../../shared/error/Error';
import Loading from '../../shared/loading/Loading';

const defaultPokemon: ISimplePokemon = { id: 0, name: '', image: '', types: [] };

const Pokemon: React.SFC = () => {
  const [pokemon, setPokemon]: [ISimplePokemon, (pokemon: ISimplePokemon) => void] = React.useState(defaultPokemon);

  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);

  const [error, setError]: [string, (error: string) => void] = React.useState("");

  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    PokemonsService.read(id)
      .then((response) => {
        setPokemon(response);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <React.Fragment>
      <p>{pokemon.name}</p>
      <img src={pokemon.image} alt={pokemon.name} />

      { loading && <Loading />}
      { error && <Error message={error} />}
    </React.Fragment>
  );
};

export default Pokemon;