/** @format */

import { useQuery } from "@tanstack/react-query";
import { gens, typeCode } from "./config";

export const getPokemonData = async (gen: number): Promise<Pokemon[]> => {
  let pokemons: Pokemon[] = [];

  for (let i = gens[gen][0]; i <= gens[gen][1]; i++) {
    // for (let i = 1; i <= 20; i++) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      if (response.status !== 200) {
        break;
      }

      const info: Pokemon = await response.json();

      if (info.sprites.front_default === null) {
        continue;
      }

      const id = info.id;
      const name = info.name;

      pokemons = [...pokemons, { name, id, info }];
    } catch (e) {
      console.log(e);
    }
  }

  return pokemons;
};

export const getSinglePokemonData = async (
  id: number | string
): Promise<Pokemon> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const info: Pokemon = await response.json();

  const name = info.name;

  return { name, id: info.id, info };
};

export const usePokemon = (id: number | string) => {
  const queryFn = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data: Pokemon = await response.json();

    return data as Pokemon;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemon", id],
    queryFn,
    staleTime: 1000 * 60 * 60 * 24 * 7, // 1 week
  });

  return { data, isLoading, isError };
};


export const useAllPokemonList = () => {
  const queryFn = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2000');
    const data: PokemonList = await response.json();

    return data as PokemonList;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemonList"],
    queryFn,
    staleTime: 1000 * 60 * 60 * 24 * 7, // 1 week
  });

  return { data, isLoading, isError };
};

export const useType = (type: string) => {

  const queryFn = async () => {
    const code = typeCode[type.toLowerCase()];

    const response = await fetch(`https://pokeapi.co/api/v2/type/${code}`);
    const data = await response.json();

    return data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemonType", type],
    queryFn,
    staleTime: 1000 * 60 * 60 * 24 * 7, // 1 week
  });

  return { data, isLoading, isError };
};
