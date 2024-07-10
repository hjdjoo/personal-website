"use client"

import { ForwardedRef, forwardRef } from "react"
import Blurb from "./Blurb"
import Image from "next/image"
import Link from "next/link"
import { BlurbData } from "@/types/client-types/types"

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

export const MusicSplash = forwardRef(function MusicSplash(_props, ref: ForwardedRef<HTMLDivElement>) {

  const Blurbs = blurbs.map((data, idx) => {
    return (
      <Blurb key={`splash-blurb-${idx + 1}`}
        data={data} />
    )
  })

  return (
    <div id="music-splash"
      ref={ref}
      className={`flex-1 flex flex-col h-full justify-between items-center`}
    >
      {Blurbs}
      <div
        className="relative w-full h-[450px] md:h-[600px] lg:h-[600px] flex flex-col mt-24 mb-10"
      >
        <Image
          className="flex-1 opacity-85 dark:opacity-85"
          src="/BWQ-Mask-Transparent.png" alt="BWQ Mask Image"
          fill
          quality={100}
          style={{
            objectFit: "contain"
          }} />
      </div>
    </div>
  )
})