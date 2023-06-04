/** @format */

import { typeCode } from "@/app/utils/config";
import Image from "next/image";
import React from "react";


type Props = {
    handleTypeFilter: (type: string) => void;
  };


export default function TypeSideBar({handleTypeFilter}: Props ) {

    const [currentType, setCurrentType] = React.useState<string>("all");

    const handleClick = (type: string) => {
        setCurrentType(type.toLowerCase());
        handleTypeFilter(type);
    }


  return (
    <aside className="hidden md:block">
      <div className="flex list-none flex-col flex-wrap pl-0 mt-8">
        <div className="flex-grow text-center">
          {typeCode.map((type) => {
            return (
              <div
                className={`
                  my-2 w-full flex border-x-0 border-b-2 border-t-0 border-transparent
                  pl-2 pr-5 py-2 text-xs uppercase hover:bg-indigo-400 
                  cursor-pointer rounded-r-lg shadow-lg`}
                  style={{ backgroundColor: currentType === type.name.toLowerCase() ? type.color : type.color+60 }}

                key={type.id}
                onClick={() => handleClick(type.name)}
              >
                 {
                    type.name.toLowerCase() !== 'all' && 
                    <Image
                    className="mr-2"
                    src={`/type-icons/${type.name.toLowerCase()}.svg`}
                    alt={"type icon"}
                    width={18}
                    height={18}
                  />
                 }
                {type.name}

              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
