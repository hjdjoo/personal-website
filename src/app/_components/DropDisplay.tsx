"use client";

import { useState, useRef, useEffect, MouseEvent } from "react";

import { nextButtonSvg, prevButtonSvg } from "@/lib/icons";

import { ProjectData, Project } from "@/types/client-types/types";

import ProjectMediaDisplay from "./ProjectMediaDisplay";
import TechStackDisplay from "./TechStackDisplay";

import getComponentSize from "@/utils/actions/getComponentSize";



interface DropDisplayProps extends Project {
  // projectName: string,
  // projectDescription: string,
  // projectData: Array<ProjectData | undefined>
}

export default function DropDisplay(props: DropDisplayProps) {

  const { projectName, projectDescription, techStack, githubRepo, projectData } = props;

  /** Refs and States **/
  const projectBox = useRef<HTMLDivElement>(null)
  const gallery = useRef<HTMLUListElement>(null)
  const techStackDisplay = useRef<HTMLDivElement>(null);

  const [dropdownStatus, setDropdownStatus] = useState<"closed" | "open" | "opening" | "closing">("closed")

  const [showTechStack, setShowTechStack] = useState<boolean>(false);

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
        className="relative flex-grow-0 flex-shrink-0 flex flex-col items-center w-full ml-auto  mr-auto max-h-full px-4 sm:px-10 md:px-20 lg:px-30"
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

  const handleShowTechStack = (e: MouseEvent<HTMLDivElement>) => {
    // console.log(e);

    // console.log(techStackDisplay.current);
    // // if (!techStackDisplay.current) return;
    // const { clientX: xPos, clientY: yPos } = e;
    // const xCoord = `-left-[${xPos}px]`;
    // const yCoord = `-top-[${yPos}px]`

    // techStackDisplay.current?.classList.add(xCoord, yCoord)

    setShowTechStack(!showTechStack)
  }

  const handleBack = () => {
    const { width } = getComponentSize(projectBox.current!)
    console.log(width);
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
          className={`relative bg-transparent w-full h-[450px] sm:h-[500px] md:h-[600px] lg:h-[700px]`}
        >
          <div id={`${projectName}-media-display`}
            className={`relative w-full flex flex-col justify-end overflow-hidden rounded-sm bg-gradient-to-r from-slate-100 to-white dark:bg-gradient-to-r dark:from-slate-950 dark:to-indigo-800 ${dropdownClasses()}`}>
            <ul id="media-gallery"
              className="absolute w-full pb-10 top-6 flex overflow-x-scroll no-scrollbar scroll-auto"
              ref={gallery}
            >
              {dropdownStatus === "open" && projectMedia}
            </ul>
            {dropdownStatus === "open" &&
              <div id="arrow-nav-box" className="w-full flex justify-between px-10 pb-5">
                <div className="size-8 hover:cursor-pointer z-10" onClick={handleBack}>{prevButton}</div>
                <div className="size-8 hover:cursor-pointer z-10" onClick={handleNext}>{nextButton}</div>
              </div>}
          </div>
        </div>}
      <div id={`${projectName}-other-info-div`}
        className="w-full">
        <div
          className="w-full h-8 bg-slate-800 flex justify-around items-center ">
          <div id={`${projectName}-tech-stack`}
            className="hover:cursor-pointer"
            onClick={handleShowTechStack}
          >
            Tech stack
          </div>
          <div id={`${projectName}-github-link`}>
            <a href={`${githubRepo}`}>Github Repo</a>
          </div>
        </div>
        <div id={`${projectName}-tech-stack-list`}
          className="z-20 min-h-full flex flex-col"
          ref={techStackDisplay} >
          {showTechStack &&
            <TechStackDisplay
              className="z-50 max-w-full flex-1 flex justify-center flex-wrap bg-slate-500/30"
              projectName={projectName} techStack={techStack} />}
        </div>
      </div>
    </>
  )
}