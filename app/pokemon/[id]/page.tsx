/** @format */
"use client";
import { getSinglePokemonData } from "@/app/utils/datafetch";
import React, { useEffect, useState } from "react";

interface Props {
  params: {
    id: string;
  };
}

export default async function PokemonDetail({ params: { id } }: Props) {


  const pokemonInfo: Pokemon = await getSinglePokemonData(id);

  return (
    <>
      <h1>{pokemonInfo.name}</h1>
    </>
    
  );
}
