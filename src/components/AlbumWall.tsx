"use client"

import { useEffect, useState } from "react"

type Album = {
  id: number
  cover_xl: string
}

export default function AlbumWall({ albums }: { albums: Album[] }) {
  const [columns, setColumns] = useState(1)
  const [visibleAlbums, setVisibleAlbums] = useState<Album[]>([])
  const [coverSize, setCoverSize] = useState(100)

  useEffect(() => {
    const updateGrid = () => {
      const vw = window.innerWidth
      const vh = window.innerHeight * 0.8
      const count = albums.length

      let bestCols = 1
      let bestRows = 1
      let bestSize = 0

      for (let c = 1; c <= count; c++) {
        const r = Math.max(1, Math.floor(count / c)) // ✅ FIX CRITIQUE

        const sizeW = vw / c
        const sizeH = vh / r
        const size = Math.min(sizeW, sizeH)

        if (size > bestSize) {
          bestSize = size
          bestCols = c
          bestRows = r
        }
      }

      setColumns(bestCols)
      setCoverSize(bestSize)

      const totalVisible = bestCols * bestRows
      setVisibleAlbums(albums.slice(0, totalVisible))
    }

    updateGrid()
    window.addEventListener("resize", updateGrid)
    return () => window.removeEventListener("resize", updateGrid)
  }, [albums])

  return (
    <div
      className="grid gap-0.5 p-2 md:mt-20 mt-2"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridAutoRows: `${coverSize}px`,
      }}
    >
      {visibleAlbums.map((album) => (
        <img
          key={album.id}
          src={album.cover_xl}
          alt=""
          className="w-full h-full object-cover"
        />
      ))}
    </div>
  )
}
