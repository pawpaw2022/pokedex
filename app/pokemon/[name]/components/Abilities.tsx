/** @format */

import { displayName } from "@/app/utils/config";
import React from "react";

type Props = {
  abilities: {
    name: string;
    effect: string;
    hidden: boolean;
  }[];
};

export default function Abilities({ abilities }: Props) {
  return (
    <div>
      <h1 className="text-2xl text-slate-800 dark:text-slate-200 mb-3 mt-5">
        Abilities
      </h1>
      <div className="flex flex-col">
        {abilities.map((ability) => {
          return (
            <div
              key={ability.name}
              className="flex flex-col justify-center border-2 border-solid border-gray-400 dark:border-gray-700
            bg-slate-300 dark:bg-slate-700 rounded-lg shadow-lg px-2 py-2.5 m-2 hover:scale-105 transition duration-300 ease-in-out"
            >
              <h1 className="capitalize text-xl text-gray-800 dark:text-slate-200 mb-3">
                {displayName(ability.name)}
                <span className="text-slate-500">
                  {ability.hidden && " - hidden"}
                </span>
              </h1>
              <p className="text-slate-500 dark:text-slate-200 mb-2">
                {ability.effect}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
