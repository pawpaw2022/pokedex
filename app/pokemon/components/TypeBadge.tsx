/** @format */

import React from "react";
import { typesColor } from "../../utils/config";
import Image from "next/image";

type Props = {
  type: string;
};

export default function TypeBadge({ type }: Props) {
  const color = typesColor[type];

  return (
    <span
      className="rounded-md mx-2 p-2 flex uppercase font-medium min-w-[95px] justify-center items-center text-sm text-gray-600"
      style={{ backgroundColor: color }}
    >
      <Image 
      className="mr-2"
      src={`/type-icons/${type}.svg`}
      alt={'type icon'} width={20} height={20} /> {type}
    </span>
  );
}
