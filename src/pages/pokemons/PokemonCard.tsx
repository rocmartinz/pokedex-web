import React from 'react';

import ISimplePokemon from '../../models/ISimplePokemon';
import PokemonTypes, { PokemonType } from '../../models/PokemonTypes';

const PokemonCard: React.FC<{ pokemon: ISimplePokemon }> = ({ pokemon }) => {
  const primaryType: PokemonType = pokemon.types[0];
  const cardClasses = `${PokemonTypes[primaryType].primary} relative rounded-xl p-4 lg:p-8 h-28 md:h-40`;
  const typeClasses = `${PokemonTypes[primaryType].secondary} flex rounded-lg capitalize justify-self-start text-xs text-white p-1 pl-2 pr-2"`;

  return (
    <React.Fragment>
      <div className={cardClasses}>
        <p className="text-white font-bold capitalize lg:text-lg">{pokemon.name}</p>
        <ul className="grid gap-y-1.5">
          {pokemon.types.map((type) => (
            <li className={typeClasses}>{type}</li>
          ))}
        </ul>
        <img className="absolute bottom-2 lg:bottom-4 right-2 lg:right-4 h-20 md:h-28" src={pokemon.image} alt={pokemon.name} />
      </div>
    </React.Fragment>
  );
}

export default PokemonCard;