/** @format */
"use client";
import React, { useEffect, useState } from "react";

interface Props {
  params: {
    id: string;
  };
}

export default function PokemonDetail({ params: { id } }: Props) {


  const pokemonInfo: Pokemon = JSON.parse(localStorage.getItem(id));

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full h-full bg-black/[60%] ">
        <div className="flex flex-col items-center justify-center h-full w-[60%]">
          <div className="bg-white rounded-md border-solid border-2 m-2 cursor-pointer hover:scale-105 ease-in-out flex flex-col items-center">
            <div className="h-[40%]">
              <img

                src={pokemonInfo.info.sprites.front_default}
                alt={pokemonInfo.name}
                height={150}
                width={150}
              />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
