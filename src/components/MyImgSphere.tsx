"use client";

import React, { useRef, useState, useEffect } from "react";
import SphereImageGrid, { ImageData }  from "@/components/ui/img-sphere";

// ==========================================
// EASY CONFIGURATION - Edit these values to customize the component
// ==========================================

// Image data using project assets - duplicated to fill sphere better
const BASE_IMAGES: Omit<ImageData, 'id'>[] = [
    {
    src: "cuir.webp",
    alt: "Maroquinerie",
    title: "Site web vitrine du projet d'un ami",
    description: "Prémière réalisation avec V0dev en NextJs.",
    url: "https://v0-landing-page-for-leather-goods.vercel.app/?_vercel_share=iPctIcQyHkxTH5J1jUgsKsaswgKBeXZZ"
  },
  {
    src: "crypto.webp",
    alt: "Entrainement crypto",
    title: "Plateforme d'entrainement pour trading crypto",
    description: "Réalisé avec Lovable.",
    url:"https://coin-collectors-carnival.lovable.app"
  },
  {
    src: "portfolio.webp",
    alt: "Portfolio",
    title: "Ce portfolio",
    description: "Réalisé à la main sous Next.js en utilisant des composants 21stdev et l'api deezer.",
    url:"https://portfolio-git-main-elenkirches-projects.vercel.app"
  }
];

// Generate more images by repeating the base set
const IMAGES: ImageData[] = [];
for (let i = 0; i < 60; i++) {
  const baseIndex = i % BASE_IMAGES.length;
  const baseImage = BASE_IMAGES[baseIndex];
  IMAGES.push({
    id: `img-${i + 1}`,
    ...baseImage,
    alt: `${baseImage.alt} (${Math.floor(i / BASE_IMAGES.length) + 1})`
  });
}

export function DemoOne() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [size, setSize] = useState(600);
  const [width, setWidth] = useState(0);   // 👈 on garde la largeur en mémoire

  useEffect(() => {
    const div = containerRef.current;
    if (!div) return;

    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;

      setWidth(width); // 👈 on mémorise la largeur réelle

      // On garde un conteneur carré
      const newSize = Math.min(width, height);
      setSize(newSize);
    });

    observer.observe(div);

    return () => observer.disconnect();
  }, []);

  const isMobile = width < 768; // 👈 maintenant ça marche

  return (
    <div className="w-full p-6 flex justify-center items-center min-h-screen">
      <div
        ref={containerRef}
        className="w-full max-w-[800px] aspect-square mx-auto"
      >
        <SphereImageGrid
          images={IMAGES}
          containerSize={size}
          sphereRadius={size * (isMobile ? 0.70 : 0.35)}
          dragSensitivity={0.8}
          momentumDecay={0.96}
          maxRotationSpeed={6}
          baseImageScale={0.15}
          hoverScale={1.3}
          perspective={1000}
          autoRotate={true}
          autoRotateSpeed={0.2}
        />
      </div>
    </div>
  );
}