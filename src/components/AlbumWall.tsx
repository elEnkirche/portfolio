"use client"

import { useEffect, useState } from "react"
import { FastAverageColor } from "fast-average-color"

type Album = {
  id: number
  cover_xl: string
}

type AlbumWithColor = Album & {
  h: number
  rgb: [number, number, number]
  fade: string
}

const fac = new FastAverageColor()

/* 🔹 RGB → HSL (pour le TRI uniquement) */
function rgbToHsl(r: number, g: number, b: number) {
  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h *= 60
  }

  return { h, s, l }
}

/* 🔹 interpolation RGB */
function lerp(a: number, b: number, t: number) {
  return Math.round(a + (b - a) * t)
}

function lerpColor(
  c1: [number, number, number],
  c2: [number, number, number],
  t: number
): [number, number, number] {
  return [
    lerp(c1[0], c2[0], t),
    lerp(c1[1], c2[1], t),
    lerp(c1[2], c2[2], t),
  ]
}

export default function AlbumWall({ albums }: { albums: Album[] }) {
  const [items, setItems] = useState<AlbumWithColor[]>([])
  const [cols, setCols] = useState(1)
  const [size, setSize] = useState(100)

  /* 🔹 Extraction couleur + TRI CHROMATIQUE */
  useEffect(() => {
    let mounted = true

    const run = async () => {
      const temp: AlbumWithColor[] = []

      for (const album of albums) {
        try {
          const color = await fac.getColorAsync(album.cover_xl, {
            crossOrigin: "anonymous",
          })

          const rgb: [number, number, number] = [
            color.value[0],
            color.value[1],
            color.value[2],
          ]

          const { h } = rgbToHsl(rgb[0], rgb[1], rgb[2])

          temp.push({
            ...album,
            h,
            rgb,
            fade: "",
          })
        } catch {
          // ignore image si erreur
        }
      }

      if (!mounted) return

      // 🔥 TRI ROUGE → VIOLET
      temp.sort((a, b) => a.h - b.h)

      // 🔥 FADE RGB CONTINU (interpolation entre voisins)
      const faded = temp.map((album, i) => {
        if (i === 0 || i === temp.length - 1) {
          return {
            ...album,
            fade: `rgb(${album.rgb.join(",")})`,
          }
        }

        const prev = temp[i - 1].rgb
        const next = temp[i + 1].rgb
        const [r, g, b] = lerpColor(prev, next, 0.5)

        return {
          ...album,
          fade: `rgb(${r}, ${g}, ${b})`,
        }
      })

      setItems(faded)
    }

    run()
    return () => {
      mounted = false
    }
  }, [albums])

  /* 🔹 Calcul GRILLE OPTIMALE (1 page pleine) */
  useEffect(() => {
    if (!items.length) return

    const compute = () => {
      const W = window.innerWidth
      const H = window.innerHeight
      const max = items.length

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

        const score = count * s
        if (score > bestScore) {
          bestScore = score
          bestCols = c
          bestRows = r
          bestSize = s
        }
      }

      setCols(bestCols)
      setSize(bestSize)
      setItems(prev => prev.slice(0, bestCols * bestRows))
    }

    compute()
    window.addEventListener("resize", compute)
    return () => window.removeEventListener("resize", compute)
  }, [items.length])

  return (
    <div
      className="fixed inset-0 grid"
      style={{
        gridTemplateColumns: `repeat(${cols}, ${size}px)`,
      }}
    >
      {items.map(album => (
        <div
          key={album.id}
          style={{
            width: size,
            height: size,
            background: album.fade,
          }}
        >
          <img
            src={album.cover_xl}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  )
}
