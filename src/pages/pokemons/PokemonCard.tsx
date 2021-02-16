import React from 'react';

import ISimplePokemon from '../../models/ISimplePokemon';

const PokemonCard: React.FC<{ pokemon: ISimplePokemon }> = ({ pokemon }) => {
  return (
    <React.Fragment>
      <div className="bg-green-400 rounded-xl p-4 lg:p-8 h-28 md:h-40">
        <p className="text-white font-bold capitalize lg:text-lg">{pokemon.name}</p>
        <div className="flex justify-between">
          <p>types</p>
          <img className="h-16 md:h-24" src={pokemon.image} alt={pokemon.name} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default PokemonCard;