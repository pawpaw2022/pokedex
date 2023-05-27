/** @format */
import React from "react";
import { getPokemonData } from "../utils/datafetch";
import PokeCard from "./components/PokeCard";
import Sidebar from "./components/Sidebar";

export default async function Pokemon() {
  const gen = 1;
  const pokemons = await getPokemonData(gen);

  return (
    <>
      <div className="flex">
        {/* <Sidebar /> */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {pokemons.map((pokemon) => {
            return <PokeCard key={pokemon.id} pokemon={pokemon} gen={gen} />;
            // return <PokeCardSkeleton />;
          })}
        </div>
      </div>
    </>
  );
}
