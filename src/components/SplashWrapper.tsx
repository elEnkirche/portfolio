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
  const [targetPath, setTargetPath] = useState<string | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // 🔥 Force retour à Home au reload
    if (pathname !== "/") {
      router.replace("/")
    }
  }, [])

  useEffect(() => {
    // Quand on a navigué vers le bon chemin, on affiche le contenu
    if (targetPath && pathname === targetPath) {
      setEntered(true)
    }
  }, [pathname, targetPath])

  const handleEnter = (path: string) => {
    setTargetPath(path)
    router.replace(path)
  }

  return (
    <AnimatePresence mode="wait">
      {!entered ? (
        <SplashScreen onEnter={handleEnter} />
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