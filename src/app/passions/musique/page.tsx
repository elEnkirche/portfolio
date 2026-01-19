import AlbumWall from "@/components/AlbumWall"

export default async function MusiquePage() {
  const PLAYLIST_ID = "14843528943"
  let url = `https://api.deezer.com/playlist/${PLAYLIST_ID}/tracks`
  const albumsMap = new Map()

  while (url) {
    const res = await fetch(url, { cache: "no-store" })
    if (!res.ok) break

    const data = await res.json()

    data.data.forEach((track: any) => {
      albumsMap.set(track.album.id, track.album)
    })

    url = data.next ?? null
  }

  const albums = Array.from(albumsMap.values())

  return (
    <div className="relative w-full h-screen">
      {/* 🔹 Overlay glassmorphism centré */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="p-6 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md backdrop-saturate-150 text-center">
          <h1 className="text-white text-xs md:text-2xl font-bold">
            Mes albums préférés
          </h1>
          <p className="text-white/80 mt-2 text-xs md:text-lg">
            Une sélection d’albums triés par couleur. Je ne sais pas vraiment à quoi ça pourrait servir.
          </p>
        </div>
      </div>

      {/* 🔹 AlbumWall */}
      <AlbumWall albums={albums} />
    </div>

  )
}
