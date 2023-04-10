/** @format */

import React from "react";
import { getPokemonData } from "../utils/datafetch";
import PokeCard from "../components/PokeCard";

export default async function Pokemon() {
  const gen = 1;
  const pokemons = await getPokemonData(gen);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {pokemons.map((pokemon) => {
          return <PokeCard key={pokemon.id} pokemon={pokemon} gen={gen} />;
        })}
      </div>
    </>
  );
}