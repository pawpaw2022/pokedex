/** @format */
import React from "react";
import { getPokemonData } from "../utils/datafetch";
import Pokepage from "./components/Pokepage";

export default async function Pokemon() {
  return (
    <>
      <Pokepage />
    </>
  );
}
