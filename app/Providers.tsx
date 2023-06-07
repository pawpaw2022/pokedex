/** @format */

"use client";

import { ReactNode } from "react";

import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <QueryClientProvider client={new QueryClient()}>
        {children}
        {/* <ReactQueryDevtools /> */}
      </QueryClientProvider>
    </ThemeProvider>
  );
}
