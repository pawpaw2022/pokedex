/** @format */

import React from "react";
import GenFilter from "./filters/GenFilter";

type Props = {
  handleGen: (gen: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8) => void;
};

export default function Filters( {handleGen}: Props) {


  return (
    <>
      <div className="flex flex-col justify-center items-center">

        <GenFilter handleGen={handleGen} />
      </div>
    </>
  );
}
