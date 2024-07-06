"use client";

import { useState, useEffect, useRef } from "react";

import { nextButtonSvg, prevButtonSvg } from "@/lib/icons";

import { Project } from "@/types/client-types/types";

import ProjectMediaDisplay from "./ProjectMediaDisplay";
import TechStackContainer from "../_containers/TechStackContainer";

import getComponentSize from "@/utils/actions/getComponentSize";



interface DropDisplayProps extends Project {

}

export default function DropDisplay(props: DropDisplayProps) {

  const { projectName, projectDescription, techStack, githubRepo, projectData } = props;

  /** Refs and States **/
  const projectBox = useRef<HTMLDivElement>(null);
  const gallery = useRef<HTMLUListElement>(null);

  const [dropdownStatus, setDropdownStatus] = useState<"hover" | "closed" | "open" | "opening" | "closing">("closed");

  /** SVG Icons **/
  const nextButton = nextButtonSvg();
  const prevButton = prevButtonSvg();

  /* Other components and utility functions */
  // ProjectMediaDisplay returns an image component or a video component depending on the type of resource.
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
      return "h-0";
    }
    if (dropdownStatus === "opening") {
      return "animate-drop-down";
    }
    if (dropdownStatus === "open") {
      return "h-full";
    }
    if (dropdownStatus === "closing") {
      return "animate-close-up";
    }
  }
  /* handler functions */
  const handleClick = () => {

    if (dropdownStatus === "hover") {
      setDropdownStatus("opening");
      setTimeout(() => {
        setDropdownStatus("open")
      }, 300);
    }
    if (dropdownStatus === "open") {
      setDropdownStatus("closing")
      setTimeout(() => {
        setDropdownStatus("closed");
      }, 300);
    }
  }

  const handleBack = () => {
    const { width } = getComponentSize(projectBox.current!);
    gallery.current?.scrollBy({ left: -width, top: 0, behavior: "smooth" });
  }

  const handleNext = () => {
    const { width } = getComponentSize(projectBox.current!);
    gallery.current?.scrollBy({ left: width, top: 0, behavior: "smooth" });
  }


  return (
    <>
      <div id={`${projectName}-drop-display`}
        className={`relative mt-8 w-full l flex flex-col justify-center rounded-sm  hover:cursor-pointer
        bg-gradient-to-r from-30%  from-slate-300 to-slate-100 dark:bg-gradient-to-r dark:from-30% dark:from-indigo-950  dark:to-sky-950`}
        onClick={handleClick}
        onMouseEnter={() => {
          if (dropdownStatus === "open") return;
          setDropdownStatus("hover");
        }}
        onMouseLeave={() => {
          if (dropdownStatus === "hover") setDropdownStatus("closed");
          if (dropdownStatus === "opening" || "open") return;
        }}
        ref={projectBox}>
        <div id="drop-display-header-bg-transition-div"
          className={`absolute w-full h-full bg-gradient-to-r from-slate-400 to-slate-200 dark:bg-gradient-to-r dark:from-slate-950 dark:to-indigo-800 ${dropdownStatus !== "open" && "transition-opacity duration-300"} ${dropdownStatus === "hover" || dropdownStatus === "open" || dropdownStatus === "opening" ? "opacity-100" : "opacity-0"}`}
        >
        </div>
        <div id={`${projectName}-header`}
          className={`relative mt-2 mb-2 lg:flex w-full`}
        >
          <div className="flex-1 sm:text-md px-6 lg:text-xl font-semibold underline">
            {projectName}:
          </div>
          <div className="flex flex-2 text-xs px-6 sm:text-sm lg:text-lg mt-auto mb-auto ml-auto mr-3 font-thin">
            {projectDescription}
            <div className={`size-4 mb-auto ml-auto lg:ml-4 lg:mt-auto ${dropdownStatus !== "closed" || "hover" ? "transition duration-100 rotate-90" : "transition duration-100 rotate-0"}`} >
              {nextButton}
            </div>
          </div>
        </div>
      </div>
      {(dropdownStatus !== "closed" && dropdownStatus !== "hover") &&
        <div id={`${projectName}-media-spacer`}
          className={`relative bg-transparent w-full h-[450px] sm:h-[500px] md:h-[600px] lg:h-[700px]`}
        >
          <div id={`${projectName}-media-display`}
            className={`relative w-full flex flex-col justify-end overflow-hidden rounded-sm bg-gradient-to-r from-slate-400 to-slate-200 dark:bg-gradient-to-r dark:from-slate-950 dark:to-indigo-800 ${dropdownClasses()}`}>
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
      <TechStackContainer projectName={projectName} techStack={techStack} githubRepo={githubRepo}></TechStackContainer>
    </>
  )
}