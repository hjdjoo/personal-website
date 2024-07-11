"use client"

import { useState, useEffect, useRef } from "react";
import { Album, MusicEvent } from "@/types/client-types/types";
import { TimelineBar, TimelineMarker } from "./_subComponents/TimelineComponents";

interface TimelineProps {
  events: MusicEvent[]
  albums: Array<Album | undefined>
  animation?: string,
}

export default function Timeline({ events, albums, animation }: TimelineProps) {

  const timelineBar = useRef<HTMLDivElement>(null)

  const startTime = Date.parse(events[0].date);
  const totalTime = Date.parse(events[events.length - 1].date) - Date.parse(events[0].date);

  const timelineHeight = `${totalTime / 1000 / 3600 / 25}px`;

  const getMarkerPosition = (event: MusicEvent) => {

    const pct = Math.floor(parseFloat(((Date.parse(event.date) - startTime) / totalTime).toFixed(2)) * 100).toString();

    const yPosition = `${pct}%`;

    return yPosition;
  }

  // map events scaled to time between dates.
  const timelineMarkers = events.map((event, idx) => {

    const albumReleased = !!albums[idx]

    const left = (idx % 2 === 0);

    const markerPosition = getMarkerPosition(event);

    const dialoguePosition = left ? "left" : "right"

    return (
      <div key={idx + 1}
        id={`timeline-marker-${idx + 1}`}
        className={`w-full`}>
        <div id={`event-name-${idx + 1}`}
          style={{
            top: markerPosition
          }}
          className={`absolute w-full`}>
          <p
            className={`absolute w-[40%] text-sm md:text-md flex flex-col ${left ? "items-end text-right" : "items-start"} -z-10 ${left ? "left-0" : "right-0"}`}
          >
            {event.name}
          </p>
        </div>
        <TimelineMarker
          position={markerPosition} dialoguePosition={dialoguePosition} event={event} album={albums[idx]}>
        </TimelineMarker>
      </div >
    )

  })

  return (
    <div id="music-timeline-div"
      className={`flex flex-col items-center mb-36 ${animation}`}
    >
      <p id="timeline-head"
        className="my-10 text-2xl">So far...</p>
      <div id="timeline"
        style={{
          height: timelineHeight
        }}
        className="relative min-h-screen w-0 z-10 flex flex-col items-center py-6"
      >
        <TimelineBar className="sm:w-[275px] md:w-[450px]" ref={timelineBar} >
          {timelineMarkers}
        </TimelineBar>
      </div>
    </div>
  )
}