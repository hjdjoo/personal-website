"use client";

import { useState } from "react";

import { nextButtonSvg } from "@/lib/icons";


interface DropDisplayProps {
  projectName: string,
  projectDescription: string,
}

export default function DropDisplay(props: DropDisplayProps) {

  const { projectName, projectDescription } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);

  const nextButton = nextButtonSvg();

  const handleClick = () => {
    if (!isOpen && !isActive) {
      setIsOpen(!isOpen);
      setIsActive(!isActive);
    }
    if (isActive) {
      setIsOpen(!isOpen)
      setTimeout(() => {
        setIsActive(!isActive)
      }, 500)
    }
  }

  return (
    <>
      <div id={`${projectName}-drop-display`}
        className="relative mt-8 w-full md:w-full flex flex-col justify-center px-6 bg-gradient-to-r from-30% rounded-sm from-slate-300  to-slate-100 hover:cursor-pointer dark:bg-gradient-to-r dark:from-30% dark:from-indigo-950  dark:to-sky-950"
        onClick={handleClick}>
        <div id={`${projectName}-header`}
          className={`mt-2 mb-2 lg:flex w-full`}
        >
          <div className="flex-1 sm:text-md lg:text-xl font-semibold underline">
            {projectName}:
          </div>
          <div className="flex flex-3 text-xs sm:text-sm lg:text-lg mt-auto mb-auto ml-auto mr-3 font-thin">
            {projectDescription}
            <div className={`size-4 mb-auto ml-auto lg:ml-4 lg:mt-auto ${isOpen ? "transition duration-100 rotate-90" : "transition duration-100 rotate-0"}`} >
              {nextButton}
            </div>
          </div>
        </div>
      </div>
      <div className={`w-full rounded-sm bg-gradient-to-r from-slate-100 to-white dark:bg-gradient-to-r dark:from-slate-950 dark:to-indigo-800 ${isOpen ? "animate-drop-down" : isActive ? "animate-close-up" : ""}`}>
      </div>
    </>
  )
}