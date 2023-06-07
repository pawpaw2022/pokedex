/** @format */
import React from "react";
import PokeCard from "./components/PokeCard";
import Filters from "./components/Filters";
import ClientSide from "./components/ClientSide";


// get search query parameter
type Props = {
  searchParams: {
    gen: string;
  };
};

export default async function Pokemon({ searchParams }: Props) {

  const { gen } = searchParams;
  
  return (
    <>
      <ClientSide gen={gen ? Number(gen) : 1}/>
    </>
  );
}
