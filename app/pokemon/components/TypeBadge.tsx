/** @format */

import React from "react";
import { typesColor } from "../../utils/commons";
import Image from "next/image";

type Props = {
  type: string;
};

export default function TypeBadge({ type }: Props) {
  const color = typesColor[type];

  return (
    <span
      className="rounded-md mx-2 p-2 flex"
      style={{ backgroundColor: color }}
    >
      <Image 
      className="mr-2"
      src={`/type-icons/${type}.svg`}
      alt={'type icon'} width={20} height={20} /> {type}
    </span>
  );
}
