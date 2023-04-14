/** @format */

"use client";
/** @format */
import React, { useState } from "react";
import Image from "next/image";
import TypeBadge from "./TypeBadge";
import Link from "next/link";

interface Props {
  pokemon: Pokemon;
  gen: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}

export default function PokeCard({ pokemon, gen }: Props) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/pokemon/${pokemon.name}`}>
        <div className="h-[40%] w-full">
          {isHovered && gen <= 5 ? (
            <div className="">
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`}
                alt={pokemon.name}
                height={130}
                width={130}
              />
            </div>
          ) : (
            <Image
              src={pokemon.info.sprites.front_default}
              alt={pokemon.name}
              height={150}
              width={150}
            />
          )}
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-slate-500 mt-6">#{pokemon.id}</p>
          <p className="text-md font-medium">{pokemon.name}</p>
          <div className="flex mt-3">
            {pokemon.info.types.map((type) => {
              return <TypeBadge key={type.slot} type={type.type.name} />;
            })}
          </div>
        </div>
      </Link>
    </div>
  );
}
