/** @format */
"use client";
import React, { useState } from "react";
import Filters from "./Filters";
import PokeCard from "./PokeCard";
import { useAllPokemonList } from "@/app/utils/datafetch";
import GenSideBar from "./filters/GenSideBar";
import TypeSideBar from "./filters/TypeSideBar";

type Prop = {
  gen: number;
  allTypes: any;
};

export default function ClientSide({ gen, allTypes }: Prop) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentGenFilter, setCurrentGenFilter] = useState(gen);
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
    8: allData?.results.slice(809, 905),
    9: allData?.results.slice(905, 1010),
  };

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

    const filteredTypeList = mutingList?.filter((pokemon) => {
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

  const handleScroll = () => {
    if (
      typeof window !== "undefined" &&
      localStorage &&
      localStorage.getItem("scroll")
    ) {
      const scroll = localStorage.getItem("scroll");
      window.scrollTo(0, parseInt(scroll));
      localStorage.removeItem("scroll");
    }
  };

  handleScroll();

  return (
    <>
      <div className="md:flex justify-center md:w-[90%] mx-auto">
        <GenSideBar
          handleGenFilter={handleGenFilter}
          currentGenFilter={currentGenFilter}
          setCurrentGenFilter={setCurrentGenFilter}
        />
        <div
          className="md:p-4 rounded-lg shadow-lg border-2 border-solid border-gray-400 dark:border-gray-700
           bg-slate-300 dark:bg-slate-700"
        >
          <Filters
            handleGenFilter={handleGenFilter}
            handleTypeFilter={handleTypeFilter}
            handleSearch={handleSearch}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            currentGenFilter={currentGenFilter}
            setCurrentGenFilter={setCurrentGenFilter}
            currentTypeFilter={currentTypeFilter}
            setCurrentTypeFilter={setCurrentTypeFilter}
          />
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredList?.map((pokemon, index) => {
              return (
                <PokeCard
                  key={index}
                  pokemon={pokemon.name}
                  typeFilter={currentTypeFilter}
                />
              );
            })}
          </div>
          {filteredList?.length === 0 && (
            <div className="flex flex-col justify-center items-center lg:w-[700px] xl:w-[980px] mt-6">
              <h1 className="text-2xl font-bold uppercase">No pokemon found</h1>
            </div>
          )}
        </div>

        <TypeSideBar
          handleTypeFilter={handleTypeFilter}
          currentTypeFilter={currentTypeFilter}
          setCurrentTypeFilter={setCurrentTypeFilter}
        />
      </div>
    </>
  );
}
