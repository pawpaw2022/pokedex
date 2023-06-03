/** @format */

"use client";
/** @format */
import React, { useState } from "react";
import Image from "next/image";
import TypeBadge from "./TypeBadge";
import Link from "next/link";
import { typesColor } from "@/app/utils/config";
import { usePokemon } from "@/app/utils/datafetch";
import PokeCardSkeleton from "./PokeCardSkeleton";

interface Props {
  pokemon: number | string;
}

export default function PokeCard({ pokemon }: Props) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const { data, isLoading } = usePokemon(pokemon);
  const bgColor =
    typesColor[data?.types[0].type.name] + (isHovered ? "80" : "50");

  if (isLoading) return <PokeCardSkeleton />;

  return (
    <div
      className="card"
      style={{ backgroundColor: bgColor }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/pokemon/${data?.name}`}>
        <div className="w-full flex justify-center">
          <Image
            src={`https://img.pokemondb.net/sprites/home/normal/${data?.name}.png`}
            alt={data?.name}
            height={160}
            width={160}
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-secondary mt-6">#{data?.id}</p>
          <p className="text-md font-medium capitalize text-primary ">
            {data?.name}
          </p>
          <div className="flex mt-3">
            {data?.types.map((type) => {
              return <TypeBadge key={type.slot} type={type.type.name} />;
            })}
          </div>
        </div>
      </Link>
    </div>
  );
}
