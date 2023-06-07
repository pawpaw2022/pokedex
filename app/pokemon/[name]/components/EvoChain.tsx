/** @format */

import { getSpriteUrl } from "@/app/utils/config";
import { excludeVariety, findName, findVariety } from "@/app/utils/datafetch";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  varities: {
    name: string;
    id: number;
    is_default: boolean;
  }[][];
};

export default function EvoChain({ varities }: Props) {
  const chainName: { name: string; id: number }[] = [];

  varities.forEach((variety) => {
    variety.forEach((v) => {
      if (excludeVariety(v.name)) {
        chainName.push({
          name: v.name,
          id: v.id,
        });
      }
    });
  });

  return (
    <div className=" mt-6 ">
      <h1 className="text-2xl text-slate-800 dark:text-slate-200 mb-3 mt-5">
        Evolution
      </h1>
      <div className="flex justify-center items-center w-full border-2 dark:border-slate-600 dark:bg-gray-600/80 bg-gray-300 border-slate-400 shadow-lg rounded-md pb-2 md:pb-6 px-3 space-x-2 ">
        {chainName.map((p) => {
          return (
            <div key={p.id}>
              <Link href={`/pokemon/${findName(p.name)}`}>
                <Image
                  src={getSpriteUrl(p.id, p.name)}
                  alt={p.name}
                  height={180}
                  width={180}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
