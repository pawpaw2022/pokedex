/** @format */

import { useQuery } from "@tanstack/react-query";
import { typeCode } from "./config";

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

const useType = (code: number) => {

  const queryFn = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${code}`);
    const data = await response.json();
    return data as Type;
  };
  const typeName = typeCode.find((_, i) => i === code);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemonType", typeName.name],
    queryFn,
    staleTime: 1000 * 60 * 60 * 24 * 7, // 1 week
  });

  return { data, isLoading, isError };
};

export const useAllTypes = () => {

  const allTypes = {} as AllTypes;

  for (let i = 1; i <= 18; i++) {

    const fid = typeCode.find((_, j) => j === i).fid;

    const {data, isError} = useType(fid);

    if (isError) 
      return {data: null, isLoading: false, isError: true};

    const type = typeCode.find((_, j) => j === i);
    console.log(type);
    

    allTypes[type.name] = data;
  }

  return {data: allTypes, isLoading: false, isError: false};
}
