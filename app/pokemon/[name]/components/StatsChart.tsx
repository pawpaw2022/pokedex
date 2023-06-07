/** @format */

import Image from "next/image";
import React from "react";
import Stats from "./widgets/Stats";
import { getPictureUrl } from "@/app/utils/config";
import { AiFillForward, AiFillBackward } from "react-icons/ai";
import Link from "next/link";

type Props = {
  pokemon: Pokemon;
};

export default function StatsChart({ pokemon }: Props) {
  return (
    <div className="flex justify-center items-center md:w-[80%]">
      <Link
        href={`/pokemon/${pokemon.id - 1}`}
        className={`${
          pokemon.id > 1 && pokemon.id < 1011 ? "visible" : "invisible"
        }`}
      >
        <AiFillBackward
          className="cursor-pointer hover:-translate-x-2 ease-in-out duration-200 lg:mr-5 text-indigo-500 dark:text-indigo-600 w-12 md:w-[100px] "
          size={100}
        />
      </Link>

      <div className="flex">
        <div className="mr-5">
          <Image
            src={getPictureUrl(pokemon?.name)}
            alt={pokemon?.name}
            height={300}
            width={300}
          />
        </div>
        <div className="w-32 ml-5 flex flex-col justify-center">
          {pokemon?.stats.map((stat) => {
            return (
              <Stats
                name={stat.stat.name}
                base_stat={stat.base_stat}
                key={stat.stat.name}
              />
            );
          })}
          <Stats
            name="Total"
            base_stat={pokemon?.stats.reduce(
              (acc, stat) => acc + stat.base_stat,
              0
            )}
          />
        </div>
      </div>

      <Link
        href={`/pokemon/${pokemon.id + 1}`}
        className={`${
          pokemon.id > 0 && pokemon.id < 1010 ? "visible" : "invisible"
        }`}
      >
        <AiFillForward
          className="cursor-pointer hover:translate-x-2 ease-in-out duration-200 lg:ml-5 text-indigo-500 dark:text-indigo-600  w-12 md:w-[100px]"
          size={100}
        />
      </Link>
    </div>
  );
}
