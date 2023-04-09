/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/PokeAPI/sprites/master/sprites/pokemon/**",
      },
      {
        protocol: "https",
        hostname: "img.pokemondb.net",
        port: "",
        pathname: "/artwork/**.jpg",
      },
      {
        protocol: "https",
        hostname: "play.pokemonshowdown.com",
        port: "",
        pathname: "/sprites/xyani/**.gif",
      },
    ],
  },
};

module.exports = nextConfig;
