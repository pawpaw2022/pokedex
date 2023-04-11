/** @format */

import React from "react";
import { typesColor } from "../../utils/commons";

type Props = {
  type: string;
};

export default function TypeBadge({ type }: Props) {
  const color = typesColor[type];

  return <span className="rounded-md mx-2 p-2 inline-block" style={{backgroundColor: color }} >{type}</span>;
}
