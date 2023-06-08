/** @format */
'use client'
import React from "react";

import DarkModeToggle from "./filters/DarkModeToggle";
import SearchBar from "./filters/SearchBar";
import GenFilter from './filters/GenFilter';
import TypeFilter from "./filters/TypeFilter";

type Props = {
  handleGenFilter: (gen: number) => void;
  handleTypeFilter: (type: string) => void;
  handleSearch: (search: string) => void;
  searchTerm: string;
  setSearchTerm: (search: string) => void;
  currentGenFilter: number;
  currentTypeFilter: string;
  setCurrentGenFilter: (type: number) => void;
  setCurrentTypeFilter: (type: string) => void;
};

export default function Filters({ handleGenFilter, handleTypeFilter, handleSearch, searchTerm, setSearchTerm, currentGenFilter, currentTypeFilter, setCurrentGenFilter, setCurrentTypeFilter}: Props) {
  return (
    <>
      <div className="flex flex-row justify-center items-center my-4">
        <GenFilter handleGenFilter={handleGenFilter} currentGenFilter={currentGenFilter} setCurrentGenFilter={setCurrentGenFilter}  />
        <TypeFilter handleTypeFilter={handleTypeFilter} currentTypeFilter={currentTypeFilter} setCurrentTypeFilter={setCurrentTypeFilter} />
        <SearchBar handleSearch={handleSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <DarkModeToggle />
      </div>
    </>
  );
}
