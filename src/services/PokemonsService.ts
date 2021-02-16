import axios from 'axios';

import ISimplePokemon from '../models/ISimplePokemon';

const baseURL = 'https://ygzqsl30z1.execute-api.sa-east-1.amazonaws.com/dev'

const PokemonsService = {
  async list(): Promise<ISimplePokemon[]> {
    const url = `${baseURL}/pokemons`;
    const config = { params: { limit: 20, offset: 0 } };
    const pokemons = (await axios.get<ISimplePokemon[]>(url, config)).data;
    return pokemons;
  },
  async read(id: string): Promise<ISimplePokemon> {
    const url = `${baseURL}/pokemons/${id}`;
    const pokemon = (await axios.get<ISimplePokemon>(url)).data;
    return pokemon;
  }
};

export default PokemonsService;