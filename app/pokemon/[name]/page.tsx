/** @format */
import {
  fetchAbilities,
  fetchEvolutionChain,
  fetchEvolutionPokemon,
  fetchMoves,
  fetchPokemon,
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
  const varities = await findAllFamilyVariety(chainData);

  // find weaknes and resistance
  const types = pokemon.types.map((type) => type.type.url);
  
  const typesData = await Promise.all(types.map((url) => fetchType(url)));  
  const weakness = typesData.map((type) => type.damage_relations.double_damage_from);
  const resistance = typesData.map((type) => type.damage_relations.half_damage_from);
  const immunes = typesData.map((type) => type.damage_relations.no_damage_from);

  const typeAllRelations = {
    'normal': 0,
    'fighting': 0,
    'flying': 0,
    'poison': 0,
    'ground': 0,
    'rock': 0,
    'bug': 0,
    'ghost': 0,
    'steel': 0,
    'fire': 0,
    'water': 0,
    'grass': 0,
    'electric': 0,
    'psychic': 0,
    'ice': 0,
    'dragon': 0,
    'dark': 0,
    'fairy': 0,
  } 

  immunes.forEach((type) => {
    type.forEach((t) => {
      typeAllRelations[t.name] = -100;
    })
  })

  weakness.forEach((type) => {
    type.forEach((t) => {
      typeAllRelations[t.name] += 1;
    })
  })

  resistance.forEach((type) => {
    type.forEach((t) => {
      typeAllRelations[t.name] -= 1;
    })
  })

  const typeRelation = {
    weakness: {
      1: [],
      2: [],
    },
    resistance: {
      0: [],
      1: [],
      2: [],
    },
  }

  typeRelation.weakness[1] = Object.keys(typeAllRelations).filter((type) => typeAllRelations[type] === 1);
  typeRelation.weakness[2] = Object.keys(typeAllRelations).filter((type) => typeAllRelations[type] === 2);
  typeRelation.resistance[0] = Object.keys(typeAllRelations).filter((type) => typeAllRelations[type] <= -5);
  typeRelation.resistance[1] = Object.keys(typeAllRelations).filter((type) => typeAllRelations[type] === -1);
  typeRelation.resistance[2] = Object.keys(typeAllRelations).filter((type) => typeAllRelations[type] === -2);


  console.log('typeRelation', typeRelation);
  
  
  
  return (
    <>
      <div
        className="md:p-4 md:w-[90%] lg:w-[75%] mx-auto rounded-lg shadow-lg border-2 border-solid border-gray-400 dark:border-gray-700
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
