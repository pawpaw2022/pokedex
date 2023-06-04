/** @format */

export const typesColor = {
  all: "#68A090",
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
  unknown: "#68A090",
  shadow: "#705746",
};

export const gens = {
  1: [0, 152],
  2: [152, 252],
  3: [252, 387],
  4: [387, 494],
  5: [494, 650],
  6: [650, 722],
  7: [722, 810],
  8: [810, 899],
  9: [899, 1009],
};

export const typeCode = [
  { name: "All", id: 0 },
  { name: "Normal", id: 1 },
  { name: "Fighting", id: 2 },
  { name: "Flying", id: 3 },
  { name: "Poison", id: 4 },
  { name: "Ground", id: 5 },
  { name: "Rock", id: 6 },
  { name: "Bug", id: 7 },
  { name: "Ghost", id: 8 },
  { name: "Steel", id: 9 },
  { name: "Fire", id: 10 },
  { name: "Water", id: 11 },
  { name: "Grass", id: 12 },
  { name: "Electric", id: 13 },
  { name: "Psychic", id: 14 },
  { name: "Ice", id: 15 },
  { name: "Dragon", id: 16 },
  { name: "Dark", id: 17 },
  { name: "Fairy", id: 18 },
];

export const imageNameConvention = (name: string) => {
  if (name.includes("minior-red-meteor")) {
    return name.replace("-red-meteor", "").toLowerCase();
  }

  if (name.includes("mimikyu-disguised")) {
    return name.replace("-disguised", "").toLowerCase();
  }

  return name.toLowerCase();
}