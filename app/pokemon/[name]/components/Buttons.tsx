/** @format */
"use client";
import Link from "next/link";
import React from "react";
import DarkModeToggle from "../../components/filters/DarkModeToggle";

type Props = {
  pokemon: Pokemon;
};

export default function Buttons( {pokemon }: Props ) {

  const getPokemonGen = (id: number) => {
    if (id <= 151) return 1;
    if (id <= 251) return 2;
    if (id <= 386) return 3;
    if (id <= 493) return 4;
    if (id <= 649) return 5;
    if (id <= 721) return 6;
    if (id <= 809) return 7;
    if (id <= 905) return 8;
    if (id <= 1010) return 9;
    return 1;
  };

  const gen = getPokemonGen(pokemon.id);

  return (
    <div className="flex justify-between items-center my-4 w-[90%] md:w-[45%]">
      <Link href={`/pokemon?gen=${gen}`}>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Return
        </button>
      </Link>

      <DarkModeToggle />
    </div>
  );
}
