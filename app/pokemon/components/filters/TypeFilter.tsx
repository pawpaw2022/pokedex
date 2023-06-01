/** @format */

import React from "react";

type Props = {
  handleTypeFilter: (type: string) => void;
};

export default function TypeFilter({ handleTypeFilter }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);

  const [currentType, setCurrentType] = React.useState("All");
  const Types = [
    { name: "All", id: 0 },
    { name: "Normal", id: 1 },
    { name: "Fire", id: 2 },
    { name: "Water", id: 3 },
    { name: "Electric", id: 4 },
    { name: "Grass", id: 5 },
    { name: "Ice", id: 6 },
    { name: "Fighting", id: 7 },
    { name: "Poison", id: 8 },
    { name: "Ground", id: 9 },
    { name: "Flying", id: 10 },
    { name: "Psychic", id: 11 },
    { name: "Bug", id: 12 },
    { name: "Rock", id: 13 },
    { name: "Ghost", id: 14 },
    { name: "Dragon", id: 15 },
    { name: "Dark", id: 16 },
    { name: "Steel", id: 17 },
    { name: "Fairy", id: 18 },
  ];

  const toggle = () => setIsOpen((prev) => !prev);

  const handleClick = (Type: number) => {
    const type = Types.filter((type) => type.id === Type);
    // console.log(type[0]?.name);

    setCurrentType(type[0]?.name);
    handleTypeFilter(type[0]?.name);

    setIsOpen(false);
  };

  return (
    <>
      <div className="w-30 ml-2">
        <p className="text-center">Type</p>
        <div>
          <button
            type="button"
            onClick={toggle}
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            {currentType}
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
              {Types.map((Type) => {
                return (
                  <div
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                    onClick={() => handleClick(Type.id)}
                    key={Type.id}
                  >
                    {Type.name}
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
