/** @format */

import React from "react";
import Move from "./widgets/Move";

type Props = {
  moves: {
    name: string;
    url: string;
  }[];
};

export default function Moves({ moves }: Props) {
  return (
    <div>
      <h1 className="text-2xl text-slate-800 dark:text-slate-200 mb-3 mt-5">
        Moves
      </h1>

      <div className="grid grid-cols-2">
        {moves.map((move) => {
          return <Move key={move.name} move={move} />;
        })}
      </div>
    </div>
  );
}
