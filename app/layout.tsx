/** @format */

import Navbar from "./components/Navbar";
import "./globals.css";

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
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
