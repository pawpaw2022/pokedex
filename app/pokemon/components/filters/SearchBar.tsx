/** @format */

import React from "react";


type Props = {
    handleSearch: (search: string) => void;
    searchTerm: string;
    setSearchTerm: (search: string) => void;
};

export default function SearchBar( {handleSearch, searchTerm, setSearchTerm}: Props) {

    React.useEffect(() => {
        handleSearch(searchTerm);
    }, [searchTerm]);

  return (
    <>
      <div className="ml-4">
        <p className="text-center">Search</p>
        <input
          className="rounded-md bg-white px-2 py-1.5 shadow-lg ring-1 ring-black  ring-opacity-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-300 dark:text-black"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </>
  );
}
