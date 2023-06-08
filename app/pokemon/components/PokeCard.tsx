/** @format */

"use client";
/** @format */
import React, { useState } from "react";
import Image from "next/image";
import TypeBadge from "./TypeBadge";
import Link from "next/link";
import {
  displayName,
  getSpriteUrl,
  nameConvention,
  typeCode,
} from "@/app/utils/config";
import { usePokemon } from "@/app/utils/datafetch";
import PokeCardSkeleton from "./PokeCardSkeleton";

interface Props {
  pokemon: number | string;
  typeFilter: string;
}

export default function PokeCard({ pokemon, typeFilter }: Props) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const { data, isLoading } = usePokemon(pokemon);
  const bgColor =
    typeCode.find((t) => t.name.toLowerCase() === data?.types[0].type.name)
      ?.color + (isHovered ? "80" : "50");

  const handleClick = () => {
    const postion = (document.documentElement || document.body).scrollTop;
    if (typeof window !== "undefined" && localStorage) {
      localStorage.setItem("scroll", postion.toString());
      localStorage.setItem('typeFilter', typeFilter);
    }
  };

  if (isLoading) return <PokeCardSkeleton />;

  return (
    <div
      id={data?.name}
      className="card"
      style={{ backgroundColor: bgColor }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <Link href={`/pokemon/${data?.name}`}>
        <div className="w-full flex justify-center">
          <Image
            src={getSpriteUrl(data?.id, data?.name)}
            alt={data?.name}
            height={160}
            width={160}
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-secondary mt-6">#{data?.id}</p>
          <p className="text-md font-medium capitalize text-primary ">
            {displayName(data?.name)}
          </p>
          <div className="flex my-2 md:my-3">
            {data?.types.map((type) => {
              return <TypeBadge key={type.slot} type={type.type.name} />;
            })}
          </div>
        </div>
      </Link>
    </div>
  );
}
