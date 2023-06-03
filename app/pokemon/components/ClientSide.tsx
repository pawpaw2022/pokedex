/** @format */
"use client";
import React, { useState } from "react";
import Filters from "./Filters";
import PokeCard from "./PokeCard";
import { useAllPokemonList, useAllTypes } from "@/app/utils/datafetch";

export default function ClientSide() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentGenFilter, setCurrentGenFilter] = useState(1);
  const [currentTypeFilter, setCurrentTypeFilter] = useState("all");

  // get all pokemon data
  const { data: allData, isLoading: isAllDataLoading } = useAllPokemonList();
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

  // get all types
  const { data: allTypes } = useAllTypes();

  const currentList: CurrentList = pokemonGenList[currentGenFilter];
  const [filteredList, setFilteredList] = useState<CurrentList>([]);
  const [filteredTypeList, setFilteredTypeList] = useState<CurrentList>([]);

  if (!isAllDataLoading && !filteredList) {
    setFilteredList(currentList);
    setFilteredTypeList(currentList);
  }

  const handleGenFilter = (gen: number) => {
    setCurrentGenFilter(gen);
    setSearchTerm("");
    setFilteredList(pokemonGenList[gen]);
    setFilteredTypeList(pokemonGenList[gen]);

    if (currentTypeFilter !== "all") {
      handleTypeFilter(currentTypeFilter, pokemonGenList[gen]);
    }
  };

  const handleTypeFilter = (
    type: string,
    mutingList: CurrentList = currentList
  ) => {
    setCurrentTypeFilter(type);
    setSearchTerm("");

    if (type.toLowerCase() === "all") {
      setFilteredList(mutingList);
      setFilteredTypeList(mutingList);
      return;
    }
    const filtered = allTypes[type]?.["pokemon"].map((p) => p.pokemon);

    const filteredTypeList = mutingList.filter((pokemon) => {
      return filtered?.some((p) => p.name === pokemon.name);
    });
    setFilteredList(filteredTypeList);
    setFilteredTypeList(filteredTypeList);
  };

  const handleSearch = (search: string) => {
    setSearchTerm(search);

    if (search === "") {
      if (currentTypeFilter !== "all") {
        setFilteredList(filteredTypeList);
      } else {
        setFilteredList(currentList);
      }
      return;
    }
    const filtered = filteredTypeList.filter((pokemon) => {
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
