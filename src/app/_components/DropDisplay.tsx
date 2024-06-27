"use client";

import { useState, useRef } from "react";

import { nextButtonSvg, prevButtonSvg } from "@/lib/icons";

import { ProjectData } from "@/types/client-types/types";

import ProjectMediaDisplay from "./ProjectMediaDisplay";

import getComponentSize from "@/utils/actions/getComponentSize";


interface DropDisplayProps {
  projectName: string,
  projectDescription: string,
  projectData: Array<ProjectData | undefined>
}

export default function DropDisplay(props: DropDisplayProps) {

  const { projectName, projectDescription, projectData } = props;

  /** Refs and States **/
  const projectBox = useRef<HTMLDivElement>(null)
  const gallery = useRef<HTMLUListElement>(null)

  const [dropdownStatus, setDropdownStatus] = useState<"closed" | "open" | "opening" | "closing">("closed")

  /** useEffects **/

  /** SVG Icons **/
  const nextButton = nextButtonSvg();
  const prevButton = prevButtonSvg();

  const handleClick = () => {

    if (dropdownStatus === "closed") {
      setDropdownStatus("opening")
      setTimeout(() => {
        setDropdownStatus("open")
      }, 400)
    }
    if (dropdownStatus === "open") {
      setDropdownStatus("closing")
      setTimeout(() => {
        setDropdownStatus("closed")
      }, 400)
    }
  }

  /* Other components and utility functions */
  const projectMedia = projectData.map((data, idx) => {
    if (!data) return;
    return (
      <li key={`${projectName}-media-${idx + 1}`}
        className="relative flex-grow-0 flex-shrink-0 w-full max-h-[500px] md:max-h-[600px] lg:max-h-[800px] px-10"
      >
        <ProjectMediaDisplay
          projectData={data} />
      </li>
    )
  })

  const dropdownClasses = () => {
    if (dropdownStatus === "closed") {
      return "h-0"
    }
    if (dropdownStatus === "opening") {
      return "animate-drop-down"
    }
    if (dropdownStatus === "open") {
      return "h-full"
    }
    if (dropdownStatus === "closing") {
      return "animate-close-up"
    }
  }

  const handleBack = () => {
    const { width } = getComponentSize(projectBox.current!)
    gallery.current?.scrollBy({ left: -width, top: 0, behavior: "smooth" })
  }

  const handleNext = () => {
    const { width } = getComponentSize(projectBox.current!)
    gallery.current?.scrollBy({ left: width, top: 0, behavior: "smooth" })
  }


  return (
    <>
      <div id={`${projectName}-drop-display`}
        className="relative mt-8 w-full l flex flex-col justify-center px-6 bg-gradient-to-r from-30% rounded-sm from-slate-300  to-slate-100 hover:cursor-pointer dark:bg-gradient-to-r dark:from-30% dark:from-indigo-950  dark:to-sky-950"
        onClick={handleClick}
        ref={projectBox}>
        <div id={`${projectName}-header`}
          className={`mt-2 mb-2 lg:flex w-full`}
        >
          <div className="flex-1 sm:text-md lg:text-xl font-semibold underline">
            {projectName}:
          </div>
          <div className="flex flex-3 text-xs sm:text-sm lg:text-lg mt-auto mb-auto ml-auto mr-3 font-thin">
            {projectDescription}
            <div className={`size-4 mb-auto ml-auto lg:ml-4 lg:mt-auto ${dropdownStatus !== "closed" ? "transition duration-100 rotate-90" : "transition duration-100 rotate-0"}`} >
              {nextButton}
            </div>
          </div>
        </div>
      </div>
      {dropdownStatus !== "closed" &&
        <div id={`${projectName}-media-spacer`}
          className={`relative bg-transparent w-full h-[400px] md:h-[550px] lg:h-[600px]`}
        >
          <div id={`${projectName}-media-display`}
            className={`relative w-full flex flex-col justify-end overflow-hidden rounded-sm bg-gradient-to-r from-slate-100 to-white dark:bg-gradient-to-r dark:from-slate-950 dark:to-indigo-800 ${dropdownClasses()}`}>

            <ul id="media-gallery"
              className="absolute pb-10 top-12 flex overflow-x-scroll no-scrollbar scroll-auto"
              ref={gallery}
            >
              {dropdownStatus === "open" && projectMedia}
            </ul>
            {dropdownStatus === "open" &&
              <div id="arrow-nav-box" className="w-full flex justify-between px-10 pb-5">
                <div className="size-8" onClick={handleBack}>{prevButton}</div>
                <div className="size-8" onClick={handleNext}>{nextButton}</div>
              </div>
            }
          </div>
        </div>}
    </>
  )
}