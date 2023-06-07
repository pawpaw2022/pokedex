/** @format */

import { typeCode } from "@/app/utils/config";
import Image from "next/image";
import React from "react";
import TypeSideBarTicket from "./TypeSideBarTicket";

type Props = {
  handleTypeFilter: (type: string) => void;
  currentTypeFilter: string;
  setCurrentTypeFilter: (type: string) => void;
};

export default function TypeSideBar({ handleTypeFilter, currentTypeFilter, setCurrentTypeFilter }: Props) {

  const handleClick = (type: string) => {
    setCurrentTypeFilter(type.toLowerCase());
    handleTypeFilter(type);
  };

  return (
    <aside className="hidden md:block">
      <div className="flex list-none flex-col flex-wrap pl-0 mt-8">
        <div className="flex-grow text-center">
          {typeCode.map((t) => {
            return (
              <TypeSideBarTicket
                type={t}
                handleClick={handleClick}
                key={t.id}
                currentType={currentTypeFilter}
              />
            );
          })}
        </div>
      </div>
    </aside>
  );
}
