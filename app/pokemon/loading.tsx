import React from "react";
import PokeCardSkeleton from "./components/PokeCardSkeleton";

export default function loading() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {Array(100)
          .fill(0)
          .map((_, i) => (
            <PokeCardSkeleton key={i} />
          ))}
      </div>
    </>
  );
}
