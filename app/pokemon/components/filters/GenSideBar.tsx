/** @format */

import React, { useEffect, useRef, useState } from "react";

type Props = {
  handleGenFilter: (gen: number) => void;
  setCurrentGenFilter: (gen: number) => void;
  currentGenFilter: number;
};

export default function GenSideBar({ handleGenFilter, setCurrentGenFilter,  currentGenFilter}: Props) {
  const gens = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const handleClick = (gen: number) => {
    setCurrentGenFilter(gen);
    handleGenFilter(gen);
  };

  return (
    <aside className="hidden md:block">
    <div className="flex list-none flex-col flex-wrap pl-0 mt-8 sticky top-0 h-screen">
      <div className="flex-grow text-center">
        {gens.map((gen) => {
          return (
            <div
              className={`${gen === currentGenFilter ? 'bg-indigo-400' : 'bg-indigo-200'} my-2 w-20 border-x-0 border-b-2 border-t-0 border-transparent 
              px-5 pb-3.5 pt-4 text-xs uppercase hover:bg-indigo-400 cursor-pointer rounded-l-lg`}
            
              onClick={() => handleClick(gen)}
              key={gen}
            >
              Gen {gen}
            </div>
          );
        })}
      </div>
    </div>
    </aside>
  );
}
