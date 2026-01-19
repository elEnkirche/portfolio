"use client"

import { useEffect, useState } from "react"

type Album = {
  id: number
  cover_xl: string
}

export default function AlbumWall({ albums }: { albums: Album[] }) {
  const [cols, setCols] = useState(1)
  const [size, setSize] = useState(100)
  const [visible, setVisible] = useState<Album[]>([])

  useEffect(() => {
    const compute = () => {
      const W = window.innerWidth
      const H = window.innerHeight 
      const max = albums.length
      const screenRatio = W / H

      let bestScore = -Infinity
      let bestCols = 1
      let bestRows = 1
      let bestSize = 0

      for (let c = 1; c <= max; c++) {
        const s = W / c
        const r = Math.floor(H / s)

        if (r < 1) continue

        const count = c * r
        if (count > max) continue

        const gridRatio = c / r
        const balance = 1 - Math.abs(gridRatio - screenRatio)

        let directionBonus = 0

        if (screenRatio > 1 && r > c) {
          // paysage → lignes
          directionBonus = Math.min((r / c - 1) * 0.15, 0.4)
        }

        if (screenRatio < 1 && c > r) {
          // portrait → colonnes
          directionBonus = Math.min((c / r - 1) * 0.15, 0.4)
        }

        const score = count * balance * (1 + directionBonus)

        if (score > bestScore) {
          bestScore = score
          bestCols = c
          bestRows = r
          bestSize = s
        }
      }

      setCols(bestCols)
      setSize(bestSize)
      setVisible(albums.slice(0, bestCols * bestRows))
    }

    compute()
    window.addEventListener("resize", compute)
    return () => window.removeEventListener("resize", compute)
  }, [albums])

  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${cols}, ${size}px)`,
      }}
    >
      {visible.map(album => (
        <img
          key={album.id}
          src={album.cover_xl}
          alt=""
          style={{ width: size, height: size }}
          className="object-cover"
        />
      ))}
    </div>
  )
}
