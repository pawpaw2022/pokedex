/** @format */
"use client";
import {  usePokemon } from "@/app/utils/datafetch";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";
import TypeBadge from "../components/TypeBadge";

interface Props {
  params: {
    name: string;
  };
}

export default async function PokemonDetail({ params: { name } }: Props) {

  // const {data: pokemonInfo}: Pokemon = usePokemon(name);
  return (
    <>
      {/* <div className="w-full mx-2 text-primary">
        <Image
          className="rounded-md shadow-md"
          src={`https://img.pokemondb.net/artwork/${name}.jpg`}
          alt="pokemon image"
          width={400}
          height={400}
        />
        <div>
          <h1 className="text-2xl font-bold">{pokemon.name}</h1>
          <p className="text-sm">#{pokemon.id}</p>
          {pokemon.types.map((type) => {
            return <TypeBadge key={type.type.name} type={type.type.name} />;
          })}

          <h1 className="text-2xl font-bold">Abilities</h1>
          {pokemon.abilities.map((ability) => {
            return <p key={ability.ability.name}>{ability.ability.name}</p>;
          })}

          <h1 className="text-2xl font-bold">Stats</h1>
          {pokemon.stats.map((stat) => {
            return (
              <p key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </p>
            );
          })}

          <h1 className="text-2xl font-bold">Moves</h1>
          {pokemon.moves.map((move) => {
            return <p key={move.move.name}>{move.move.name}</p>;
          })}
        </div>
      </div> */}
    </>
  );
}
