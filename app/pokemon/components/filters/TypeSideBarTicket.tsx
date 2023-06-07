/** @format */

import Image from "next/image";
import React from "react";

type Props = {
  type: {
    name: string;
    id: number;
    color: string;
    fid: number;
  };
  handleClick: (type: string) => void;
  currentType: string;
};

export default function TypeSideBarTicket({
  type,
  handleClick,
  currentType,
}: Props) {
  const [isHover, setIsHover] = React.useState<boolean>(false);

  const toggleHover = () => {
    setIsHover((prev) => !prev);
  };

  return (
    <div
      className={`
      my-2 w-full flex border-x-0 border-b-2 border-t-0 border-transparent
      pl-2 pr-5 py-2 text-xs uppercase hover:bg-indigo-400 
      cursor-pointer rounded-r-lg shadow-lg ease-linear transition-all duration-150`}
      style={{
        backgroundColor:
          isHover || type.name.toLowerCase() === currentType.toLowerCase()
            ? type.color
            : "#B9D5FF80",
      }}
      onMouseEnter={() => toggleHover()}
      onMouseLeave={() => toggleHover()}
      key={type.id}
      onClick={() => handleClick(type.name)}
    >
      {type.name.toLowerCase() !== "all" && (
        <Image
          className="mr-2"
          src={`/type-icons/${type.name.toLowerCase()}.svg`}
          alt={"type icon"}
          width={18}
          height={18}
        />
      )}
      {type.name}
    </div>
  );
}
