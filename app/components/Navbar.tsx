/** @format */

import React from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Image src="/pokelogo.svg" alt="Pokemon Logo" height={100} width={500} />
      <div className={styles.navbar}>
        <div className={styles.navbar_opt}>
            <Link href="#">Pokemon</Link>
        </div>
        <div className={styles.navbar_opt}>
            <Link href="#">Type Chart</Link>
        </div>
        <div className={styles.navbar_opt}>
            <Link href="#">Moves</Link>
        </div>
        <div className={styles.navbar_opt}>
            <Link href="#">TM</Link>
        </div>
        <div className={styles.navbar_opt}>
            <Link href="#">Ability</Link>
        </div>
        <div className={styles.navbar_opt}>
            <Link href="#">Nature</Link>
        </div>
        <div className={styles.navbar_opt}>
            <Link href="#">Berry</Link>
        </div>
      </div>
    </div>
  );
}
