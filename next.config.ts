import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains:["www.terre.defense.gouv.fr",
      "www.naval-group.com",
      "www.iut-cachan.universite-paris-saclay.fr"
    ]
  },
};

export default nextConfig;

