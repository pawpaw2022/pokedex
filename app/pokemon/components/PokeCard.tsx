/** @format */

"use client";
/** @format */
import React, { useState } from "react";
import Image from "next/image";
import TypeBadge from "./TypeBadge";
import Link from "next/link";
import { typesColor } from "@/app/utils/commons";

interface Props {
  pokemon: Pokemon;
  gen: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}

export default function PokeCard({ pokemon }: Props) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const bgColor = typesColor[pokemon.info.types[0].type.name]+(isHovered ? "80" : "50");

  return (
    <div
      className="card"
      style={{ backgroundColor: bgColor }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/pokemon/${pokemon.name}`}>
        <div className="w-full flex justify-center">
          <Image
            src={pokemon.info.sprites.front_default}
            alt={pokemon.name}
            height={160}
            width={160}
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-secondary mt-6">#{pokemon.id}</p>
          <p className="text-md font-medium capitalize text-primary ">{pokemon.name}</p>
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
