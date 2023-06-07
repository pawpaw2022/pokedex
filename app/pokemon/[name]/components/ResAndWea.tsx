/** @format */

import React from "react";
import MiniTypeBadge from "./widgets/MiniTypeBadge";
import ResAndWeaBanner from "./widgets/ResAndWeaBanner";

type Props = {
  typeRelation: {
    weakness: {
      1: string[];
      2: string[];
    };
    resistance: {
      0: string[];
      1: string[];
      2: string[];
    };
  };
};

export default function ResAndWea({ typeRelation }: Props) {
  return (
    <>
      <div>
        <h1 className="text-2xl text-slate-800 dark:text-slate-200 mb-3 mt-5">
          Resistance
        </h1>
        {typeRelation.resistance[0].length !== 0 && (
          <ResAndWeaBanner
            relationship={typeRelation.resistance[0]}
            muliplier={'0'}
          />
        )}
        {typeRelation.resistance[1].length !== 0 && (
          <ResAndWeaBanner
            relationship={typeRelation.resistance[1]}
            muliplier={'1/2'}
          />
        )}
        {typeRelation.resistance[2].length !== 0 && (
          <ResAndWeaBanner
            relationship={typeRelation.resistance[2]}
            muliplier={'1/4'}
          />
        )}
      </div>
      <div>
        <h1 className="text-2xl text-slate-800 dark:text-slate-200 mb-3 mt-5">
          Weakness
        </h1>
        {typeRelation.weakness[1].length !== 0 && (
          <ResAndWeaBanner
            relationship={typeRelation.weakness[1]}
            muliplier={'2'}
          />
        )}
        {typeRelation.weakness[2].length !== 0 && (
          <ResAndWeaBanner
            relationship={typeRelation.weakness[2]}
            muliplier={'4'}
          />
        )}
      </div>
    </>
  );
}
