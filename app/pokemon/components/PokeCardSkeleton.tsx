import Image from "next/image";
import React from "react";

export default function PokeCardSkeleton() {
  return (
    <div role="status" className="card flex-col items-center animate-pulse">
      <Image
        className="opacity-30 mt-4"
        src="/pokeball.svg"
        alt="Pokeball"
        height={100}
        width={100}
      />
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-36 mt-4 mb-2"></div>
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-36 mb-2"></div>
      <div className="flex mx-auto">
        <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-12"></div>
        <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-12"></div>
      </div>
    </div>
  );
}
