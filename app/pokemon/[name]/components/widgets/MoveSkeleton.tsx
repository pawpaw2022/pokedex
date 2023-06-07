/** @format */

import React from "react";

export default function MoveSkeleton() {
  return (
    <div
      className="border-2 animate-pulse border-solid border-gray-400 dark:border-gray-700
  bg-slate-700 dark:bg-slate-200 flex flex-col justify-center items-center rounded-lg shadow-lg px-2 py-2.5 m-2 hover:scale-105 transition duration-300 ease-in-out"
    >
      <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-[50%] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[90%] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[90%] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[90%] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[90%] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[90%] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[90%] mb-2.5"></div>
    </div>
  );
}
