/** @format */

import React, { useState } from "react";
import Image from "next/image";
import TypeBadge from "./TypeBadge";

interface Props {
  pokemon: Pokemon;
}

export default function PokeCard({ pokemon }: Props) {
  return (
    <div className="bg-white rounded-md border-solid border-2 m-2 cursor-pointer hover:scale-105 ease-in-out flex flex-col items-center">
      <Image
        src={pokemon.info.sprites.front_default}
        alt={pokemon.name}
        height={150}
        width={150}
      />
      <p className="text-sm text-slate-500">#{pokemon.id}</p>
      <p className="text-md font-medium">
        {pokemon.name}
      </p>
      <div className="flex my-2">
          {pokemon.info.types.map((type) => {
            return <TypeBadge key={type.slot} type={type.type.name} />;
          })}
      </div>
    </div>
  );
}
