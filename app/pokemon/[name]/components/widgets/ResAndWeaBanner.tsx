/** @format */

import React from "react";
import MiniTypeBadge from "./MiniTypeBadge";

type Props = {
  relationship: string[];
  muliplier: string;
};

export default function ResAndWeaBanner({ relationship, muliplier }: Props) {
  return (
    <div className="flex items-center h-10">
      <h1 className="text-lg text-slate-600 dark:text-slate-400 w-10 ">
        x{muliplier}
      </h1>
      {relationship.map((type) => {
        return (
          <div key={type} className="w-10 lg:mr-2">
            <MiniTypeBadge name={type} />
          </div>
        );
      })}
    </div>
  );
}
