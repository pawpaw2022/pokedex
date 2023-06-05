/** @format */

import { useQuery } from "@tanstack/react-query";
import { typeCode } from "./config";

export const fetchPokemon = async (id: number | string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();

  return data as Pokemon;
};

export const fetchSpecies = async (pokemon: Pokemon) => {
  const response = await fetch(pokemon.species.url);
  const data = await response.json();

  return data as PokemonSpecies;
}

export const fetchEvolutionChain = async (pokemon: Pokemon) => {

  const response = await fetchSpecies(pokemon);
  const data = await fetch(response.evolution_chain.url);
  const evolutionChain: EvolutionChain = await data.json();

  
  const stage1 = evolutionChain.chain.species.name;
  const stage2 = evolutionChain.chain.evolves_to[0]?.species.name;
  const stage3 = evolutionChain.chain.evolves_to[0]?.evolves_to[0]?.species.name;

  let results = [];

  if (stage1){
    const stage1Data = await fetchPokemon(stage1);
    results.push(stage1Data);
  }

  if (stage2){
    const stage2Data = await fetchPokemon(stage2);
    results.push(stage2Data);
  }

  if (stage3){
    const stage3Data = await fetchPokemon(stage3);
    results.push(stage3Data);
  }



  return results;
}

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

    allTypes[type.name] = data;
  }

  return {data: allTypes, isLoading: false, isError: false};
}
