/** @format */
'use client'
import React from "react";

type Props = {
  name: string;
  base_stat: number;
};

export default function Stats({ name, base_stat }: Props) {
  const progress =
    name === "Total" ? (base_stat / 780) * 100 : (base_stat / 250) * 100;

  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const timeout = () => {
      setTimeout(() => {
        setWidth(progress);
      }, 0);
    };

    timeout();
  }, []);

  const style = {
    width: `${width}%`,
    transition: "1s ease-in-out",
    background: "linear-gradient(90deg, #3b82f6, #60a5fa)",
  };

  const nameConverter = (name: string) => {
    switch (name) {
      case "hp":
        return "HP";
      case "attack":
        return "Atk";
      case "defense":
        return "Def";
      case "special-attack":
        return "Sp. Atk";
      case "special-defense":
      return "Sp. Def";
      case "speed":
        return "Speed";
      default:
        return name;
    }
  };

  return (
    <>
      <div className="">
        <p className="">
          {nameConverter(name)}: {base_stat}
        </p>
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-500">
          <div
            className="h-2.5 p-0.5 leading-none rounded-full"
            style={style}
          >
          </div>
        </div>
      </div>
    </>
  );
}
