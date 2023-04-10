/** @format */

import React from "react";
import Image from "next/image";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  const items = [
    "Home",
    "Pokemon",
    "Type",
    "Move",
    "TM",
    "Ability",
    "Nature",
    "Berry",
  ];

  return (
    <div className="flex flex-col justify-center items-center mt-6">
      <Image src="/pokelogo.svg" alt="Pokemon Logo" height={100} width={300} />
      <div className="flex bg-white mx-4 my-10 rounded-md">
        {items.map((item) => {
          return <NavbarItem key={item} name={item} url="#" />;
        })}
      </div>
    </div>
  );
}
