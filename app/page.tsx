/** @format */

import PokeCard from "./components/PokeCard";
import { getPokemonData } from "./utils/datafetch";

export default async function Home() {
  const pokemons = await getPokemonData(1);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {pokemons.map((pokemon) => {
          return <PokeCard key={pokemon.id} pokemon={pokemon} />;
        })}
      </div>
    </>
  );
}
