import { PokemonType } from './PokemonTypes';

interface ISimplePokemon {
  id: number;
  name: string;
  image: string;
  types: PokemonType[];
}

export default ISimplePokemon;