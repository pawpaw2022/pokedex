/** @format */
'use client'
import React, { useEffect, useState } from "react";

interface Props {
  params: {
    id: string;
  };
}

export default function PokemonDetail({ params: { id } }: Props) {

  return (
    <>
      <div>PokemonDetail {id}</div>

    </>
  );
}
