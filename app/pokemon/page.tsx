/** @format */
import React from "react";
import { getPokemonData } from "../utils/datafetch";
import PokeCard from "./components/PokeCard";
import Filters from "./components/Filters";
import ClientSide from "./components/ClientSide";

export default async function Pokemon() {
  const gen = 1;
  const pokemons = await getPokemonData(gen);

  

  return (
    <>

    <ClientSide pokemons={pokemons} gen={1} />
    
      
    </>
  );
}
