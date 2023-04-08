/** @format */

import React from "react";
import { typesColor } from "../utils/types";
import styles  from "./TypeBadge.module.scss";

type Props = {
  type: string;
};

export default function TypeBadge({ type }: Props) {
  const color = typesColor[type];

  return <span className={styles.badge} style={{backgroundColor: color }} >{type}</span>;
}
