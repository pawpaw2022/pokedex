/** @format */
"use client";
import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import PokeCard from "./PokeCard";
import {
  getPokemonData,
  useAllPokemonList,
  usePokemon,
  usePokemonList,
} from "@/app/utils/datafetch";
import PokeCardSkeleton from "./PokeCardSkeleton";
import { gens } from "@/app/utils/config";

type Props = {
  pokemons: Pokemon[];
  gen: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
};

export default function ClientSide({ pokemons, gen }: Props) {
  // const [originalData, setOriginalData] = React.useState<Pokemon[]>(pokemons);
  // const [filteredData, setFilteredData] = React.useState<Pokemon[]>(pokemons);
  // const [filteredTypeData, setFilteredTypeData] = React.useState<Pokemon[]>(pokemons);

  // const [searchTerm, setSearchTerm] = React.useState("");
  // const [currentGenFilter, setCurrentGenFilter] = React.useState(gen);
  // const [currentTypeFilter, setCurrentTypeFilter] = React.useState("all");
  // const [isLoading, setIsLoading] = React.useState(false);

  // const handleGenFilter = async (gen: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8) => {
  //   setSearchTerm("");
  //   setCurrentGenFilter(gen);
  //   setIsLoading(true);
  //   const res = await getPokemonData(gen);
  //   setOriginalData(res);

  //   if (currentTypeFilter === "all") {
  //     setFilteredData(res);
  //   } else {
  //     const filtered = res.filter((pokemon) => {
  //       return pokemon.info.types.some(
  //         (t) => t.type.name.toLowerCase() === currentTypeFilter.toLowerCase()
  //       );
  //     });
  //     setFilteredData(filtered);
  //   }
  //   setIsLoading(false);

  // };

  // const handleTypeFilter = (type: string) => {
  //   if (type.toLowerCase() === "all") {
  //     setFilteredData(originalData);
  //     setFilteredTypeData(originalData);
  //     setCurrentTypeFilter("all");
  //     setSearchTerm("");
  //     return;
  //   }

  //   const filtered = originalData.filter((pokemon) => {
  //     return pokemon.info.types.some(
  //       (t) => t.type.name.toLowerCase() === type.toLowerCase()
  //     );
  //   });

  //   setCurrentTypeFilter(type);
  //   setFilteredData(filtered);
  //   setFilteredTypeData(filtered);
  //   setSearchTerm("");

  // };

  // const handleSearch = (search: string) => {
  //   if (search === "") {
  //     setFilteredData(originalData);
  //     handleTypeFilter(currentTypeFilter);
  //     return;
  //   }

  //   const filtered = filteredTypeData.filter((pokemon) => {
  //     return pokemon.info.name.includes(search.toLowerCase());
  //   });

  //   setFilteredData(filtered);
  // };

  const [searchTerm, setSearchTerm] = useState("");
  const [currentGenFilter, setCurrentGenFilter] = useState(1);
  const [currentTypeFilter, setCurrentTypeFilter] = useState("all");


  // const [currentPokemonList, setCurrentPokemonList] = React.useState<PokemonList>({} as PokemonList);

  // const {
  //   data: pokemonList,
  // } = useAllPokemonList();
  const {
    data: pokemonList,
  } = usePokemonList(gens[currentGenFilter][0], gens[currentGenFilter][1]);

  const handleGenFilter = () => {
    console.log("handleGenFilter");
  };

  const handleTypeFilter = () => {
    console.log("handleTypeFilter");
  };

  const handleSearch = () => {
    console.log("handleSearch");
  };

  return (
    <>
      <Filters
        handleGenFilter={handleGenFilter}
        handleTypeFilter={handleTypeFilter}
        handleSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        { pokemonList?.results.map((pokemon, index) => {
          return <PokeCard key={index} pokemon={pokemon.name} />;
        })}
      </div>

      {/* {isLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {Array(100)
            .fill(0)
            .map((_, i) => (
              <PokeCardSkeleton key={i} />
            ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {filteredData.map((pokemon) => {
            return (
              <PokeCard
                key={pokemon.id}
                pokemon={pokemon}
                gen={currentGenFilter}
              />
            );
          })}
        </div>
      )} */}
    </>
  );
}
