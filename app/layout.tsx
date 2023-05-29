/** @format */

import Providers from "./Providers";
import Navbar from "./components/Navbar";
import "./globals.css";
import { ServerThemeProvider } from "next-themes";

export const metadata = {
  title: "Pokedex Pro",
  description: "A new generation of Pokedex",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ServerThemeProvider attribute="class">
      <html lang="en">
        <body>
          <Providers>
            <main className="bg-color w-full h-full min-h-screen py-6">
              <Navbar />
              {children}
            </main>
          </Providers>
        </body>
      </html>
    </ServerThemeProvider>
  );
}
