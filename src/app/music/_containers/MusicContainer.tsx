"use client"

import { useState, useEffect, useRef } from "react";

import { MusicSplash } from "../_components/MusicSplash";
import Timeline from "../_components/Timeline";

import { isMobile } from "@/utils/serverActions/isMobile";

import { closeIconSvg } from "@/lib/icons";
import scrollToComponentId from "@/utils/clientActions/scrollToComponentId";
import { vollkorn, dmSans, alegreya } from "@/lib/fonts";
import { Album, MusicEvent } from "@/types/client-types/types";

interface MusicContainerProps {
  children?: React.ReactNode,
  className?: string,
  albums: Album[],
  events: MusicEvent[]
}

// wrapping children in a client component for more interactive ux
export default function MusicContainer({ className, albums, events }: MusicContainerProps) {

  const musicSplash = useRef<HTMLDivElement>(null);

  const [timelineState, setTimelineState] = useState<"closed" | "opening" | "open" | "closing">("closed");
  const [mobile, setMobile] = useState<boolean>(false);

  const closeIcon = closeIconSvg();

  useEffect(() => {
    isMobile().then(response => {
      console.log("setting mobile: ", response)
      setMobile(response)
    })
  }, [])


  const handleTimelineButton = () => {
    if (timelineState === "closed") {
      setTimelineState("opening");
      setTimeout(() => {
        setTimelineState("open")
      }, 300)
    }
    if (timelineState === "open") {
      scrollToComponentId("timeline");
    }
  }

  const closeTimeline = () => {
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
    if (!discogSlot) return;
    if (discogSlot.hidden) {
      discogSlot.hidden = !discogSlot.hidden;
      discogSlot.classList.add("animate-appear");
      setTimeout(() => {
        discogSlot.classList.remove("animate-appear");
      }, 350);
      setTimeout(() => {
        scrollToComponentId("discography-slot");
      }, 375)
      return;
    }
    // using a button with an instruction like "view music" as a toggle switch is not a good idea - keep this in mind for the future. User expectation is to be taken to the music; therefore, simply scroll to page.
    if (!discogSlot.hidden) {
      scrollToComponentId("discography-slot")
      return;
    };

  }


  return (
    <div id="music-page"
      className={`${className}`}>
      <div id="splash-vollkorn-font-provider"
        className={`flex-1 flex flex-col ${vollkorn.className}`}>
        <MusicSplash ref={musicSplash} />
        <div id="music-page-links"
          className={`flex justify-evenly max-w-screen space-between`}>
          <div id="discography-button"
            className="py-3 px-6 sm:px-8 md:px-12 mx-1 rounded-lg text-center flex-0 border border-slate-400 italic text-sm">
            <button
              className="transition duration-300 hover:scale-110"
              onClick={handleDiscography}
            >the music</button>
          </div>
          <div id="timeline-button"
            className="py-3 px-6 sm:px-8 md:px-12 mx-1 rounded-lg text-center flex-0 border border-slate-400 italic text-sm">
            <button
              className="transition duration-300 hover:scale-110"
              onClick={handleTimelineButton}>the story</button>
          </div>
        </div>
      </div>
      <div id="timeline-alegrya-font-provider"
        className={`${alegreya.className}`}
      >
        <div id="timeline-div"
          hidden={timelineState === "closed"}
          className={`${timelineState === "opening" && "animate-appear"} ${timelineState === "closing" && "animate-fade"}`}
        >
          <div id="close-timeline-button-container"
            className={`sticky top-0 ${mobile ? "translate-x-[5.5rem]" : "translate-x-32"} sm:translate-x-48 md:translate-x-64 translate-y-6 max-w-screen text-xs flex justify-end`}>
            <button id="close-timeline-button"
              className={`flex justify-around px-1 py-1 w-28 top-0 left-0 border border-slate-400 rounded-xl ${dmSans.className}`}
              onClick={closeTimeline}
            >close timeline <div id="close-timeline-icon"
              className="w-4"
            >
                {closeIcon}
              </div></button>
          </div>
          <Timeline events={events} albums={albums} />
        </div>
        {timelineState === "open" &&
          <button
            className="border border-slate-400 px-2 py-1 rounded-md text-sm"
            onClick={handleDiscography}>
            View Discography
          </button>}
      </div>
    </div>
  );
};