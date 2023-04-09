/** @format */

import { Inter } from "next/font/google";
import styles from "./page.module.scss";
import PokeCard from "./components/PokeCard";

const inter = Inter({ subsets: ["latin"] });

const gens = {
  1: [1, 151],
  2: [152, 251],
  3: [252, 386],
  4: [387, 493],
  5: [494, 649],
  6: [650, 721],
  7: [722, 809],
  8: [810, 898],
};
  

async function getData(gen: number): Promise<Pokemon[]> {
  let allPokemon: Pokemon[] = [];  

  for (let i = gens[gen][0]; i <= gens[gen][1]; i++) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const info: PokemonRawData = await response.json();

    const id = info.id;
    const name = info.name;

    allPokemon = [...allPokemon, { name, id, info }];
  }

  return allPokemon;
}

export default async function Home() {
  const allPokemon = await getData(1);

  return (
    <main className={styles.main}>
      <p className="bold text-xl bg-red-700" >Hello tailwind</p>
      <div className={styles.grid}>
        {allPokemon.map((pokemon) => {
          return <PokeCard key={pokemon.id} pokemon={pokemon} />;
        })}
      </div>
    </main>
  );
}
