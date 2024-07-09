import { useState, forwardRef, ForwardedRef } from "react";
import { EventData, AlbumData } from "../../types/element-types";
import { Dialogue } from "./Dialogue";

interface TimelineBarProps {
  className: string
  children: React.ReactNode
}

interface TimelineMarkerProps {
  position: string // defined as a CSS% style for position from top.
  dialoguePosition: string
  event: EventData
  album: AlbumData | undefined
  // children: React.ReactNode
}

// forwarding ref ahead of time - should be helpful to have a reference to the bar itself... May not actually need it, but just in case.
export const TimelineBar = forwardRef(function TimelineBar({ children }: TimelineBarProps, ref: ForwardedRef<HTMLDivElement>) {

  return (
    <div
      ref={ref}
      className="absolute flex-1 flex flex-col items-center h-full">
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


export const TimelineMarker = ({ dialoguePosition, position, event, album }: TimelineMarkerProps) => {
  // When calculating a style dynamically with JS, Tailwind does not have access to that value at compile time. In order to use these kinds of arbitrarily computed styles, use the "style" prop instead.
  const [dialogueState, setDialogueState] = useState<"closed" | "opening" | "open" | "closing">("closed")
  const [hover, setHover] = useState<boolean>(false);

  const handleMarkerTouch = () => {
    if (dialogueState === "closed") {
      // console.log("opening")
      setDialogueState("opening");
      setTimeout(() => {
        setDialogueState("open");
        // console.log("open")
      }, 300);
      return;
    }
    else if (dialogueState === "open") {
      // console.log("closing")
      setDialogueState("closing");
      setTimeout(() => {
        setDialogueState("closed")
        // console.log("closed")
      }, 300)
      return;
    }
  }

  const handleMarkerClick = () => {
    // if (hover && dialogueState === "closed") {
    //   setDialogueState("open");
    //   return;
    // }
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
        <div id={`dot-${position}`}
          className={`absolute size-6 flex-1 rounded-full bg-indigo-950 dark:bg-slate-200 hover:cursor-pointer `}>
        </div>
      </div>
      <div
        style={{
          top: position
        }}
        className={`absolute w-full max-h-fit -z-10 ${dialogueState === "opening" && "animate-appear"} ${dialogueState === "closing" && "animate-fade"}`}
        hidden={dialogueState === "closed"}
      >
        <svg stroke="currentcolor"
          strokeWidth="2px"
          className="">
          <line x1="50%" y1="7%" x2={dialoguePosition === "left" ? "90%" : "10%"} y2="30%" />
        </svg>
      </div>
      <div
        hidden={dialogueState === "closed"}
        style={{
          top: position
        }}
        className={`absolute w-full delay-75 ${dialogueState === "opening" && "animate-appear"} ${dialogueState === "closing" && "animate-fade"}`}>
        <Dialogue event={event} album={album} dialoguePosition={dialoguePosition} />
      </div>
    </>
  )
}