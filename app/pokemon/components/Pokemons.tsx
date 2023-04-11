import PokeCard from '@/app/pokemon/components/PokeCard';
import React from 'react'

interface Props {
    pokemons: Pokemon[];
    gen: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}

export default function Pokemons( {pokemons, gen}: Props) {

    return (
      <>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6"
        >
          {pokemons.map((pokemon) => {
            return <PokeCard key={pokemon.id} pokemon={pokemon} gen={gen} />;
          })}
        </div>
      </>
    );
}
