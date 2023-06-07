/** @format */

type Pokemon = {
  abilities: {
    ability: { name: string; url: string };
    is_hidden: boolean;
    slot: number;
  }[];
  base_experience: number;
  form: { name: string; url: string }[];
  game_indices: {
    game_index: number;
    version: { name: string; url: string };
  }[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: {
    move: { name: string; url: string };
    version_group_details: {
      level_learned_at: number;
      move_learn_method: { name: string; url: string };
      version_group: { name: string; url: string };
    }[];
  }[];
  name: string;
  order: number;
  species: { name: string; url: string };
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_felmale: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: { name: string; url: string };
  }[];
  types: {
    slot: number;
    type: { name: string; url: string };
  }[];
  weight: number;
};

type PokemonList = {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
};

type Type = {
  damage_relations: {
    double_damage_from: {
      name: string;
      url: string;
    }[];
    double_damage_to: {
      name: string;
      url: string;
    }[];
    half_damage_from: {
      name: string;
      url: string;
    }[];
    half_damage_to: {
      name: string;
      url: string;
    }[];
    no_damage_from: {
      name: string;
      url: string;
    }[];
    no_damage_to: {
      name: string;
      url: string;
    }[];
  };
  game_indices: {
    game_index: number;
    generation: {
      name: string;
      url: string;
    };
  }[];
  generation: {
    name: string;
    url: string;
  };
  id: number;
  move_damage_class: {
    name: string;
    url: string;
  };
  moves: {
    name: string;
    url: string;
  }[];
  name: string;
  names: {
    language: {
      name: string;
      url: string;
    };
    name: string;
  }[];
  pokemon: {
    pokemon: {
      name: string;
      url: string;
    };
    slot: number;
  }[];
};

type AllTypes = {
  normal: Type;
  fighting: Type;
  flying: Type;
  poison: Type;
  ground: Type;
  rock: Type;
  bug: Type;
  ghost: Type;
  steel: Type;
  fire: Type;
  water: Type;
  grass: Type;
  electric: Type;
  psychic: Type;
  ice: Type;
  dragon: Type;
  dark: Type;
  fairy: Type;
};

type CurrentList = {
  name: string;
  url: string;
}[];

type PokemonSpecies = {
  base_happiness: number;
  capture_rate: number;
  color: {
    name: string;
    url: string;
  };
  egg_groups: {
    name: string;
    url: string;
  }[];
  evolution_chain: {
    url: string;
  };
  evolves_from_species: {
    name: string;
    url: string;
  };

  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
    };
    version: {
      name: string;
      url: string;
    };
  }[];
  form_descriptions: {
    description: string;
    language: {
      name: string;
      url: string;
    };
  }[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: {
    genus: string;
    language: {
      name: string;
      url: string;
    };
  }[];
  generation: {
    name: string;
    url: string;
  };
  growth_rate: {
    name: string;
    url: string;
  };
  habitat: {
    name: string;
    url: string;
  };
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
    };
    name: string;
  }[];
  order: number;
  pal_park_encounters: {
    area: {
      name: string;
      url: string;
    };
    base_score: number;
    rate: number;
  }[];
  pokedex_numbers: {
    entry_number: number;
    pokedex: {
      name: string;
      url: string;
    };
  }[];
  shape: {
    name: string;
    url: string;
  };
  varieties: {
    is_default: boolean;
    pokemon: {
      name: string;
      url: string;
    };
  }[];
};

type EvolutionChain = {
  baby_trigger_item: null;
  chain: {
    evolution_details: {};
    evolves_to: {
      evolution_details: {};
      evolves_to: any[];
      is_baby: boolean;
      species: {
        name: string;
        url: string;
      };
    }[];
    is_baby: boolean;
    species: {
      name: string;
      url: string;
    };
  };
  id: number;
};

type Evolves_to = {
  evolution_details: {};
  evolves_to: {};
  is_baby: boolean;
  species: {
    name: string;
    url: string;
  };
};

type Ability = {
  effect_changes: {
    effect_entries: {
      effect: string;
      language: {
        name: string;
        url: string;
      };
    }[];
    version_group: {
      name: string;
      url: string;
    };
  }[];
  effect_entries: {
    effect: string;
    language: {
      name: string;
      url: string;
    };
    short_effect: string;
  }[];
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
    };
    version_group: {
      name: string;
      url: string;
    };
  }[];
  generation: {
    name: string;
    url: string;
  };
  id: number;
  is_main_series: boolean;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
    };
    name: string;
  }[];
  pokemon: {
    is_hidden: boolean;
    pokemon: {
      name: string;
      url: string;
    };
    slot: number;
  }[];
};

type Move = {
  accuracy: number;
  contest_combos: {
    normal: {
      use_after: {
        name: string;
        url: string;
      }[];
      use_before: {
        name: string;
        url: string;
      }[];
    };
    super: {
      use_after: {
        name: string;
        url: string;
      }[];
      use_before: {
        name: string;
        url: string;
      }[];
    };
  };
  contest_effect: {
    url: string;
  };
  contest_type: {
    name: string;
    url: string;
  };
  damage_class: {
    name: string;
    url: string;
  };
  effect_chance: any;
  effect_changes: {
    effect_entries: {
      effect: string;
      language: {
        name: string;
        url: string;
      };
    }[];
    version_group: {
      name: string;
      url: string;
    };
  }[];
  effect_entries: {
    effect: string;
    language: {
      name: string;
      url: string;
    };
    short_effect: string;
  }[];
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
    };
    version_group: {
      name: string;
      url: string;
    };
  }[];
  generation: {
    name: string;
    url: string;
  };
  id: number;
  learned_by_pokemon: {
    name: string;
    url: string;
  }[];
  machines: {
    machine: {
      name: string;
      url: string;
    };
    version_group: {
      name: string;
      url: string;
    };
  }[];
  meta: {
    ailment: {
      name: string;
      url: string;
    };
    ailment_chance: number;
    category: {
      name: string;
      url: string;
    };
    crit_rate: number;
    drain: number;
    flinch_chance: number;
    healing: number;
    max_hits: null;
    max_turns: null;
    min_hits: null;
    min_turns: null;
    stat_chance: number;
  };
  name: string;
  names: {
    language: {
      name: string;
      url: string;
    };
    name: string;
  }[];
  past_values: any[];
  power: number;
  pp: number;
  priority: number;
  stat_changes: {
    change: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  super_contest_effect: {
    url: string;
  };
  target: {
    name: string;
    url: string;
  };
  type: {
    name: string;
    url: string;
  };
};


