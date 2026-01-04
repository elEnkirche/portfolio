"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
} from "framer-motion";
import { MousePointerClick, Sun, Moon, Settings2 } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* Grid Pattern */
const GridPattern = ({
  offsetX,
  offsetY,
  size,
}: {
  offsetX: any;
  offsetY: any;
  size: number;
}) => (
  <svg className="w-full h-full">
    <defs>
      <motion.pattern
        id="grid-pattern"
        width={size}
        height={size}
        patternUnits="userSpaceOnUse"
        x={offsetX}
        y={offsetY}
      >
        <path
          d={`M ${size} 0 L 0 0 0 ${size}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-muted-foreground"
        />
      </motion.pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
  </svg>
);

export default function SplashScreen({
  onEnter,
}: {
  onEnter: () => void;
}) {
  const [gridSize, setGridSize] = useState(40);
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion Values for flashlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  useAnimationFrame(() => {
    gridOffsetX.set((gridOffsetX.get() + 0.5) % gridSize);
    gridOffsetY.set((gridOffsetY.get() + 0.5) % gridSize);
  });

  const maskImage = useMotionTemplate`
    radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)
  `;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-background"
      )}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.05]">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} size={gridSize} />
      </div>

      {/* Active Grid with flashlight */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} size={gridSize} />
      </motion.div>

      {/* Decorative Blur Spheres (red/blue sides) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute right-[-20%] top-[-20%] w-[40%] h-[40%] rounded-full bg-orange-500/40 dark:bg-orange-600/20 blur-[120px]" />
        <div className="absolute right-[10%] top-[-10%] w-[20%] h-[20%] rounded-full bg-primary/30 blur-[100px]" />
        <div className="absolute left-[-10%] bottom-[-20%] w-[40%] h-[40%] rounded-full bg-blue-500/40 dark:bg-blue-600/20 blur-[120px]" />
      </div>

      {/* Grid Density Control Panel */}
      <div className="absolute bottom-10 right-10 z-30 pointer-events-auto">
        <div className="bg-background/80 backdrop-blur-md border border-border p-4 rounded-xl shadow-2xl space-y-3 min-w-[200px]">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Settings2 className="w-4 h-4" />
            Grid Density
          </div>
          <input
            type="range"
            min="20"
            max="100"
            value={gridSize}
            onChange={(e) => setGridSize(Number(e.target.value))}
            className="w-full h-1.5 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-[10px] text-muted-foreground uppercase tracking-widest font-mono">
            <span>Dense</span>
            <span>Sparse ({gridSize}px)</span>
          </div>
        </div>
      </div>

      {/* Main Content (Title + Enter Button) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center space-y-6"
      >
        <h1 className="text-5xl font-semibold">Portfolio d’Elias</h1>

        <motion.button
          onClick={onEnter}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold shadow-lg"
        >
          <MousePointerClick className="inline mr-2" />
          Entrer
        </motion.button>
      </motion.div>
    </div>
  );
}
