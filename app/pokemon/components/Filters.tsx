/** @format */
'use client'
import React from "react";

import DarkModeToggle from "./filters/DarkModeToggle";
import SearchBar from "./filters/SearchBar";
import GenFilter from './filters/GenFilter';
import TypeFilter from "./filters/TypeFilter";

type Props = {
  handleGenFilter: (gen: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8) => void;
  handleTypeFilter: (type: string) => void;
  handleSearch: (search: string) => void;
  searchTerm: string;
  setSearchTerm: (search: string) => void;
};

export default function Filters({ handleGenFilter, handleTypeFilter, handleSearch, searchTerm, setSearchTerm}: Props) {
  return (
    <>
      <div className="flex flex-row justify-center items-center mb-4">
        <GenFilter handleGenFilter={handleGenFilter} />
        <TypeFilter handleTypeFilter={handleTypeFilter} />
        <SearchBar handleSearch={handleSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <DarkModeToggle />
      </div>
    </>
  );
}
