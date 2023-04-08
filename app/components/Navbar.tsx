/** @format */

import React from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Image src="/pokelogo.svg" alt="Pokemon Logo" height={100} width={500} />
      {/* <div className={styles.navbar}>hello world</div> */}
    </div>
  );
}
