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
};

export const fetchEvolutionChain = async (pokemon: Pokemon) => {

  const response = await fetchSpecies(pokemon);
  const data = await fetch(response.evolution_chain.url);
  const evolutionChain: EvolutionChain = await data.json();

  return evolutionChain;
};

export const fetchEvolutionPokemon = async (evolutionChain: EvolutionChain) => {
  const chain = evolutionChain.chain;

  let nameList: string[] = [];

  

  const stage1 = chain.species.name;

  if (stage1.includes('deoxys')){
    nameList.push('deoxys-normal');
  }
  else {
      nameList.push(stage1);  
  }

  if (chain.evolves_to.length === 0) return await fetchChainPokemon(nameList);

  chain.evolves_to.forEach((evolves_to) => {
    const stage2 = evolves_to.species.name;
    nameList.push(stage2);

    if (evolves_to.evolves_to) {
      evolves_to.evolves_to.forEach(async (evolves_to) => {
        const stage3 = evolves_to.species.name;
        nameList.push(stage3);
      });
    }
  });

  const results = await fetchChainPokemon(nameList);

  return results;
};

const fetchChainPokemon = async (nameList: string[]) => {
  const results: Pokemon[] = [];

  for (let i = 0; i < nameList.length; i++) {
    const pokemon = await fetchPokemon(nameList[i]);
    results.push(pokemon);
  }
  return results;
};

export const fetchEvolutionCondition = (evolutionChain: EvolutionChain) => {
  console.log(
    evolutionChain.chain.evolves_to[0]?.evolution_details[0]?.trigger.name
  );

  const evolutionCondition: string =
    evolutionChain.chain.evolution_details[0]?.trigger.name;
  return evolutionCondition;
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
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=2000"
    );
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

    const { data, isError } = useType(fid);

    if (isError) return { data: null, isLoading: false, isError: true };

    const type = typeCode.find((_, j) => j === i);

    allTypes[type.name] = data;
  }

  return { data: allTypes, isLoading: false, isError: false };
};
