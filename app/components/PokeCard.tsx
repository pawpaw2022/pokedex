/** @format */

import React, { useState } from "react";
import styles from "./PokeCard.module.scss";
import Image from "next/image";
import TypeBadge from "./TypeBadge";

interface Props {
  pokemon: Pokemon;
}

export default function PokeCard({ pokemon }: Props) {
  return (
    <div className={styles.card}>
      <Image
        src={pokemon.info.sprites.front_default}
        alt={pokemon.name}
        height={150}
        width={150}
      />
      <p className={styles.name}>
        #{pokemon.id}-{pokemon.name}
      </p>
      {pokemon.info.types.map((type) => {
        return <TypeBadge key={type.slot} type={type.type.name} />;
      })}
    </div>
  );
}
