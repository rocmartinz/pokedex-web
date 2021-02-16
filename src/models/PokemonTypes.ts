export type PokemonType = 'bug' | 'dark' | 'dragon' |
  'electric' | 'fairy' | 'fighting' |
  'fire' | 'flying' | 'ghost' |
  'grass' | 'ground' | 'ice' |
  'normal' | 'poison' | 'psychic' |
  'rock' | 'steel' | 'water';

type PokemonTypeColors = { primary: string, secondary: string };

export type PokemonTypes = { [key in PokemonType]: PokemonTypeColors };

const types: PokemonTypes = {
  bug: { primary: 'bg-bug-600', secondary: 'bg-bug-400' },
  dark: { primary: 'bg-dark-600', secondary: 'bg-dark-400' },
  dragon: { primary: 'bg-dragon-600', secondary: 'bg-dragon-400' },
  electric: { primary: 'bg-electric-600', secondary: 'bg-electric-400' },
  fairy: { primary: 'bg-fairy-600', secondary: 'bg-fairy-400' },
  fighting: { primary: 'bg-fighting-600', secondary: 'bg-fighting-400' },
  fire: { primary: 'bg-fire-600', secondary: 'bg-fire-400' },
  flying: { primary: 'bg-flying-600', secondary: 'bg-flying-400' },
  ghost: { primary: 'bg-ghost-600', secondary: 'bg-ghost-400' },
  grass: { primary: 'bg-grass-600', secondary: 'bg-grass-400' },
  ground: { primary: 'bg-ground-600', secondary: 'bg-ground-400' },
  ice: { primary: 'bg-ice-600', secondary: 'bg-ice-400' },
  normal: { primary: 'bg-normal-600', secondary: 'bg-normal-400' },
  poison: { primary: 'bg-poison-600', secondary: 'bg-poison-400' },
  psychic: { primary: 'bg-psychic-600', secondary: 'bg-psychic-400' },
  rock: { primary: 'bg-rock-600', secondary: 'bg-rock-400' },
  steel: { primary: 'bg-steel-600', secondary: 'bg-steel-400' },
  water: { primary: 'bg-water-600', secondary: 'bg-water-400' },
};

export default types;