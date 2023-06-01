/** @format */
"use client";
import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import PokeCard from "./PokeCard";
import {
  getPokemonData,
  useAllPokemonList,
  usePokemon,
  useType,
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

  // data

  const [searchTerm, setSearchTerm] = useState("");
  const [currentGenFilter, setCurrentGenFilter] = useState(1);
  const [currentTypeFilter, setCurrentTypeFilter] = useState("all");

  const { data: allData, isLoading } = useAllPokemonList();
  const pokemonGenList = {
    1: allData?.results.slice(0, 151),
    2: allData?.results.slice(151, 251),
    3: allData?.results.slice(251, 386),
    4: allData?.results.slice(386, 493),
    5: allData?.results.slice(493, 649),
    6: allData?.results.slice(649, 721),
    7: allData?.results.slice(721, 809),
    8: allData?.results.slice(809, 898),
    9: allData?.results.slice(898, 1010),
  };

  const currentList = pokemonGenList[currentGenFilter];
  const [filteredList, setFilteredList] = useState([]);
  // console.log("filteredList", filteredList);

  if (!isLoading && !filteredList) {
    setFilteredList(currentList);
  }

  const handleGenFilter = (gen: number) => {
    setCurrentGenFilter(gen);
    setSearchTerm("");
    setFilteredList(pokemonGenList[gen]);
  };

  const handleTypeFilter = (type: string) => {
    setCurrentTypeFilter(type);
  };

  const handleSearch = (search: string) => {
    setSearchTerm(search);

    if (search === "") {
      setFilteredList(currentList);
      return;
    }

    const filtered = currentList.filter((pokemon) => {
      return pokemon.name.includes(search.toLowerCase());
    });
    setFilteredList(filtered);
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
        {filteredList?.map((pokemon, index) => {
          return <PokeCard key={index} pokemon={pokemon.name} />;
        })}
      </div>
    </>
  );
}
