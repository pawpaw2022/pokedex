/** @format */
"use client";
import React from "react";
import Filters from "./Filters";
import PokeCard from "./PokeCard";
import { getPokemonData } from "@/app/utils/datafetch";
import PokeCardSkeleton from "./PokeCardSkeleton";

type Props = {
  pokemons: Pokemon[];
  gen: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
};

export default function ClientSide({ pokemons, gen }: Props) {
  const [originalData, setOriginalData] = React.useState<Pokemon[]>(pokemons);
  const [filteredData, setFilteredData] = React.useState<Pokemon[]>(pokemons);

  const [currentGenFilter, setCurrentGenFilter] = React.useState(gen);
  const [currentTypeFilter, setCurrentTypeFilter] = React.useState("all");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleGenFilter = async (gen: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8) => {
    setCurrentGenFilter(gen);
    setIsLoading(true);
    const res = await getPokemonData(gen);
    setOriginalData(res);

    if (currentTypeFilter === "all") {
      setFilteredData(res);
    } else {
      const filtered = res.filter((pokemon) => {
        return pokemon.info.types.some(
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
      setCurrentTypeFilter("all");
      return;
    }

    const filtered = originalData.filter((pokemon) => {
      return pokemon.info.types.some(
        (t) => t.type.name.toLowerCase() === type.toLowerCase()
      );
    });

    setCurrentTypeFilter(type);
    setFilteredData(filtered);
  };

  return (
    <>
      <Filters
        handleGenFilter={handleGenFilter}
        handleTypeFilter={handleTypeFilter}
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
                gen={currentGenFilter}
              />
            );
            // return <PokeCardSkeleton />;
          })}
        </div>
      )}
    </>
  );
}
