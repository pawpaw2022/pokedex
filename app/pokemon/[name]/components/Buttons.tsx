/** @format */
"use client";
import Link from "next/link";
import React from "react";
import DarkModeToggle from "../../components/filters/DarkModeToggle";

export default function Buttons() {
  return (
    <div className="flex justify-between items-center my-4 w-[90%] md:w-[45%]">
      <Link href="/">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Return
        </button>
      </Link>

      <DarkModeToggle />
    </div>
  );
}
