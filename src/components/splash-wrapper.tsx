"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SplashScreen from "@/components/splash-screen";

export default function SplashWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [entered, setEntered] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!entered ? (
        <SplashScreen onEnter={() => setEntered(true)} />
      ) : (
        <motion.div
          key="site"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
