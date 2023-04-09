/** @format */

import React from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-col justify-center items-center mt-6">
      <Image src="/pokelogo.svg" alt="Pokemon Logo" height={100} width={300} />
      <div className="flex bg-white mx-4 rounded-md">
        <div className="bold uppercase mx-2 my-1 hover:scale-105 ease-in-out">
            <Link href="#">Pokemon</Link>
        </div>
        <div className="">
            <Link href="#">Type Chart</Link>
        </div>
        <div className="">
            <Link href="#">Moves</Link>
        </div>
        <div className="">
            <Link href="#">TM</Link>
        </div>
        <div className="">
            <Link href="#">Ability</Link>
        </div>
        <div className="">
            <Link href="#">Nature</Link>
        </div>
        <div className="">
            <Link href="#">Berry</Link>
        </div>
      </div>
    </div>
  );
}
