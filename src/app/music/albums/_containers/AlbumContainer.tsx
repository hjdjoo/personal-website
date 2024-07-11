"use client"

import { useState, useEffect, useRef } from "react"
import { Album } from "@/types/client-types/types"
import AlbumDisplay from "../_components/AlbumDisplay"

interface AlbumContainerProps {
  children?: React.ReactNode,
  albums: Album[]
}

export default function AlbumContainer({ albums }: AlbumContainerProps) {

  const [viewAlbum, setViewAlbum] = useState<number>(0)

  const albumToggles = albums.map((album, idx) => {

    const active = idx === viewAlbum

    return (
      <button key={`album-toggle-${idx + 1}`}
        className={`flex-1 mx-2 min-w-14 text-xs sm:text-sm px-2 py-1 border border-slate-400 rounded-md transition duration-200 ${active && "bg-slate-400 dark:bg-cyan-900/60"}`}
        onClick={() => { setViewAlbum(idx); }}
      >
        {`${album.name}`}
      </button>
    )
  })

  const albumDisplays = albums.map((album, idx) => {
    return (
      <AlbumDisplay
        key={`album-${idx + 1}`}
        album={album} />
    )
  })

  return (
    <div id={"album-container"}
      className="w-full lg:w-5/6 my-4">
      <div id="album-toggles-box"
        className="flex flex-row justify-between my-4">
        {albumToggles}
      </div>
      {albumDisplays[viewAlbum]}
    </div>
  )
}