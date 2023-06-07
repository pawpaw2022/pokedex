/** @format */

import { typeCode } from "@/app/utils/config";
import Image from "next/image";
import React from "react";

type Props = {
  name: string;
};

export default function MiniTypeBadge({ name }: Props) {
  const bgColor = typeCode.find((t) => t.name.toLowerCase() === name)?.color;

  return (
    <div className="p-1.5 ml-2 rounded-2xl" style={{ backgroundColor: bgColor }}>
      <Image
        className=""
        src={`/type-icons/${name}.svg`}
        alt={"type icon"}
        width={18}
        height={18}
      />
    </div>
  );
}
