/** @format */

import { typeCode } from "@/app/utils/config";
import Image from "next/image";
import React from "react";
import TypeSideBarTicket from "./TypeSideBarTicket";

type Props = {
  handleTypeFilter: (type: string) => void;
};

export default function TypeSideBar({ handleTypeFilter }: Props) {
  const [currentType, setCurrentType] = React.useState<string>("all");

  const handleClick = (type: string) => {
    setCurrentType(type.toLowerCase());
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
                currentType={currentType}
              />
            );
          })}
        </div>
      </div>
    </aside>
  );
}
