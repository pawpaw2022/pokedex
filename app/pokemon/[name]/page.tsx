/** @format */
import {
  fetchEvolutionChain,
  fetchPokemon,
  usePokemon,
} from "@/app/utils/datafetch";
import React from "react";
import BaseInfo from "./components/BaseInfo";
import StatsChart from "./components/StatsChart";
import Abilities from "./components/Abilities";
import Image from "next/image";
import { getSpriteUrl } from "@/app/utils/config";

interface Props {
  params: {
    name: string;
  };
}

export default async function PokemonDetail({ params }: Props) {
  const { name } = params;

  const pokemon = await fetchPokemon(name);
  const evolutionChain = await fetchEvolutionChain(pokemon);

  const chainName = evolutionChain.map((evolution) => {
    return {
      name: evolution.species.name,
      id: parseInt(evolution.species.url.split("/")[6]),
    };
  });

  return (
    <>
      <div
        className="md:p-4 md:w-[90%] mx-auto rounded-lg shadow-lg border-2 border-solid border-gray-400 dark:border-gray-700
           bg-slate-300 dark:bg-slate-700"
      >
        <div className="flex flex-col justify-center items-center">
          <BaseInfo pokemon={pokemon} />
          <StatsChart pokemon={pokemon} />
          <Abilities pokemon={pokemon} />

          <div>
            {chainName.map((p) => {
              return (
                <div key={p.id}>
                  <Image
                    src={getSpriteUrl(p.id, p.name)}
                    alt={p.name}
                    height={100}
                    width={100}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
