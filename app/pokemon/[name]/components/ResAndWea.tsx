/** @format */

import React from "react";
import MiniTypeBadge from "./widgets/MiniTypeBadge";

type Props = {
  typeRelation: {
    weakness: {
      1: string[];
      2: string[];
    };
    resistance: {
      0: string[];
      1: string[];
      2: string[];
    };
  };
};

export default function ResAndWea({ typeRelation }: Props) {
  return (
    <>
      <div>
        <h1 className="text-2xl text-slate-800 dark:text-slate-200 mb-3 mt-5">
          Resistance
        </h1>
        <div>
          <h1 className="text-2xl text-slate-800 dark:text-slate-200 mb-3 mt-5">
            0x
          </h1>
          {typeRelation.resistance[0].map((type) => {
            return (
              <div
                key={type}
                className="flex flex-col justify-center border-2 border-solid border-gray-400 dark:border-gray-700
                bg-slate-300 dark:bg-slate-700 rounded-lg shadow-lg px-2 py-2.5 m-2 hover:scale-105 transition duration-300 ease-in-out"
              >
                <MiniTypeBadge name={type} />
              </div>
            );
          })}
        </div>
        <div>
          <h1 className="text-2xl text-slate-800 dark:text-slate-200 mb-3 mt-5">
            2x
          </h1>
          {typeRelation.resistance[1].map((type) => {
            return (
              <div
                key={type}
                className="flex flex-col justify-center border-2 border-solid border-gray-400 dark:border-gray-700
                bg-slate-300 dark:bg-slate-700 rounded-lg shadow-lg px-2 py-2.5 m-2 hover:scale-105 transition duration-300 ease-in-out"
              >
                <MiniTypeBadge name={type} />
              </div>
            );
          })}
        </div>
        <div>
          <h1 className="text-2xl text-slate-800 dark:text-slate-200 mb-3 mt-5">
            4x
          </h1>
          {typeRelation.resistance[2].map((type) => {
            return (
              <div
                key={type}
                className="flex flex-col justify-center border-2 border-solid border-gray-400 dark:border-gray-700
                bg-slate-300 dark:bg-slate-700 rounded-lg shadow-lg px-2 py-2.5 m-2 hover:scale-105 transition duration-300 ease-in-out"
              >
                <MiniTypeBadge name={type} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="text-2xl text-slate-800 dark:text-slate-200 mb-3 mt-5">
          Weakness
        </h1>
        <div>
          <h1 className="text-2xl text-slate-800 dark:text-slate-200 mb-3 mt-5">
            2x
          </h1>
          {typeRelation.weakness[1].map((type) => {
            return (
              <div
                key={type}
                className="flex flex-col justify-center border-2 border-solid border-gray-400 dark:border-gray-700
                bg-slate-300 dark:bg-slate-700 rounded-lg shadow-lg px-2 py-2.5 m-2 hover:scale-105 transition duration-300 ease-in-out"
              >
                <MiniTypeBadge name={type} />
              </div>
            );
          })}
        </div>
        <div>
          <h1 className="text-2xl text-slate-800 dark:text-slate-200 mb-3 mt-5">
            4x
          </h1>
          {typeRelation.weakness[2].map((type) => {
            return (
              <div
                key={type}
                className="flex flex-col justify-center border-2 border-solid border-gray-400 dark:border-gray-700
                bg-slate-300 dark:bg-slate-700 rounded-lg shadow-lg px-2 py-2.5 m-2 hover:scale-105 transition duration-300 ease-in-out"
              >
                <MiniTypeBadge name={type} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
