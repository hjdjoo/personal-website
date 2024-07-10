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
    return (
      <button key={`album-toggle-${idx + 1}`}
        className={`border px-2 py-1 border-current rounded-md transition duration-200`}
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
      className="w-full my-4">
      <div id="album-toggles-box"
        className="flex flex-row justify-between my-4">
        {albumToggles}
      </div>
      {albumDisplays[viewAlbum]}
    </div>
  )
}