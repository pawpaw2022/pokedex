/** @format */
import { fetchEvolutionChain, fetchEvolutionCondition, fetchEvolutionPokemon, fetchPokemon } from "@/app/utils/datafetch";
import React from "react";
import BaseInfo from "./components/BaseInfo";
import StatsChart from "./components/StatsChart";
import Abilities from "./components/Abilities";
import EvoChain from "./components/EvoChain";
import Buttons from "./components/Buttons";

interface Props {
  params: {
    name: string;
  };
}

export default async function PokemonDetail({ params }: Props) {
  const { name } = params;

  
  const pokemon = await fetchPokemon(name);
  const chainData = await fetchEvolutionChain(pokemon);
  const evolutionChain = await fetchEvolutionPokemon(chainData);
  const condition = fetchEvolutionCondition(chainData);
  // console.log(condition);

  return (
    <>
      <div
        className="md:p-4 md:w-[90%] mx-auto rounded-lg shadow-lg border-2 border-solid border-gray-400 dark:border-gray-700
           bg-slate-300 dark:bg-slate-700"
      >
        <div className="flex flex-col justify-center items-center">
          <Buttons />
          <BaseInfo pokemon={pokemon} />
          <StatsChart pokemon={pokemon} />
          <EvoChain evolutionChain={evolutionChain} />
          <Abilities pokemon={pokemon} />
        </div>
      </div>
    </>
  );
}
