import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

interface IPokemon {
  id: number;
  name: string;
  image: string;
}

const defaultPokemon: IPokemon = { id: 0, name: '', image: '' };

const Pokemon: React.SFC = () => {
  const [pokemon, setPokemon]: [IPokemon, (pokemon: IPokemon) => void] = React.useState(defaultPokemon);

  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);

  const [error, setError]: [string, (error: string) => void] = React.useState("");

  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    const url = `https://ygzqsl30z1.execute-api.sa-east-1.amazonaws.com/dev/pokemons/${id}`;
    axios.get<IPokemon>(url)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
    ;
  }, [id]);

  return (
    <React.Fragment>
      <p>{pokemon.name}</p>
      <img src={pokemon.image} alt={pokemon.name} />
      { error && <p className="text-red-600">{error}</p>}
    </React.Fragment>
  );
};

export default Pokemon;