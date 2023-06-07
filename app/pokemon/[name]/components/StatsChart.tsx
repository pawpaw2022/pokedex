import Image from 'next/image';
import React from 'react'
import Stats from './widgets/Stats';
import { getPictureUrl } from '@/app/utils/config';

type Props = {
    pokemon: Pokemon;
}

export default function StatsChart( {pokemon}: Props) {
  return (
    <div className="flex">
    <div className="mr-5">
      <Image
        src={getPictureUrl(pokemon?.name)}
        alt={pokemon?.name}
        height={300}
        width={300}
      />
    </div>
    <div className="w-32 ml-5 flex flex-col justify-center">
      {pokemon?.stats.map((stat) => {
        return (
          <Stats
            name={stat.stat.name}
            base_stat={stat.base_stat}
            key={stat.stat.name}
          />
        );
      })}
      <Stats
        name="Total"
        base_stat={pokemon?.stats.reduce(
          (acc, stat) => acc + stat.base_stat,
          0
        )}
      />
    </div>

    

  </div>
  )
}
