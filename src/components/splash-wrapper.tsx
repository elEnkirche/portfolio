"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isEntered, setIsEntered] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!isEntered ? (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
        >
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6 text-4xl font-bold"
          >
            Portfolio d’Elias
          </motion.h1>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsEntered(true)}
            className="rounded-xl border border-white px-6 py-3 text-lg"
          >
            Entrer
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          key="content"
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
