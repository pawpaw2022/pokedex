/** @format */
"use client";
import React from "react";
import Filters from "./Filters";
import PokeCard from "./PokeCard";
import { getPokemonData, useGeneration, useSinglePokemon } from "@/app/utils/datafetch";
import PokeCardSkeleton from "./PokeCardSkeleton";

type Props = {
  pokemons: PokemonData[];
  gen: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
};

export default function ClientSide({ pokemons, gen }: Props) {
  const [originalData, setOriginalData] =
    React.useState<PokemonData[]>(pokemons);
  const [filteredData, setFilteredData] =
    React.useState<PokemonData[]>(pokemons);
  const [filteredTypeData, setFilteredTypeData] =
    React.useState<PokemonData[]>(pokemons);

  const [searchTerm, setSearchTerm] = React.useState("");
  const [currentGenFilter, setCurrentGenFilter] = React.useState(gen);
  const [currentTypeFilter, setCurrentTypeFilter] = React.useState("all");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleGenFilter = async (gen: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8) => {
    setSearchTerm("");
    setCurrentGenFilter(gen);
    setIsLoading(true);
    // const res = fetchGenData(gen);
    const res = await getPokemonData(gen);
    setOriginalData(res);

    if (currentTypeFilter === "all") {
      setFilteredData(res);
    } else {
      const filtered = res.filter((pokemon) => {
        return pokemon.types.some(
          (t) => t.type.name.toLowerCase() === currentTypeFilter.toLowerCase()
        );
      });
      setFilteredData(filtered);
    }
    setIsLoading(false);
  };

  const handleTypeFilter = (type: string) => {
    if (type.toLowerCase() === "all") {
      setFilteredData(originalData);
      setFilteredTypeData(originalData);
      setCurrentTypeFilter("all");
      setSearchTerm("");
      return;
    }

    const filtered = originalData.filter((pokemon) => {
      return pokemon.types.some(
        (t) => t.type.name.toLowerCase() === type.toLowerCase()
      );
    });

    setCurrentTypeFilter(type);
    setFilteredData(filtered);
    setFilteredTypeData(filtered);
    setSearchTerm("");
  };

  const handleSearch = (search: string) => {
    if (search === "") {
      setFilteredData(originalData);
      handleTypeFilter(currentTypeFilter);
      return;
    }

    const filtered = filteredTypeData.filter((pokemon) => {
      return pokemon.name.includes(search.toLowerCase());
    });

    setFilteredData(filtered);
  };

  console.log("filteredData", filteredData);

  // const test = useGeneration(currentGenFilter);
  // console.log("test", test);

  return (
    <>
      <Filters
        handleGenFilter={handleGenFilter}
        handleTypeFilter={handleTypeFilter}
        handleSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {isLoading ? (
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
              />
            );
          })}
        </div>
      )}
    </>
  );
}
