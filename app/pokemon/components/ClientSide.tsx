/** @format */
"use client";
import React from "react";
import Filters from "./Filters";
import PokeCard from "./PokeCard";
import { getPokemonData } from "@/app/utils/datafetch";
import PokeCardSkeleton from "./PokeCardSkeleton";

type Props = {
  pokemons: Pokemon[];
  gen: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
};

export default function ClientSide({ pokemons, gen }: Props) {
  const [data, setData] = React.useState(pokemons);
  const [currentGen, setCurrentGen] = React.useState(gen);
  const [isLoading, setIsLoading] = React.useState(false);

  // client side fetch new data
  React.useEffect(() => {
    const fetchData = async () => {
      const res = await getPokemonData(currentGen);
      setData(res);
    };

    setIsLoading(true);
    fetchData();
    setIsLoading(false);

    console.log("fetching data", currentGen);
  }, [currentGen]);

  const handleGen = (gen: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8) => {
    setCurrentGen(gen);
  };

  return (
    <>
      <Filters handleGen={handleGen} />

      {isLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {Array(100)
            .fill(0)
            .map((_, i) => (
              <PokeCardSkeleton key={i} />
            ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {data.map((pokemon) => {
            return <PokeCard key={pokemon.id} pokemon={pokemon} gen={gen} />;
            // return <PokeCardSkeleton />;
          })}
        </div>
      )}
    </>
  );
}
