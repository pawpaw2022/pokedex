/** @format */
"use client";
import { usePokemon } from "@/app/utils/datafetch";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import TypeBadge from "../components/TypeBadge";
import PokeCard from "../components/PokeCard";
import { getSpriteUrl } from "@/app/utils/config";
import Stats from './components/Stats';

interface Props {
  params: {
    name: string;
  };
}

export default async function PokemonDetail({ params }: Props) {

  const { name } = params;
  const { data: pokemon, isLoading } = usePokemon(name);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div
        className="md:p-4 md:w-[90%] mx-auto rounded-lg shadow-lg border-2 border-solid border-gray-400 dark:border-gray-700
           bg-slate-300 dark:bg-slate-700"
      >
        <div className="flex justify-center">
          <div className="mr-15">
            <Image
              src={getSpriteUrl(pokemon?.id, pokemon?.name)}
              alt={pokemon?.name}
              height={300}
              width={300}
            />
          </div>

          <main className="">
            <h1 className="text-lg capitalize">{pokemon?.name}</h1>
            <p className="text-md">#{pokemon?.id}</p>
            <div className="flex">
              {pokemon?.types.map((type) => {
                return <TypeBadge key={type.slot} type={type.type.name} />;
              })}
            </div>
            <h1 className="text-lg capitalize">Abilities</h1>
            {pokemon?.abilities.map((ability) => {
              return <p key={ability.ability.name}>{ability.ability.name}</p>;
            })}
            <h1 className="text-lg capitalize">Stats</h1>
            {pokemon?.stats.map((stat) => {
              return (
                <Stats name={stat.stat.name} base_stat={stat.base_stat} key={stat.stat.name} />
              );
            })}
            <Stats name="total" base_stat={pokemon?.stats.reduce((acc, stat) => acc + stat.base_stat, 0)} />

          </main>
        </div>
      </div>
    
    </>
  );
}

