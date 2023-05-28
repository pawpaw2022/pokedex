/** @format */

import React from "react";
import GenFilter from "./filters/GenFilter";
import TypeFilter from "./filters/TypeFilter";
import DarkModeToggle from "./filters/DarkModeToggle";

type Props = {
  handleGenFilter: (gen: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8) => void;
  handleTypeFilter: (type: string) => void;
};

export default function Filters({ handleGenFilter, handleTypeFilter }: Props) {
  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <GenFilter handleGenFilter={handleGenFilter} />
        <TypeFilter handleTypeFilter={handleTypeFilter} />
        <DarkModeToggle />
      </div>
    </>
  );
}
