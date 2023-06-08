/** @format */

import React from "react";
import { typeCode } from "../../utils/config";
import Image from "next/image";

type Props = {
  type: string;
};

export default function TypeBadge({ type }: Props) {
  const color = typeCode.find((t) => t.name.toLowerCase() === type)?.color;  

  return (
    <span
      className="rounded-md mx-1 md:mx-2 px-1 py-2 md:py-2 md:px-3 flex uppercase text-xs xl:text-sm justify-center items-center text-gray-600"
      style={{ backgroundColor: color }}
    >
      <Image 
      className="mr-1.5 w-3 md:w-4"
      src={`/type-icons/${type}.svg`}
      alt={'type icon'} width={18} height={18} /> {type}
    </span>
  );
}
