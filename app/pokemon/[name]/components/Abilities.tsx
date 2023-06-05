import React from 'react'

type Props = {
    pokemon: Pokemon;
}

export default function Abilities(  {pokemon}: Props) {
  return (
    <div>
    <h1 className="text-2xl text-slate-500 dark:text-slate-200 mb-3 mt-5">
      Abilities
    </h1>
    <div className="flex flex-wrap justify-center">
      {pokemon?.abilities.map((ability) => {
        return (
          <div
            key={ability.ability.name}
            className="bg-slate-200 dark:bg-slate-600 rounded-full px-3 py-1 m-1"
          >
            {ability.ability.name}
          </div>
        );
      })}
    </div>
  </div>
  )
}
