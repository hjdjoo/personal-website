import { useState, forwardRef, ForwardedRef } from "react";
import { MusicEvent, Album } from "@/types/client-types/types";
import { Dialogue } from "./Dialogue";

interface TimelineBarProps {
  className: string
  children: React.ReactNode
}

interface TimelineMarkerProps {
  position: string // defined as a CSS% style for position from top.
  dialoguePosition: string
  event: MusicEvent
  album?: Album
  // children: React.ReactNode
}

// forwarding ref ahead of time - should be helpful to have a reference to the bar itself... May not actually need it, but just in case.
export const TimelineBar = forwardRef(function TimelineBar({ className, children }: TimelineBarProps, ref: ForwardedRef<HTMLDivElement>) {

  return (
    <div
      id="timeline-bar"
      ref={ref}
      className={`absolute flex-1 flex flex-col items-center h-full ${className}`}>
      <svg
        id="timeline-bar"
        className="flex-1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="6px"
        xmlns="http://www.w3.org/2000/svg">
        <line x1="50%" y1="0%" x2="50%" y2="100%" />
      </svg>
      {children}
    </div>
  )
})


/**
 * 
 * @param dialoguePosition : string; 
 * Either "left" or "right" - on alternating sides of the timeline.
 * @param position : string; 
 * Dynamically computed inline CSS string, as a % value from the top. eg, "top-[10%]."
 * @param event : MusicEvent from db;
 * @param album : Album fetched from db;
 * See types/client-types for more info on event and album
 * @returns A Marker component with a Dialogue component nested inside. The Dialogue component takes in the event 
 * This component is highly reactive; take care while adjusting.
 * 
 */
export const TimelineMarker = ({ dialoguePosition, position, event, album }: TimelineMarkerProps) => {

  // When calculating a style dynamically with JS, Tailwind does not have access to that value at compile time. In order to use these kinds of arbitrarily computed styles, use the "style" prop instead.
  const [dialogueState, setDialogueState] = useState<"closed" | "opening" | "open" | "closing">("closed")

  const handleMarkerTouch = () => {
    if (dialogueState === "closed") {
      setDialogueState("opening");
      setTimeout(() => {
        setDialogueState("open");
      }, 300);
      return;
    }
    else if (dialogueState === "open") {
      setDialogueState("closing");
      setTimeout(() => {
        setDialogueState("closed")
      }, 300)
      return;
    }
  }

  const handleMarkerClick = () => {
    if (dialogueState === "closed") {
      console.log("opening")
      setDialogueState("opening");
      setTimeout(() => {
        setDialogueState("open");
        console.log("open")
      }, 300);
      return;
    }
    if (dialogueState === "open") {
      console.log("closing")
      setDialogueState("closing");
      setTimeout(() => {
        setDialogueState("closed")
        console.log("closed")
      }, 300)
      return;
    }
  }

  return (
    <>
      <div id={`marker-${position}`}
        style={{
          top: position
        }}
        onTouchStart={handleMarkerTouch}
        onClick={handleMarkerClick}
        className={`absolute w-full max-h-fit flex flex-col items-center`}>
        {dialogueState === "open" &&
          <div id="clickaway-listener"
            className="absolute -top-24 w-screen h-screen"
            onTouchStart={handleMarkerTouch}
            onClick={handleMarkerClick}>
          </div>
        }
        <div id={`dot-${position}`}
          className={`absolute size-4 flex-1 z-10 rounded-full ${!!album ? "bg-emerald-700 dark:bg-amber-200" : "bg-indigo-950 dark:bg-slate-200"} hover:cursor-pointer`}>
        </div>
        <div id={`dot-animation-${position}`}
          className={`absolute size-6 -top-1 flex-1 -z-20 rounded-full ${!!album ? "bg-emerald-500 dark:bg-amber-100" : "bg-indigo-950 dark:bg-slate-200"} hover:cursor-pointer animate-pulse`}>
        </div>
      </div>
      <div
        id={`${position}-svg-line-div`}
        style={{
          top: position
        }}
        className={`absolute w-full max-h-fit -z-10 ${dialogueState === "opening" && "animate-appear"} ${dialogueState === "closing" && "  animate-fade"}`}
        hidden={dialogueState === "closed"}
      >
        <svg stroke="currentcolor"
          strokeWidth="2px"
          className="w-full">
          <line x1="50%" y1="7%" x2={dialoguePosition === "left" ? "80%" : "20%"} y2="27%" />
        </svg>
      </div>
      <div
        hidden={dialogueState === "closed"}
        style={{
          top: position
        }}
        className={`absolute w-full delay-75 ${dialogueState === "opening" && "animate-appear"} ${dialogueState === "closing" && "delay-75 animate-fade"}`}
      >
        <Dialogue event={event} album={album} dialoguePosition={dialoguePosition} />
      </div>
    </>
  )
}