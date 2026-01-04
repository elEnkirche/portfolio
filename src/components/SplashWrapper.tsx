"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useRouter, usePathname } from "next/navigation"
import SplashScreen from "@/components/SplashScreen"

export default function SplashWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const [entered, setEntered] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // 🔥 Force retour à Home au reload
    if (pathname !== "/") {
      router.replace("/")
    }
  }, []) // une seule fois

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
  )
}
