/** @format */

import { typeCode } from "@/app/utils/config";
import React from "react";

type Props = {
  handleTypeFilter: (type: string) => void;
  currentTypeFilter: string;
  setCurrentTypeFilter: (type: string) => void;
};

export default function TypeFilter({ handleTypeFilter, currentTypeFilter, setCurrentTypeFilter }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  const handleClick = (id: number) => {
    const type = typeCode.filter((t) => t.id === id)[0]["name"];    

    setCurrentTypeFilter(type);
    handleTypeFilter(type);

    setIsOpen(false);
  };

  return (
    <>
      <div className="w-30 ml-2 md:hidden">
        <p className="text-center">Type</p>
        <div>
          <button
            type="button"
            onClick={toggle}
            className="inline-flex capitalize w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            {currentTypeFilter}
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
              {typeCode.map((type) => {
                return (
                  <div
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                    onClick={() => handleClick(type.id)}
                    key={type.id}
                  >
                    {type.name}
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