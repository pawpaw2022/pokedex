/** @format */

import { getPokemonData } from "../utils/datafetch";
import Pokemons from "./components/Pokemons";

export const metadata = {
  title: "Pokedex Pro",
  description: "A new generation of Pokedex",
};

export default async function PokemonLayout({
  children,
}: {
  children: React.ReactNode;
}){

  const gen = 1;
  const pokemons = await getPokemonData(gen);


  return <>
  <Pokemons pokemons={pokemons} gen={gen} />
  {children}
  </>;
}
