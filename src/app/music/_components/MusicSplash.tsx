"use client"

import Blurb from "./Blurb"
import { BlurbData } from "../types/element-types"

const blurbs: BlurbData[] = [
  {
    name: "PopMatters",
    blurb: "... An energetic, earnest, and thoroughly elegant genre darling.",
    src: "https://www.popmatters.com/project-bwq-phosphene-premiere-2591469573.html"
  },
  {
    name: "MetalheadReviews",
    blurb: "... Simply irresistable.",
    src: "https://metalheadcommunity.com/bwq-up-song-review/"
  },
  {
    name: "JerseyBeat",
    blurb: "... On the money.",
    src: "https://www.jerseybeat.com/world-according-to-wawrzyniak.html"
  }
]

export default function MusicSplash() {

  const Blurbs = blurbs.map((data, idx) => {
    return (
      <Blurb key={`splash-blurb-${idx + 1}`}
        data={data} />
    )
  })

  return (
    <div id="music-splash"
      className={`flex-1 flex flex-col h-full justify-between items-center`}
    >
      {Blurbs}
    </div>
  )
}