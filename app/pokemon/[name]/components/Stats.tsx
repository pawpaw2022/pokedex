/** @format */
import React from "react";

type Props = {
  name: string;
  base_stat: number;
};

export default function Stats({ name, base_stat }: Props) {
  const progress =
    name === "total" ? (base_stat / 780) * 100 : (base_stat / 250) * 100;

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

  return (
    <>
      <div className="">
        <p className="">
          {name}: {base_stat}
        </p>
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
          <div
            className="text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            style={style}
          >
            {base_stat}
          </div>
        </div>
      </div>
    </>
  );
}
