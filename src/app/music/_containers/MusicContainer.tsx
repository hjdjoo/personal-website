"use client"

import { useState, useRef } from "react";

import { MusicSplash } from "../_components/MusicSplash";
import Timeline from "../_components/Timeline";
import { vollkorn } from "@/lib/fonts";

import { Album, MusicEvent } from "@/types/client-types/types";

interface MusicContainerProps {
  children?: React.ReactNode,
  className?: string,
  albums: Album[],
  events: MusicEvent[]
}

// wrapping children in a client component for more interactive ux
export default function MusicContainer({ className, albums, events }: MusicContainerProps) {

  const musicSplash = useRef<HTMLDivElement>(null)
  // const router = useRouter();

  const [timelineState, setTimelineState] = useState<"closed" | "opening" | "open" | "closing">("closed");
  const [showDiscography, setShowDiscography] = useState<"closed" | "opening" | "open" | "closing">("closed")

  const handleTimeline = () => {
    if (timelineState === "closed") {
      setTimelineState("opening");
      setTimeout(() => {
        setTimelineState("open")
      }, 300)
    }
    if (timelineState === "open") {
      setTimelineState("closing");
      setTimeout(() => {
        setTimelineState("closed")
      }, 300)
    }

  }

  const handleDiscography = () => {
    // good old DOM manipulation to set slot visibility
    const discogSlot = document.getElementById("discography-slot")

    // console.log(discogSlot);
    if (!discogSlot) return;
    discogSlot.hidden = !discogSlot.hidden;

  }


  return (
    <div id="music-page"
      className={`${className}`}>
      <div id="alt-font-provider"
        className={`flex-1 flex flex-col ${vollkorn.className}`}>
        <MusicSplash ref={musicSplash} />
        <div id="music-page-links"
          className={`flex w-full space-between`}>
          <div id="discography-button"
            className="py-3 mx-1 rounded-lg text-center flex-1 border border-current italic text-sm">
            <button
              className="transition duration-300 hover:scale-110"
              onClick={handleDiscography}
            >the music</button>
          </div>
          <div id="timeline-button"
            className="py-3 mx-1 rounded-lg text-center flex-1 border border-current italic text-sm">
            <button
              className="transition duration-300 hover:scale-110"
              onClick={handleTimeline}>the story</button>
          </div>
        </div>
      </div>
      <div id="timeline-div"
        hidden={timelineState === "closed"}
        className={`${timelineState === "opening" && "animate-appear"} ${timelineState === "closing" && "animate-fade"}`}
      >
        <Timeline events={events} albums={albums} />
      </div>
    </div>
  );
};