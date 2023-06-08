/** @format */

import { useQuery } from "@tanstack/react-query";
import { typeCode } from "./config";

export const fetchPokemon = async (id: number | string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();

  return data as Pokemon;
};

export const fetchSpecies = async (pokemon: Pokemon) => {
  const response = await fetch(pokemon.species.url);
  const data = await response.json();

  return data as PokemonSpecies;
};

export const fetchType = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();

  return data as Type;
};

export const findVariety = async (pokemon: Pokemon) => {
  const response = await fetchSpecies(pokemon);

  const nameList = response.varieties.map((variety) => {
    return {
      name: variety.pokemon.name,
      id: parseInt(variety.pokemon.url.split("/")[6]),
      is_default: variety.is_default,
    };
  });

  return nameList;
};

export const fetchEvolutionChain = async (pokemon: Pokemon) => {
  const response = await fetchSpecies(pokemon);
  const data = await fetch(response.evolution_chain.url);
  const evolutionChain: EvolutionChain = await data.json();

  return evolutionChain;
};

export const fetchRelationship = async (pokemon : Pokemon) => {
  // find weaknes and resistance
  const types = pokemon.types.map((type) => type.type.url);
  
  const typesData = await Promise.all(types.map((url) => fetchType(url)));  
  const weakness = typesData.map((type) => type.damage_relations.double_damage_from);
  const resistance = typesData.map((type) => type.damage_relations.half_damage_from);
  const immunes = typesData.map((type) => type.damage_relations.no_damage_from);

  const typeAllRelations = {
    'normal': 0,
    'fighting': 0,
    'flying': 0,
    'poison': 0,
    'ground': 0,
    'rock': 0,
    'bug': 0,
    'ghost': 0,
    'steel': 0,
    'fire': 0,
    'water': 0,
    'grass': 0,
    'electric': 0,
    'psychic': 0,
    'ice': 0,
    'dragon': 0,
    'dark': 0,
    'fairy': 0,
  } 

  immunes.forEach((type) => {
    type.forEach((t) => {
      typeAllRelations[t.name] = -100;
    })
  })

  weakness.forEach((type) => {
    type.forEach((t) => {
      typeAllRelations[t.name] += 1;
    })
  })

  resistance.forEach((type) => {
    type.forEach((t) => {
      typeAllRelations[t.name] -= 1;
    })
  })

  const typeRelation = {
    weakness: {
      1: [],
      2: [],
    },
    resistance: {
      0: [],
      1: [],
      2: [],
    },
  }

  typeRelation.weakness[1] = Object.keys(typeAllRelations).filter((type) => typeAllRelations[type] === 1);
  typeRelation.weakness[2] = Object.keys(typeAllRelations).filter((type) => typeAllRelations[type] === 2);
  typeRelation.resistance[0] = Object.keys(typeAllRelations).filter((type) => typeAllRelations[type] <= -5);
  typeRelation.resistance[1] = Object.keys(typeAllRelations).filter((type) => typeAllRelations[type] === -1);
  typeRelation.resistance[2] = Object.keys(typeAllRelations).filter((type) => typeAllRelations[type] === -2);

  return typeRelation;
}

export const findName = (input: string) => {
  if (input.includes("pumpkaboo")) {
    return "pumpkaboo-average";
  } else if (input.includes("gourgeist")) {
    return "gourgeist-average";
  } else if (input.includes("deoxys")) {
    return "deoxys-normal";
  } else if (input.includes("keldeo")) {
    return "keldeo-ordinary";
  } else if (input.includes("meloetta")) {
    return "meloetta-aria";
  } else if (input.includes("thundurus")) {
    return "thundurus-incarnate";
  } else if (input.includes("tornadus")) {
    return "tornadus-incarnate";
  } else if (input.includes("enamorus")) {
    return "landorus-incarnate";
  } else if (input.includes("landorus")) {
    return "landorus-incarnate";
  } else if (input.includes("zygarde")) {
    return "zygarde-50";
  } else if (input.includes("minior")) {
    return "minior-red-meteor";
  } else if (input.includes("mimikyu")) {
    return "mimikyu-disguised";
  } else if (input.includes("eiscue")) {
    return "eiscue-ice";
  } else if (input.includes("indeedee")) {
    return "indeedee-male";
  } else if (input.includes("morpeko")) {
    return "morpeko-full-belly";
  } else if (input.includes("urshifu")) {
    return "urshifu-single-strike";
  } else if (input.includes("giratina")) {
    return "giratina-altered";
  } else if (input.includes("shaymin")) {
    return "shaymin-land";
  } else if (input.includes("wormadam")) {
    return "wormadam-plant";
  } else if (input.includes("basculin")) {
    return "basculin-red-striped";
  } else if (input.includes("darmanitan")) {
    return "darmanitan-standard";
  } else if (input.includes("basculegion")) {
    return "basculegion-male";
  } else if (input.includes("basculin")) {
    return "basculin-red-striped";
  } else if (input.includes("meowstic")) {
    return "meowstic-male";
  } else if (input.includes("wishiwashi")) {
    return "wishiwashi-solo";
  } else if (input.includes("toxtricity")) {
    return "toxtricity-amped";
  } else if (input.includes("zacian")) {
    return "zacian-hero";
  } else if (input.includes("zamazenta")) {
    return "zamazenta-hero";
  } else if (input.includes("calyrex")) {
    return "calyrex-ice";
  } else if (input.includes("glastrier")) {
    return "glastrier-ice";
  } else if (input.includes("spectrier")) {
    return "spectrier-ice";
  } else if (input.includes("urshifu")) {
    return "urshifu-single-strike";
  } else if (input.includes("giratina")) {
    return "giratina-altered";
  } else if (input.includes("shaymin")) {
    return "shaymin-land";
  } else if (input.includes("wormadam")) {
    return "wormadam-plant";
  } else if (input.includes("basculin")) {
    return "basculin-red-striped";
  } else if (input.includes("darmanitan")) {
    return "darmanitan-standard";
  } 
  
  else {
    return input;
  }
};

export const excludeVariety = (name: string) => {
  const list = [
    "mimikyu-totem-disguised",
    "mimikyu-totem-busted",
    "togedemaru-totem",
  ];

  return (
    !list.includes(name) &&
    !name.includes("minior") &&
    !name.includes("-gmax") &&
    !name.includes("-alola") &&
    !name.includes("-galar") &&
    !name.includes("-hisui") &&
    !name.includes("-eternamax") &&
    !name.includes("pikachu-") &&
    !name.includes("-starter") &&
    !name.includes("-partner") &&
    !name.includes("-power-construct") 
    
  );
};

export const findAllFamilyVariety = async(chainData: EvolutionChain) => {
  try{
  const evolutionChain = await fetchEvolutionPokemon(chainData);

  // evolutionChain.forEach((evolution) => {
  //   console.log(evolution.species);
  // });
    
  
  const chainName = evolutionChain.map((evolution) => {
    return {
      name: findName(evolution.species.name),
      id: parseInt(evolution.species.url.split("/")[6]),
    };
  });

  console.log(chainName);
  

  const family = await Promise.all(
    chainName.map(async (p) => {
      return await fetchPokemon(p.name);
    })
  );

  const varities = await Promise.all(
    family.map(async (p) => {
      return await findVariety(p);
    })
  );

  return varities;
  }catch(err){
    console.log(err)
  }
}

export const fetchEvolutionPokemon = async (evolutionChain: EvolutionChain) => {
  const chain = evolutionChain.chain;

  let nameList: string[] = [];

  nameList.push(findName(chain.species.name));

  if (evolutionChain)
    if (chain.evolves_to.length === 0) return await fetchChainPokemon(nameList);

  chain.evolves_to.forEach((evolves_to) => {
    const stage2 = evolves_to.species.name;
    nameList.push(findName(stage2));

    if (evolves_to.evolves_to) {
      evolves_to.evolves_to.forEach(async (evolves_to) => {
        const stage3 = evolves_to.species.name;
        nameList.push(findName(stage3));
      });
    }
  });

  console.log(nameList);
  
  const results = await fetchChainPokemon(nameList);

  return results;
};

const fetchChainPokemon = async (nameList: string[]) => {
  const results: Pokemon[] = [];

  for (let i = 0; i < nameList.length; i++) {
    const pokemon = await fetchPokemon(nameList[i]);
    results.push(pokemon);
  }
  return results;
};

export const fetchAbilities = async (pokemon: Pokemon) => {
  const abilities = pokemon.abilities.map((ability) => {
    return ability.ability.url;
  });

  const data = await Promise.all(
    abilities.map(async (url) => {
      const response = await fetch(url);
      const data: Ability = await response.json();
      return data;
    })
  );

  const results = data.map((ability) => {
    let effect = "";
    if (ability.effect_entries.find((e) => e.language.name === "en")) {
      if (
        ability.effect_entries.find((e) => e.language.name === "en")
          .short_effect
      ) {
        effect = ability.effect_entries.find(
          (e) => e.language.name === "en"
        ).short_effect;
      } else {
        effect = ability.effect_entries.find(
          (e) => e.language.name === "en"
        ).effect;
      }
    }

    return {
      name: ability.name,
      effect: effect,
      hidden: pokemon.abilities.find((a) => a.ability.name === ability.name)
        .is_hidden,
    };
  });
  return results;
};

export const fetchMoves = (pokemon: Pokemon) => {
  const moves = pokemon.moves.map((move) => {
    return {
      name: move.move.name,
      url: move.move.url,
    };
  });

  return moves;
};

export const useSingleMove = (move: { name: string; url: string }) => {
  const queryFn = async () => {
    const response = await fetch(move.url);
    const data: Move = await response.json();

    return data as Move;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["move", move.name],
    queryFn,
    staleTime: 1000 * 60 * 60 * 24 * 7, // 1 week
  });

  return { data, isLoading, isError };
};

export const usePokemon = (id: number | string) => {
  const queryFn = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data: Pokemon = await response.json();

    return data as Pokemon;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemon", id],
    queryFn,
    staleTime: 1000 * 60 * 60 * 24 * 7, // 1 week
  });

  return { data, isLoading, isError };
};

export const useAllPokemonList = () => {
  const queryFn = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=2000"
    );
    const data: PokemonList = await response.json();

    return data as PokemonList;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemonList"],
    queryFn,
    staleTime: 1000 * 60 * 60 * 24 * 7, // 1 week
  });

  return { data, isLoading, isError };
};

export const useAllTypes = async() => {
  const allTypes = {} as AllTypes;

  for (let i = 1; i <= 18; i++) {
    const fid = typeCode.find((_, j) => j === i).fid;

    const response = await fetch(`https://pokeapi.co/api/v2/type/${fid}`)
    const data = await response.json();

    const type = typeCode.find((_, j) => j === i);

    allTypes[type.name] = data;
  }



  return  allTypes;
};
