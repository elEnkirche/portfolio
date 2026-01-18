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

  return <AlbumWall albums={albums} />
}
