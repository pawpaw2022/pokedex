/** @format */

import React from "react";
import TypeBadge from "../../components/TypeBadge";
import { displayName } from "@/app/utils/config";

type Props = {
  pokemon: Pokemon;
};

export default function BaseInfo({ pokemon }: Props) {
  return (
    <div className="flex flex-col justify-center items-center mb-8 mt-3">
      <h1 className="capitalize text-4xl tracking-wide mb-1">
        {displayName(pokemon?.name)}
      </h1>
      <p className="text-xl text-slate-500 dark:text-slate-200 mb-3">
        #{pokemon?.id}
      </p>
      <div className="flex space-x-5">
        {pokemon?.types.map((type) => {
          return <TypeBadge key={type.slot} type={type.type.name} />;
        })}
      </div>
    </div>
  );
}
