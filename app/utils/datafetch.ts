import { gens } from "./commons";


// export const getPokemonData = async(startId: number, amount: number): Promise<Pokemon[]> =>  {
//     let pokemons: Pokemon[] = [];
  
//     for (let i = startId; i < startId+amount; i++) {
//     // for (let i = 1; i <= 20; i++) {
//       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
//       const info: PokemonRawData = await response.json();
  
//       const id = info.id;
//       const name = info.name;
  
//       pokemons = [...pokemons, { name, id, info }];
//     }
  
//     return pokemons;
//   }
export const getPokemonData = async(gen: number): Promise<Pokemon[]> =>  {
    let pokemons: Pokemon[] = [];
  
    for (let i = gens[gen][0]; i <= gens[gen][1]; i++) {
    // for (let i = 1; i <= 20; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const info: PokemonRawData = await response.json();
  
      const id = info.id;
      const name = info.name;
  
      pokemons = [...pokemons, { name, id, info }];
    }
  
    return pokemons;
  }

export const getSinglePokemonData = async(id: number | string): Promise<Pokemon> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const info: PokemonRawData = await response.json();

    const name = info.name;

    return { name, id: info.id, info };
  }