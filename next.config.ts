import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains:["www.terre.defense.gouv.fr",
      "www.autre.domaine.fr"
    ]
  },
};

export default nextConfig;

