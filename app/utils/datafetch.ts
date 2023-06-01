import { gens } from "./commons";


export const getPokemonData = async(gen: number): Promise<PokemonData[]> =>  {
    let pokemons: PokemonData[] = [];
  
    for (let i = gens[gen][0]; i <= gens[gen][1]; i++) {
    // for (let i = 1; i <= 20; i++) {
      try{
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      if (response.status !== 200) {
        break;
      }

      const info: PokemonData = await response.json();
        
      if (info.sprites.front_default === null) {
        continue;
      }
      pokemons = [...pokemons, info];
      } catch (e) {
        console.log(e);
      }
    }
  
    return pokemons;
  }

export const getSinglePokemonData = async(id: number | string): Promise<PokemonData> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data: PokemonData = await response.json();
    return data;
  }