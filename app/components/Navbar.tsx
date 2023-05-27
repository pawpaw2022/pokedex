/** @format */

import React from "react";
import Image from "next/image";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  const items = [
    { name: "Home", url: "/" },
    { name: "Pokemon", url: "/pokemon" },
    { name: "Type", url: "#" },
    { name: "Move", url: "#" },
    { name: "TM", url: "#" },
    { name: "Ability", url: "#" },
    { name: "Nature", url: "#" },
    { name: "Berry", url: "#" },
  ];
  

  return (
    <div className="flex flex-col justify-center items-center">
      <Image src="/pokelogo.svg" alt="Pokemon Logo" height={300} width={300} />

    </div>
  );
}
