/** @format */
import {
  fetchAbilities,
  fetchEvolutionChain,
  fetchEvolutionPokemon,
  fetchMoves,
  fetchPokemon,
  fetchRelationship,
  fetchType,
  findAllFamilyVariety,
  findVariety,
} from "@/app/utils/datafetch";
import React from "react";
import BaseInfo from "./components/BaseInfo";
import StatsChart from "./components/StatsChart";
import Abilities from "./components/Abilities";
import EvoChain from "./components/EvoChain";
import Buttons from "./components/Buttons";
import Moves from "./components/Moves";
import ResAndWea from "./components/ResAndWea";

interface Props {
  params: {
    name: string;
  };
}

export default async function PokemonDetail({ params }: Props) {
  const { name } = params;

  const pokemon = await fetchPokemon(name);
  const chainData = await fetchEvolutionChain(pokemon);
  const abilities = await fetchAbilities(pokemon);
  const moves = fetchMoves(pokemon);
  const typeRelation = await fetchRelationship(pokemon);

  let varities = await findAllFamilyVariety(chainData);
  if (!varities) {
    varities = [[{
      name: pokemon.name,
      id: pokemon.id,
      is_default: true,
    }]]
  }

  
  return (
    <>
      <div
        className="md:p-4 md:w-[90%]  mx-auto rounded-lg shadow-lg border-2 border-solid border-gray-400 dark:border-gray-700
           bg-slate-300 dark:bg-slate-700"
      >
        <div className="flex flex-col justify-center items-center">
          <Buttons pokemon={pokemon} />
          <BaseInfo pokemon={pokemon} />
          <StatsChart pokemon={pokemon} />
          <div className="w-[80%] lg:w-[50%]">
            <ResAndWea typeRelation={typeRelation} />
            <EvoChain varities={varities} />
            <Abilities abilities={abilities} />
            <Moves moves={moves} />
          </div>
        </div>
      </div>
    </>
  );
}
