/** @format */

import React from "react";
import Image from "next/image";

export default function Navbar() {


  return (
    <div className="flex flex-col justify-center items-center">
      <Image src="/pokelogo.svg" alt="Pokemon Logo" height={300} width={300} />

    </div>
  );
}
