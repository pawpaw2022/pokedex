/** @format */
export const gens = {
  1: [0, 152],
  2: [152, 252],
  3: [252, 387],
  4: [387, 494],
  5: [494, 650],
  6: [650, 722],
  7: [722, 810],
  8: [810, 906],
  9: [906, 1009],
};

export const typeCode = [
  { name: "All", id: 0, color: "#68A090", fid: 0 },
  { name: "Fire", id: 1, color: "#EE8130", fid: 10 },
  { name: "Water", id: 2, color: "#6390F0", fid: 11},
  { name: "Grass", id: 3, color: "#7AC74C", fid: 12 },
  { name: "Electric", id: 4, color: "#F7D02C", fid: 13 },
  { name: "Normal", id: 5, color: "#A8A77A", fid: 1 },
  { name: "Rock", id: 6, color: "#B6A136", fid: 6 },
  { name: "Psychic", id: 7, color: "#F95587", fid: 14 },
  { name: "Dragon", id: 8, color: "#6F35FC", fid: 16 },
  { name: "Fighting", id: 9, color: "#C22E28", fid: 2 },
  { name: "Poison", id: 10, color: "#A33EA1", fid: 4 },
  { name: "Ground", id: 11, color: "#E2BF65", fid: 5 },
  { name: "Bug", id: 12, color: "#A6B91A", fid: 7 },
  { name: "Flying", id: 13, color: "#A98FF3", fid: 3 },
  { name: "Ghost", id: 14, color: "#735797", fid: 8 },
  { name: "Ice", id: 15, color: "#96D9D6", fid: 15 },
  { name: "Steel", id: 16, color: "#B7B7CE", fid: 9 },
  { name: "Dark", id: 17, color: "#705746", fid: 17 },
  { name: "Fairy", id: 18, color: "#D685AD", fid: 18 },
];

export const nameConvention = (name: string) => {
  if (name.includes("minior-red-meteor")) {
    return name.replace("-red-meteor", "").toLowerCase();
  }

  if (name.includes("mimikyu-disguised")) {
    return name.replace("-disguised", "").toLowerCase();
  }
  return name.toLowerCase();
};

export const displayName = (name: string) => {

  if (name.includes("-")) {
    return name.replace("-", " ");
  }

  return name;
}

export const getSpriteUrl = (id: number, name: string) => {

  const gen9 = id > 905 && id < 1011;

  const url = `https://img.pokemondb.net/sprites/${
    gen9 ? "scarlet-violet" : "home"
  }/normal/${nameConvention(name)}.png`;

  return url;
}



export const getPictureUrl = ( name: string) => {


  const url = `https://img.pokemondb.net/artwork/large/${nameConvention(name)}.jpg`;

  return url;
}



