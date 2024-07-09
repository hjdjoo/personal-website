"use client"

import { useState, useEffect, useRef } from "react";
import { EventData, AlbumData } from "../types/element-types"
import { TimelineBar, TimelineMarker } from "./_subComponents/TimelineComponents";


interface TimelineProps {
  events: EventData[]
  albums: Array<AlbumData | undefined>
}

export default function Timeline(props: TimelineProps) {

  const { events, albums } = props;

  const timelineBar = useRef<HTMLDivElement>(null)

  const startTime = Date.parse(events[0].date);
  const totalTime = Date.parse(events[events.length - 1].date) - Date.parse(events[0].date);

  const getMarkerPosition = (event: EventData) => {

    const pct = Math.floor(parseFloat(((Date.parse(event.date) - startTime) / totalTime).toFixed(2)) * 100).toString();

    const yPosition = `${pct}%`;

    return yPosition;
  }

  // map events scaled to time between dates.
  const timelineMarkers = events.map((event, idx) => {

    const left = (idx % 2 === 0);

    const markerPosition = getMarkerPosition(event);

    const dialoguePosition = left ? "left" : "right"

    return (
      <div key={idx + 1}
        id={`timeline-marker-${idx + 1}`}
        style={{
          top: markerPosition
        }}
        className={`w-full`}>
        <p
          style={{
            top: markerPosition
          }}
          className={`absolute ${left ? "left-0" : "right-0"} flex flex-col items-center -z-10`}
        >
          {event.name}
        </p>
        <TimelineMarker
          position={markerPosition} dialoguePosition={dialoguePosition} event={event} album={albums[idx]}>
        </TimelineMarker>
      </div >
    )

  })

  return (
    <div id="music-timeline-div"
      className="min-h-screen flex flex-col items-center"
    >
      <p id="timeline-head"
        className="my-10 text-2xl">So far...</p>
      <div id="timeline"
        className="relative min-h-screen w-0 z-10 flex flex-col items-center py-6"
      >
        <TimelineBar className="" ref={timelineBar} >
          {timelineMarkers}
        </TimelineBar>
      </div>
    </div>
  )
}