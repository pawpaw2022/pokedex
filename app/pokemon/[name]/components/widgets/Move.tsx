/** @format */
"use client";
import TypeBadge from "@/app/pokemon/components/TypeBadge";
import { displayName, typeCode } from "@/app/utils/config";
import { useSingleMove } from "@/app/utils/datafetch";
import React from "react";
import MiniTypeBadge from "./MiniTypeBadge";
import MoveSkeleton from "./MoveSkeleton";

type Props = {
  move: {
    name: string;
    url: string;
  };
};

export default function Move({ move }: Props) {
  const { data: moveData, isLoading } = useSingleMove(move);

  const bgColor =
    typeCode.find((t) => t.name.toLowerCase() === moveData?.type.name)?.color +
    "30";

  if (isLoading) return <MoveSkeleton />;
  
  return (
    <div
      className="border-2 border-solid border-gray-400 dark:border-gray-700
    bg-slate-300 dark:bg-slate-700 rounded-lg shadow-lg px-2 py-2.5 m-2 hover:scale-105 transition duration-300 ease-in-out"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex justify-center items-center text-center">
        <h1 className="capitalize text-sm md:text-md lg:text-lg text-gray-800 dark:text-slate-200 my-1.5">
          {displayName(move.name)}
        </h1>
        <MiniTypeBadge name={moveData?.type.name} />
      </div>

      <div className="mt-2">
        <div className="md:w-[80%] mx-auto flex justify-between">
          <div className="w-[50%] ">
            <p>
              <span className="capitalize text-gray-800 dark:text-slate-200">
                {moveData?.damage_class.name}
              </span>
            </p>
            <p>
              <span className="text-slate-500 dark:text-slate-200">Dmg: </span>
              <span className="capitalize text-gray-800 dark:text-slate-200">
                {moveData?.power ? moveData?.power : "--"}
              </span>
            </p>
          </div>
          <div className="">
            <p>
              <span className="text-slate-500 dark:text-slate-200">
                Acc:{" "}
              </span>
              <span className="capitalize text-gray-800 dark:text-slate-200">
                {moveData?.accuracy ? moveData?.accuracy : "--"}
              </span>
            </p>
            <p>
              <span className="text-slate-500 dark:text-slate-200">PP: </span>
              <span className="capitalize text-gray-800 dark:text-slate-200">
                {moveData?.pp}
              </span>
            </p>
          </div>
        </div>
        <p className="text-slate-500 dark:text-slate-400 mb-2 text-center">
          {moveData?.effect_entries[0]?.short_effect.replace(
            "$effect_chance",
            moveData?.effect_chance ? moveData?.effect_chance.toString() : "0"
          )}
        </p>
      </div>
    </div>
  );
}
