/** @format */

import React from "react";
import Image from "next/image";

export default function Navbar() {


  return (
    <div className="flex flex-col justify-center items-center mb-6">
      <Image src="/pokelogo.svg" alt="Pokemon Logo" height={300} width={300} priority />
    </div>
  );
}
