/** @format */
"use client";
import React from "react";

type Props = {
  handleGenFilter: (gen: number) => void;
  currentGenFilter: number;
  setCurrentGenFilter: (type: number) => void;
};

export default function GenFilter({ handleGenFilter,  currentGenFilter, setCurrentGenFilter}: Props) {
  const [isOpen, setIsOpen] = React.useState(false);

  const gens = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const toggle = () => setIsOpen((prev) => !prev);

  const handleClick = (gen: number) => {
    setCurrentGenFilter(gen);

    handleGenFilter(gen);

    setIsOpen(false);
  };

  return (
    <>
      <div className="w-30 md:hidden">
        <p className="text-center">Generation</p>
        <div>
          <button
            type="button"
            onClick={toggle}
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            {currentGenFilter === 0 ? "All" : `${currentGenFilter}`}
            <svg
              className="-mr-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="rounded-md bg-white shadow-lg ring-1 ring-black  ring-opacity-5 focus:outline-none ">
            <div className="py-1">
              {gens.map((gen) => {
                return (
                  <div
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                    onClick={() => handleClick(gen)}
                    key={gen}
                  >
                    {gen === 0 ? "All" : ` ${gen}`}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
